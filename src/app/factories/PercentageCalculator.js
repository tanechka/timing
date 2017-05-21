import { PERCENTAGE } from '../constants/CalculatorTypes'
import Calculator from './Calculator'
import calculator from 'app/services/calculator'

calculator[PERCENTAGE] = calculate

export default function (calc) {
  return {
    ...Calculator(),
    type: PERCENTAGE,
    value: 100,
    calculators: [],
    ...calc
  }
}

function calculate (calculator, calculators) {
  const coeff = calculator.get('value') / 100
  const result = calculator.get('calculators').reduce((result, calculatorId) => {
    let calculator = calculators.find(calculator => calculator.get('id') === calculatorId)

    if (calculator !== void 0) {
      result.hours += calculator.get('hours') * coeff
      result.price1 += calculator.get('price1') * coeff
      result.price2 += calculator.get('price2') * coeff
    }

    return result
  }, {
    hours: 0,
    price1: 0,
    price2: 0
  })

  return calculator.merge(result)
}
