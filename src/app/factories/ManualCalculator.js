import { MANUAL } from '../constants/CalculatorTypes'
import Calculaltor from './Calculaltor'
import calculator from 'app/services/calculator'

calculator[MANUAL] = calculate

export default function (calc) {
  return {
    ...Calculaltor(),
    name: 'Проектирование',
    type: MANUAL,
    works: [],
    ...calc
  }
}

function calculate (calculator) {
  const result = calculator.get('works').reduce((result, work) => {
    const count = work.get('count')

    result.hours += work.get('hours') * count
    result.price1 += (work.get('hourPrice1') || calculator.get('hourPrice1')) * count
    result.price2 += (work.get('hourPrice2') || calculator.get('hourPrice2')) * count

    return result
  }, {
    hours: 0,
    price1: 0,
    price2: 0
  })

  return calculator.merge(result)
}
