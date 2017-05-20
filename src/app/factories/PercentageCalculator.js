import { PERCENTAGE } from '../constants/CalculatorTypes'
import Calculator from './Calculator'
import calculator from 'app/services/calculator'

export default function (calc) {
  return {
    ...Calculator(),
    name: 'Проектирование',
    type: PERCENTAGE,
    calculators: [],
    ...calc
  }
}
