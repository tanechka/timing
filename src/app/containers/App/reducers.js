import { fromJS } from 'immutable'
import calculator from 'app/services/calculator'
import * as ActionTypes from './constants'
import * as selectors from './selectors'
import ManualCalculator from 'app/factories/ManualCalculator'
import Work from 'app/factories/Work'

const initialState = fromJS({
  tags: [],
  calculators: []
})

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHECK_WORKING: {
      return state
    }
    case ActionTypes.LIST_CALCULATOR: {
      return fromJS(action.payload)
    }
    case ActionTypes.CALCULATE_CALCULATOR: {
      return state.set('calculators', calculator(selectors.calculators(state)))
    }
    case ActionTypes.ADD_CALCULATOR: {
      return state.updateIn(
        ['calculators'],
         calculators => calculators.push(fromJS(new ManualCalculator))
      )
    }
    case ActionTypes.REMOVE_CALCULATOR: {
      return state.deleteIn(['calculators', action.index])
    }
    case ActionTypes.REMOVE_CALCULATOR_WORK: {
      return state.updateIn(
        ['calculators', action.indexCalculator, 'works'],
         works => works.delete(findIndexById(works, action.id))
       )
    }
    case ActionTypes.ADD_CALCULATOR_WORK: {
      return state.updateIn(
        ['calculators', action.indexCalculator, 'works'],
         works => works.push(fromJS(new Work({name:'test'})))
       )
    }
    case ActionTypes.UPDATE_CALCULATOR: {
      return state.updateIn(
        ['calculators', action.index],
         calculator => calculator.merge(action.payload)
       )
    }

  }

  return state
}

function findIndexById(collection, id) {
  return collection.findIndex(item => item.get('id') === id)
}
