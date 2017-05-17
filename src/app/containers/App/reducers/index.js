import { fromJS } from 'immutable'
import calculator from 'app/services/calculator'
import ManualCalculator from 'app/factories/ManualCalculator'
import * as ActionTypes from '../constants'
import * as selectors from '../selectors'
import worksReducer from './works'

const initialState = fromJS({
  tags: [],
  calculators: []
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
      return state.set('calculators', calculator(selectors.calculators(state)))
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
    default: {
      if (action.calculatorId !== void 0 && action.type.indexOf('_WORK') > -1) {
        return state.updateIn(
          ['calculators', findCalculatorIndex(state, action.calculatorId), 'works'],
          works => worksReducer(works, action)
        )
      }
    }
  }

  return state
}

function findCalculatorIndex (state, id) {
  return selectors.findIndexById(selectors.calculators(state), id)
}