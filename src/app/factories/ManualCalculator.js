import { MANUAL } from '../constants/CalculatorTypes'
import Calculator from './Calculator'
import calculator from 'app/services/calculator'

calculator[MANUAL] = calculate

export default function (calc) {
  return {
    ...Calculator(),
    name: 'Проектирование',
    type: MANUAL,
    works: [],
    ...calc
  }
}

function calculate (calculator, complexity) {
  const result = calculator.get('works').reduce((result, work) => {
    const hours = work.get('hours') * work.get('count') * complexity

    result.hours += Math.ceil(hours)
    result.price1 += (work.get('hourPrice1') || calculator.get('hourPrice1')) * hours
    result.price2 += (work.get('hourPrice2') || calculator.get('hourPrice2')) * hours

    return result
  }, {
    hours: 0,
    price1: 0,
    price2: 0
  })

  return calculator.merge(result)
}
