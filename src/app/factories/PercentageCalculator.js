import { PERCENTAGE } from '../constants/CalculatorTypes'
import Calculaltor from './Calculaltor'
import calculator from 'app/services/calculator'

export default function (calc) {
  return {
    ...Calculaltor(),
    name: 'Проектирование',
    type: PERCENTAGE,
    calculators: [],
    ...calc
  }
}
