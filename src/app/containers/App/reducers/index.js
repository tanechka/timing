import { fromJS } from 'immutable'
import * as CalculatorTypes from 'app/constants/CalculatorTypes'
import calculator from 'app/services/calculator'
import ManualCalculator from 'app/factories/ManualCalculator'
import PercentageCalculator from 'app/factories/PercentageCalculator'
import * as ActionTypes from '../constants'
import * as selectors from '../selectors'
import worksReducer from './works'
import percentageCalculatorReducer from './percentageCalculators'

const initialState = fromJS({
  complexity: 1.2,
  tags: [],
  calculators: []
})

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHECK_WORKING: {
      return state
    }
    case ActionTypes.LIST_CALCULATOR: {
      return state.merge(fromJS(action.payload))
    }
    case ActionTypes.CALCULATE_CALCULATOR: {
      let calculators = selectors.calculators(state)
      return state.set(
        'calculators',
        calculator(
          calculators,
          selectors.complexity(state),
          selectors.findIndexById(calculators, action.id)
        )
      )
    }
    case ActionTypes.ADD_CALCULATOR: {
      const Calculator = action.payload.type === CalculatorTypes.MANUAL ? ManualCalculator : PercentageCalculator

      return state.updateIn(
        ['calculators'],
        calculators => calculators.push(fromJS(new Calculator))
      )
    }
    case ActionTypes.UPDATE_CALCULATOR: {
      return state.updateIn(
        ['calculators', findCalculatorIndex(state, action.id)],
        calculator => calculator.merge(action.payload)
      )
    }
    case ActionTypes.REMOVE_CALCULATOR: {
      return state.deleteIn(['calculators', findCalculatorIndex(state, action.id)])
    }

    case ActionTypes.SET_COMPLEXITY: {
      return state.set('complexity', action.payload.count)
    }
    case ActionTypes.UPDATE_TAG_COUNT: {
      return state.updateIn(['tags', findTagIndex(state, action.id)],
        tag => tag.merge(action.payload)
      )
    }
    default: {
      if (action.calculatorId !== void 0 && action.type.indexOf('_WORK') > -1) {
        return state.updateIn(
          ['calculators', findCalculatorIndex(state, action.calculatorId), 'works'],
          works => worksReducer(works, action)
        )
      }
      if (action.calculatorId !== void 0 && action.type.indexOf('_PERCENTAGE') > -1) {
        return state.updateIn(
          ['calculators', findCalculatorIndex(state, action.calculatorId), 'calculators'],
          calculators => percentageCalculatorReducer(calculators, action)
        )
      }
    }
  }

  return state
}

function findCalculatorIndex (state, id) {
  return selectors.findIndexById(selectors.calculators(state), id)
}

function findTagIndex (state, id) {
  return selectors.findIndexById(selectors.tags(state), id)
}
