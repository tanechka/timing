import { fromJS } from 'immutable'
import * as ActionTypes from './constants'

const initialState = fromJS({
  timestamp: Date.now()
})

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHECK_WORKING: {
      return state
    }
  }

  return state
}
