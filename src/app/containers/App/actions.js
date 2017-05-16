import * as ActionTypes from './constants'

export function checkWorking () {
  return {
    type: ActionTypes.CHECK_WORKING
  }
}

export function addCalculator () {
  return {
    type: ActionTypes.ADD_CALCULATOR
  }
}

export function removeCalculator(index) {
  return {
    type: ActionTypes.REMOVE_CALCULATOR,
    index
  }
}
