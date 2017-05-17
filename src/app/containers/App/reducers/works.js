import { fromJS } from 'immutable'
import Work from 'app/factories/Work'
import * as ActionTypes from '../constants'
import * as selectors from '../selectors'

export default function (state, action) {
  switch (action.type) {
    case ActionTypes.ADD_CALCULATOR_WORK: {
      return state.push(fromJS(new Work({name: 'test'})))
    }
    case ActionTypes.REMOVE_CALCULATOR_WORK: {
      return state.delete(selectors.findIndexById(state, action.id))
    }
  }

  return state
}