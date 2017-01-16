import { combineReducers } from 'redux'

function reduser1(state = 'SHOW_ALL', action) {
  return state
}
function reduser2(state = 'SHOW_ALL', action) {
  return state
}



const todoApp = combineReducers({
  reduser1,
  reduser2
})

export default todoApp
