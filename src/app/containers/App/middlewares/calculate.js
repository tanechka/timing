import { MANUAL } from 'app/constants/CalculatorTypes'
import * as ActionTypes from '../constants'
import * as actions from '../actions'
import _throttle from 'lodash/throttle'
import * as selectors from '../selectors'

const throttleCalculate = _throttle(dispatch => dispatch(actions.calculateCalculator()), 300)

export default store => next => action => {
  const {dispatch} = store
  let calculatorId = action.id

  switch (action.type) {
    case ActionTypes.ADD_CALCULATOR_WORK:
    case ActionTypes.UPDATE_CALCULATOR_WORK:
    case ActionTypes.REMOVE_CALCULATOR_WORK:
    case ActionTypes.ADD_PERCENTAGE_CALCULATOR:
    case ActionTypes.REMOVE_PERCENTAGE_CALCULATOR:
      calculatorId = action.calculatorId
    case ActionTypes.UPDATE_CALCULATOR:
      if (action.payload !== void 0 && action.payload.name !== void 0) {
        break
      }
    case ActionTypes.UPDATE_TAG_COUNT:
    case ActionTypes.SET_COMPLEXITY:
    case ActionTypes.ADD_CALCULATOR: {
      const result = next(action)

      if (calculatorId !== void 0) {
        dispatch(actions.calculateCalculator(calculatorId))
      }
      throttleCalculate(dispatch)
      return result
    }
    case ActionTypes.LIST_CALCULATOR:
    case ActionTypes.REMOVE_CALCULATOR: {
      const result = next(action)
      calculateAll(store)

      return result
    }
  }
  return next(action)
}

function calculateAll (store) {
  const afterCalculate = []

  selectors.calculators(store.getState()).forEach(calculator => {
    const calculateFunction = () => store.dispatch(actions.calculateCalculator(calculator.get('id')))
    if (calculator.get('type') === MANUAL) {
      calculateFunction()
    }
    else {
      afterCalculate.push(calculateFunction)
    }
  })
  afterCalculate.forEach(calculate => calculate())
}