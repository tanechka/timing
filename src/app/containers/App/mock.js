import * as  CalculatorTypes from '../../constants/CalculatorTypes'
import ManualCalculator from '../../factories/ManualCalculator'
import Work from '../../factories/Work'

export default {
  tags: [],
  calculators: [
    new ManualCalculator({
      name: 'Проектирование',
      hourPrice1: 350,
      hourPrice2: 700,
      works: [
        new Work({
          name: 'Простая',
          count: 20,
          hours: 2
        }),
        new Work({
          name: 'Нормальная',
          count: 5,
          hours: 4
        }),
        new Work({
          name: 'Сложная',
          count: 10,
          hours: 16,
          hourPrice1: 550,
          hourPrice2: 900
        })
      ]
    }),
    {
      id: -1,
      type: CalculatorTypes.PERCENTAGE,
      name: 'Техническое задание',
      calculators: []
    }
  ]
}
