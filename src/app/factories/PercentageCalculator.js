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

function calculate (calculator, complexity, calculators) {
  const coeff = calculator.get('value') / 100
  const result = calculator.get('calculators').reduce((result, calculatorId) => {
    let relativeCalculator = calculators.find(calculator => calculator.get('id') === calculatorId)

    if (relativeCalculator !== void 0) {
      result.hours += Math.ceil(relativeCalculator.get('hours') * coeff * complexity)
    }

    return result
  }, {
    hours: 0,
    price1: 0,
    price2: 0
  })

  result.price1 = result.hours * calculator.get('hourPrice1')
  result.price2 = result.hours * calculator.get('hourPrice2')

  return calculator.merge(result)
}
