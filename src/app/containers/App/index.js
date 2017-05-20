import React from 'react'
import { connect } from 'react-redux'
import RCR from 'react-component-redux'
import LeftBar from '../../components/leftBar/LeftBar'
import Header from '../../components/calculator/Header'
import Tags from '../../components/calculator/tags/Tags'
import Manual from '../../components/calculator/types/manual/Manual'
import Percentage from '../../components/calculator/types/percentage/Percentage'
import reducers from './reducers'
import middlewares from './middlewares'
import * as constants from './constants'
import * as CalculatorTypes from '../../constants/CalculatorTypes'
import * as actions from './actions'
import * as selectors from './selectors'
import mock from './mock'

RCR.reducers.add(constants.REDUCER_NAME, reducers)
RCR.middlewares.push(middlewares);

const Style = {
  wrap: {
    //overflow: 'auto'
  },
  content: {
    background: '#eeeeee',
    marginLeft: 70
  }
}

class App extends React.Component {
  static propTypes = {
    calculators: React.PropTypes.object.isRequired,
    timestamp: React.PropTypes.number,
    checkWorking: React.PropTypes.func,
    addCalculator: React.PropTypes.func,
    removeCalculator: React.PropTypes.func,
    listCalculator: React.PropTypes.func,
    updateCalculator: React.PropTypes.func,
    removeCalculatorWork: React.PropTypes.func,
    addCalculatorWork: React.PropTypes.func,
    updateCalculatorWork: React.PropTypes.func,
    addPercentageCalculator: React.PropTypes.func
  }

  componentWillMount () {
    this.props.listCalculator(mock)
  }

  render () {
    const {
      calculators,
      addCalculator,
      removeCalculator,
      updateCalculator,
      removeCalculatorWork,
      addCalculatorWork,
      updateCalculatorWork,
      addPercentageCalculator
    } = this.props

    return (
      <div style={Style.wrap}>
        <LeftBar addCalculator={addCalculator}/>
        <div style={Style.content}>
          <Header />
          <Tags />
          {
            calculators.map((calculator) => {
              return renderCalculator({
                calculator,
                removeCalculator,
                updateCalculator,
                removeCalculatorWork,
                addCalculatorWork,
                updateCalculatorWork,
                calculators,
                addPercentageCalculator
              })
            })
          }
        </div>
      </div>
    )
  }
}

function renderCalculator ({
    calculator,
    removeCalculator,
    updateCalculator,
    addCalculatorWork,
    removeCalculatorWork,
    updateCalculatorWork,
    calculators,
    addPercentageCalculator
  })
  {
  const id = calculator.get('id')
  let Calculator

  switch (calculator.get('type')) {
    case CalculatorTypes.MANUAL: {
      Calculator = Manual
      break
    }
    case CalculatorTypes.PERCENTAGE: {
      Calculator = Percentage
      break
    }
  }

  return (
    <Calculator
      key={id}
      data={calculator}
      removeCalculator={removeCalculator.bind(null, id)}
      updateCalculator={updateCalculator.bind(null, id)}
      addCalculatorWork={addCalculatorWork.bind(null, id)}
      removeCalculatorWork={removeCalculatorWork.bind(null, id)}
      updateCalculatorWork={updateCalculatorWork.bind(null, id)}
      calculators={calculators}
      addPercentageCalculator={addPercentageCalculator.bind(null, id)}
    />
  )
}

export default connect(
  state => ({
    calculators: selectors.calculators(state[constants.REDUCER_NAME]),
    timestamp: selectors.timestamp(state[constants.REDUCER_NAME])
  }),
  actions
)(App)
