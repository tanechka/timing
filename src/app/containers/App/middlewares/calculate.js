import * as ActionTypes from '../constants'
import * as actions from '../actions'

export default ({dispatch}) => next => action => {
  switch (action.type) {
    case ActionTypes.UPDATE_CALCULATOR_WORK:
    case ActionTypes.LIST_CALCULATOR: {
      const result = next(action)

      dispatch(actions.calculateCalculator())
      return result
    }
  }
  return next(action)
}
