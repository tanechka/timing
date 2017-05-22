import { Map } from 'immutable'
import CalculationResult from 'app/factories/CalculationResult'

export default function calculatorService ({calculators, complexity, index}) {
  let _calculate = calculate.bind(null, calculators, complexity)
  let nextCalculators

  if (index !== void 0) {
    nextCalculators = calculators.update(index, _calculate)
  } else {
    nextCalculators = calculators.map(_calculate)
  }
  let nextResult = nextCalculators.reduce((result, calculator) => {
    result.hours += calculator.get('hours')
    result.price1 += calculator.get('price1')
    result.price2 += calculator.get('price2')
    return result
  }, new CalculationResult())
  return {
    result: Map(
      Object.assign(
        nextResult,
        getHoursFromTo(nextResult),
        getProfit(nextResult)
      )
    ),
    calculators: nextCalculators
  }
}

function getProfit (result) {
  return {
    profit: result.price2 - result.price1
  }
}

function getHoursFromTo (result) {
  return {
    hoursFrom: Math.ceil(result.hours / 1.5),
    hoursTo: Math.ceil(result.hours * 1.5)
  }
}

function calculate (calculators, complexity, calculator) {
  const type = calculator.get('type')
  return calculatorService[type] ? calculatorService[type](calculator, complexity, calculators) : calculator
}
