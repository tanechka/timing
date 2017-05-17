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
    case ActionTypes.UPDATE_CALCULATOR: {
      return state.updateIn(
        ['calculators', findCalculatorIndex(state, action.id)],
        calculator => calculator.merge(action.payload)
      )
    }
    case ActionTypes.REMOVE_CALCULATOR: {
      return state.deleteIn(['calculators', findCalculatorIndex(state, action.id)])
    }
    case ActionTypes.ADD_CALCULATOR_WORK: {
      return state.updateIn(
        ['calculators', findCalculatorIndex(state, action.calculatorId), 'works'],
        works => works.push(fromJS(new Work({name: 'test'})))
      )
    }
    case ActionTypes.REMOVE_CALCULATOR_WORK: {
      return state.updateIn(
        ['calculators', findCalculatorIndex(state, action.calculatorId), 'works'],
        works => works.delete(findIndexById(works, action.id))
      )
    }
  }

  return state
}

function findCalculatorIndex (state, id) {
  return findIndexById(selectors.calculators(state), id)
}

function findIndexById (collection, id) {
  return collection.findIndex(item => item.get('id') === id)
}
