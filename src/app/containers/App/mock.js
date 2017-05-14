import * as  CalculatorTypes from '../../constants/CalculatorTypes'
import ManualCalculator from '../../factories/ManualCalculator'

export default {
  tags: [],
  calculators: [
    new ManualCalculator({
      name: 'Проектирование',
      hourPrice1: 350,
      hourPrice2: 700,
      works: [
        {
          name: 'Простая',
          count: 20,
          time: 2,
          hourPrice1: 350,
          hourPrice2: 700
        }
      ]
    }),
    {
      type: CalculatorTypes.PERCENTAGE,
      name: 'Техническое задание',
      calculators: []
    }
  ]
}