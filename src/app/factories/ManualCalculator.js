import { MANUAL } from '../constants/CalculatorTypes'

export default class ManualCalculator {
  constructor (calc) {
    return {
      name: '',
      type: MANUAL,
      hourPrice1: void 0,
      hourPrice2: void 0,
      works: [],
      ...calc
    }
  }
}
