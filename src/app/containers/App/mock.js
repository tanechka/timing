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
          hours: 2
        },
        {
          name: 'Нормальная',
          count: 5,
          hours: 4
        },
        {
          name: 'Сложная',
          count: 10,
          hours: 16,
          hourPrice1: 550,
          hourPrice2: 900
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
