import store from 'store'
import * as ActionTypes from '../constants'

export default store => next => action => {
  switch (action.type) {
    case ActionTypes.LIST_CALCULATOR: {
      action.payload = read() || action.payload
      break
    }
    default: {
      const result = next(action)
      update(store.getState()[ActionTypes.REDUCER_NAME].toJS())
      return result
    }
  }
  return next(action)
}

function update (data) {
  store.set('timing', data)
}

function read () {
  return store.get('timing')
}
