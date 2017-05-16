import { fromJS } from 'immutable'
import * as ActionTypes from './constants'
import ManualCalculator from'app/factories/ManualCalculator'
import mock from './mock'

const initialState = fromJS(mock)

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHECK_WORKING: {
      return state
    }
    case ActionTypes.ADD_CALCULATOR: {
      return state.updateIn(['calculators'], calculators => calculators.push(fromJS(new ManualCalculator)));
    }
    case ActionTypes.REMOVE_CALCULATOR: {
      return state.deleteIn(['calculators', action.index]);
    }
  }

  return state
}
