import ManualCalculator from '../../factories/ManualCalculator'
import Work from '../../factories/Work'
import Tag from '../../factories/Tag'
import PercentageCalculator from '../../factories/PercentageCalculator'
import {MANUAL, PERCENTAGE} from 'app/constants/CalculatorTypes'
import variables from  '!!sass-variable-loader!app/variables.scss'

const PRICE_1 = 10
const PRICE_2 = 20

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
    color: variables.blue,
    value: 5,
    hourPrice1: PRICE_1,
    hourPrice2: PRICE_2,
    calculators: []
  }),
  new PercentageCalculator({
    name: 'Specification',
    color: variables.blue,
    value: 15,
    hourPrice1: PRICE_1,
    hourPrice2: PRICE_2
  }),
  new ManualCalculator({
    name: 'Software Design',
    color: variables.mint,
    hourPrice1: PRICE_1,
    hourPrice2: PRICE_2,
    works: getWorkList(mock)
  }),
  new ManualCalculator({
    name: 'GUI Design',
    color: variables.mint,
    hourPrice1: PRICE_1,
    hourPrice2: PRICE_2,
    works: getWorkList(mock)
  }),
  new ManualCalculator({
    name: 'Software Construction',
    color: variables.orange,
    hourPrice1: PRICE_1,
    hourPrice2: PRICE_2,
    works: getWorkList(mock)
  }),
  new ManualCalculator({
    name: 'GUI Construction',
    color: variables.orange,
    hourPrice1: PRICE_1,
    hourPrice2: PRICE_2,
    works: getWorkList(mock)
  }),
  new PercentageCalculator(({
    name: 'Testing',
    color: variables.orange,
    value: 20,
    hourPrice1: PRICE_1,
    hourPrice2: PRICE_2
  })),
  new PercentageCalculator({
    name: 'Quality Assurance',
    color: variables.yellow,
    value: 10,
    hourPrice1: PRICE_1,
    hourPrice2: PRICE_2
  }),
  new PercentageCalculator(({
    name: 'Deploying',
    color: variables.yellow,
    value: 2,
    hourPrice1: PRICE_1,
    hourPrice2: PRICE_2
  }))
]

mock.calculators.forEach(calculator => {
  const manualIds = getManualCalculatorIds(mock)
  if (calculator.type === PERCENTAGE) {
    calculator.calculators = manualIds
  }
})

export default mock
