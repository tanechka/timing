import { MANUAL } from 'app/constants/CalculatorTypes'
import * as ActionTypes from './constants'
import * as actions from './actions'
import _throttle from 'lodash/throttle'
import * as selectors from './selectors'

const throttleCaclulate = _throttle(dispatch => dispatch(actions.calculateCalculator()), 200)

export default state => next => action => {
  const {dispatch} = state
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
      const result = next(action)
      const afterCalculate = []

      selectors.calculators(state.getState()).forEach(calculator => {
        const calculateFunction = () => dispatch(actions.calculateCalculator(calculator.get('id')))
        if (calculator.get('type') === MANUAL) {
          calculateFunction()
        }
        else {
          afterCalculate.push(calculateFunction)
        }
      })
      afterCalculate.forEach(calculate => calculate())

      return result
    }
  }
  return next(action)
}
