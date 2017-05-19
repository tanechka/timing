import * as ActionTypes from './constants'
import * as actions from './actions'
import _throttle from 'lodash/throttle'

const throttleCaclulate = _throttle(dispatch => dispatch(actions.calculateCalculator()), 200)

export default ({dispatch}) => next => action => {
  let calculatorId = action.id

  switch (action.type) {
    case ActionTypes.ADD_CALCULATOR_WORK:
    case ActionTypes.UPDATE_CALCULATOR_WORK:
    case ActionTypes.REMOVE_CALCULATOR_WORK:
      calculatorId = action.calculatorId
    case ActionTypes.UPDATE_CALCULATOR:
      if (action.payload.name !== undefined) {
        break
      }
    case ActionTypes.ADD_CALCULATOR: {
      const result = next(action)

      dispatch(actions.calculateCalculator(calculatorId))
      throttleCaclulate(dispatch)
      return result
    }
    case ActionTypes.LIST_CALCULATOR:
    case ActionTypes.REMOVE_CALCULATOR: {
      throttleCaclulate(dispatch)
      break
    }
  }
  return next(action)
}
