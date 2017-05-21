import {REDUCER_NAME} from './constants'

export function timestamp (state) {
  return state.get('timestamp')
}
export function complexity(state) {
  return state.get('complexity')
}
export function calculators (state) {
  state = state[REDUCER_NAME] === void 0 ? state : state[REDUCER_NAME]
  return state.get('calculators')
}

export function calculator (state, id) {
  const _calculators = calculators(state)
  return _calculators.get(findIndexById(_calculators, id))
}

export function findIndexById (collection, id) {
  let index = collection.findIndex(item => item.get('id') === id)
  return index >= 0 ? index : void 0
}
