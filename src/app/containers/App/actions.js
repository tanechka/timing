import * as ActionTypes from './constants'

export function listCalculator (payload) {
  return {
    type: ActionTypes.LIST_CALCULATOR,
    payload
  }
}

export function calculateCalculator (index) {
  return {
    type: ActionTypes.CALCULATE_CALCULATOR,
    index
  }
}

export function addCalculator () {
  return {
    type: ActionTypes.ADD_CALCULATOR
  }
}

export function updateCalculator (index, payload) {
  return {
    type: ActionTypes.UPDATE_CALCULATOR,
    index,
    payload
  }
}

export function removeCalculator(index) {
  return {
    type: ActionTypes.REMOVE_CALCULATOR,
    index
  }
}
