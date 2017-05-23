import ManualCalculator from '../../factories/ManualCalculator'
import Work from '../../factories/Work'
import Tag from '../../factories/Tag'
import PercentageCalculator from '../../factories/PercentageCalculator'
import {MANUAL, PERCENTAGE} from 'app/constants/CalculatorTypes'

function getWorkList (mock) {
  return [
    new Work({
      name: 'Простая',
      count: 0,
      hours: 2,
      tagId: mock.tags[0].id
    }),
    new Work({
      name: 'Нормальная',
      count: 0,
      hours: 4,
      tagId: mock.tags[1].id
    }),
    new Work({
      name: 'Сложная',
      count: 0,
      hours: 6,
      tagId: mock.tags[2].id
    }),
    new Work({
      name: 'Комплексная',
      count: 0,
      hours: 16,
      tagId: mock.tags[3].id
    })
  ]
}

function getManualCalculatorIds (mock) {
  return mock.calculators.reduce((ids, calculator) => {
    if (calculator.type === MANUAL) {
      ids.push(calculator.id)
    }
    return ids
  }, [])
}

const mock = {
  complexity: 1.2,
  tags: [
    new Tag({
      color: "blue",
      count: 0
    }),
    new Tag({
      color: "green",
      count: 0
    }),
    new Tag({
      color: "orange",
      count: 0
    }),
    new Tag({
      color: "red",
      count: 0
    })
  ]
}

mock.calculators = [
  new PercentageCalculator({
    name: 'Technical Requirements',
    value: 5,
    hourPrice1: 350,
    hourPrice2: 700,
    calculators: []
  }),
  new PercentageCalculator({
    name: 'Specification',
    value: 15,
    hourPrice1: 350,
    hourPrice2: 700
  }),
  new ManualCalculator({
    name: 'Software Design',
    hourPrice1: 350,
    hourPrice2: 700,
    works: getWorkList(mock)
  }),
  new ManualCalculator({
    name: 'GUI Design',
    hourPrice1: 350,
    hourPrice2: 700,
    works: getWorkList(mock)
  }),
  new ManualCalculator({
    name: 'Software Construction',
    hourPrice1: 350,
    hourPrice2: 700,
    works: getWorkList(mock)
  }),
  new ManualCalculator({
    name: 'GUI Construction',
    hourPrice1: 350,
    hourPrice2: 700,
    works: getWorkList(mock)
  }),
  new PercentageCalculator(({
    name: 'Testing',
    value: 20,
    hourPrice1: 350,
    hourPrice2: 700
  })),
  new PercentageCalculator({
    name: 'Quality Assurance',
    value: 10,
    hourPrice1: 350,
    hourPrice2: 700
  }),
  new PercentageCalculator(({
    name: 'Deploying',
    value: 2,
    hourPrice1: 350,
    hourPrice2: 700
  }))
]

mock.calculators.forEach(calculator => {
  const manualIds = getManualCalculatorIds(mock)
  if (calculator.type === PERCENTAGE) {
    calculator.calculators = manualIds
  }
})

export default mock
