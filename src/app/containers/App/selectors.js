import { REDUCER_NAME } from './constants'

export function getRoot (state) {
  return state[REDUCER_NAME] === void 0 ? state : state[REDUCER_NAME]
}

export function result (state) {
  return getRoot(state).get('result')
}

export function complexity (state) {
  return getRoot(state).get('complexity')
}

export function tags (state) {
  return getRoot(state).get('tags')
}

export function calculators (state) {
  return getRoot(state).get('calculators')
}

export function calculator (state, id) {
  const _calculators = calculators(state)
  return _calculators.get(findIndexById(_calculators, id))
}

export function findIndexById (collection, id) {
  let index = collection.findIndex(item => item.get('id') === id)
  return index >= 0 ? index : void 0
}
