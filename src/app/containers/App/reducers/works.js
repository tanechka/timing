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

    case ActionTypes.UPDATE_CALCULATOR_WORK: {
      return state.updateIn(
        [selectors.findIndexById(state, action.id)], work =>
        work.merge(action.payload)
      )
    }

    case ActionTypes.ADD_TAG_TO_WORK: {
      return state.updateIn(
        [selectors.findIndexById(state, action.id)], work =>
        work.set('tagId', action.tagId)
      )
    }
  }

  return state
}
