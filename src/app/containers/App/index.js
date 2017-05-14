import React from 'react'
import { connect } from 'react-redux'
import RCR from 'react-component-redux'
import LeftBar from '../../components/leftBar/LeftBar'
import Header from '../../components/calculator/Header'
import Tags from '../../components/calculator/tags/Tags'
import Manual from '../../components/calculator/types/manual/Manual'
import Percentage from '../../components/calculator/types/percentage/Percentage'
import reducers from './reducers'
import * as constants from './constants'
import * as CalculatorTypes from '../../constants/CalculatorTypes';
import * as actions from './actions'
import * as selectors from './selectors'

RCR.reducers.add(constants.REDUCER_NAME, reducers)

const Style = {
  wrap: {
    overflow: 'auto'
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
    checkWorking: React.PropTypes.func
  }

  componentWillMount () {
    this.props.checkWorking()
  }

  render () {
    return (
      <div style={Style.wrap}>
        <LeftBar />
        <div style={Style.content}>
          <Header />
          <Tags />
          {
            this.props.calculators.map(renderCalculator)
          }
        </div>
      </div>
    )
  }
}

function renderCalculator (calculator, index) {
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
      data={calculator}
      key={index}
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
