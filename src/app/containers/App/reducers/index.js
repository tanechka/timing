import { fromJS } from 'immutable'
import calculator from 'app/services/calculator'
import ManualCalculator from 'app/factories/ManualCalculator'
import * as ActionTypes from '../constants'
import * as selectors from '../selectors'
import worksReducer from './works'
import percentageCalculatorReducer from './percentageCalculators'

const initialState = fromJS({
  tags: [],
  calculators: [],
  complexity: 1
})

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHECK_WORKING: {
      return state
    }
    case ActionTypes.LIST_CALCULATOR: {
      return fromJS(action.payload)
    }
    case ActionTypes.CALCULATE_CALCULATOR: {
      let calculators = selectors.calculators(state)
      return state.set('calculators', calculator(calculators, selectors.findIndexById(calculators, action.id)))
    }
    case ActionTypes.ADD_CALCULATOR: {
      return state.updateIn(
        ['calculators'],
        calculators => calculators.push(fromJS(new ManualCalculator))
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
