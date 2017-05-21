import * as ActionTypes from '../constants'

export default function (state, action) {
  switch (action.type) {
    case ActionTypes.ADD_PERCENTAGE_CALCULATOR: {
      if (state.indexOf(action.id) !== -1) {
        break
      }
      return state.push(action.id)
    }
    case ActionTypes.REMOVE_PERCENTAGE_CALCULATOR: {
      return state.delete(state.indexOf(action.id))
    }
  }
  return state
}
