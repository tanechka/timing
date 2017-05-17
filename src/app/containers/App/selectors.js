export function timestamp (state) {
  return state.get('timestamp')
}

export function calculators (state) {
  return state.get('calculators')
}

export function calculator (state, id) {
  const _calculators = calculators(state)
  return _calculators.get(findIndexById(_calculators, id))
}

export function findIndexById (collection, id) {
  return collection.findIndex(item => item.get('id') === id)
}
