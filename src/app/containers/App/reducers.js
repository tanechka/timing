import { fromJS } from 'immutable'
import * as ActionTypes from './constants'
import mock from './mock'

const initialState = fromJS(mock)

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHECK_WORKING: {
      return state
    }
  }

  return state
}
