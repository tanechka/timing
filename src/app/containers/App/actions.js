import * as ActionTypes from './constants'

export function listCalculator (payload) {
  return {
    type: ActionTypes.LIST_CALCULATOR,
    payload
  }
}

export function calculateCalculator (id) {
  return {
    type: ActionTypes.CALCULATE_CALCULATOR,
    id
  }
}

export function addCalculator (type) {
  return {
    type: ActionTypes.ADD_CALCULATOR,
    payload: {
      type
    }
  }
}

export function updateCalculator (id, payload) {
  return {
    type: ActionTypes.UPDATE_CALCULATOR,
    id,
    payload
  }
}

export function removeCalculator (id) {
  return {
    type: ActionTypes.REMOVE_CALCULATOR,
    id
  }
}

export function removeCalculatorWork (calculatorId, id) {
  return {
    type: ActionTypes.REMOVE_CALCULATOR_WORK,
    calculatorId,
    id
  }
}

export function addCalculatorWork(calculatorId, id) {
  return {
    type: ActionTypes.ADD_CALCULATOR_WORK,
    calculatorId,
    id
  }
}

export function updateCalculatorWork (calculatorId, id, payload) {
  return {
    type: ActionTypes.UPDATE_CALCULATOR_WORK,
    calculatorId,
    id,
    payload
  }
}

export function addPercentageCalculator(calculatorId, id) {
  return {
    type: ActionTypes.ADD_PERCENTAGE_CALCULATOR,
    calculatorId,
    id
  }
}

export function removePercentageCalculator(calculatorId, id) {
  return {
    type: ActionTypes.REMOVE_PERCENTAGE_CALCULATOR,
    calculatorId,
    id
  }
}

export function setComplexity(payload) {
  return {
    type: ActionTypes.SET_COMPLEXITY,
    payload
  }
}

export function updateTagCount(id, payload) {
  return {
    type: ActionTypes.UPDATE_TAG_COUNT,
    id,
    payload
  }
}
