import { fromJS } from 'immutable'
import PercentageCalculator from 'app/factories/PercentageCalculator'
import * as ActionTypes from '../constants'
import * as selectors from '../selectors'

export default function (state, action) {
  switch (action.type) {
    case ActionTypes.ADD_PERCENTAGE_CALCULATOR: {
      if(state.indexOf(action.id) !== -1){
        break;
      }
      return state.push(action.id)
    }
  }
  return state
}
