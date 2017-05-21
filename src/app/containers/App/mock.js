import ManualCalculator from '../../factories/ManualCalculator'
import Work from '../../factories/Work'
import PercentageCalculator from '../../factories/PercentageCalculator'

const mock = {
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
    new PercentageCalculator({
      name: 'Техническое задание',
      hourPrice1: 350,
      hourPrice2: 700,
      calculators: []
    })
  ]
}

mock.calculators[1].calculators.push(mock.calculators[0].id)

export default mock
