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
import variables from  '!!sass-variable-loader!app/variables.scss'

RCR.reducers.add(constants.REDUCER_NAME, reducers)
Array.prototype.push.apply(RCR.middlewares, middlewares);

const Style = {
  wrap: {
    height: '100%'
  },
  content: {
    marginLeft: 70,
    height: '100%'
  },
  leftBar: {
    position: 'fixed',
    zIndex: 1000
  },
  header: {
    background: variables.backgroundColor,
    position: 'fixed',
    height: 215,
    right: 0,
    left: 70,
    zIndex: 1000
  },
  calculators: {
    paddingTop: 215
  }
}

class App extends React.Component {
  static propTypes = {
    complexity: React.PropTypes.number,
    result: React.PropTypes.object,
    tags: React.PropTypes.object,
    calculators: React.PropTypes.object.isRequired,
    checkWorking: React.PropTypes.func,
    addCalculator: React.PropTypes.func,
    removeCalculator: React.PropTypes.func,
    listCalculator: React.PropTypes.func,
    updateCalculator: React.PropTypes.func,
    removeCalculatorWork: React.PropTypes.func,
    addCalculatorWork: React.PropTypes.func,
    updateCalculatorWork: React.PropTypes.func,
    addPercentageCalculator: React.PropTypes.func,
    removePercentageCalculator: React.PropTypes.func,
    setComplexity: React.PropTypes.func,
    updateTagCount: React.PropTypes.func,
    addTagToWork: React.PropTypes.func
  }

  componentWillMount () {
    this.props.listCalculator(mock)
  }

  render () {
    const {
      complexity,
      result,
      tags,
      calculators,
      setComplexity,
      addCalculator,
      removeCalculator,
      updateCalculator,
      removeCalculatorWork,
      addCalculatorWork,
      updateCalculatorWork,
      addPercentageCalculator,
      removePercentageCalculator,
      updateTagCount,
      addTagToWork
    } = this.props

    return (
      <div style={Style.wrap}>
        <LeftBar style={Style.leftBar} addCalculator={addCalculator}/>
        <div style={Style.content}>
          <div style={Style.header}>
            <Header
              setComplexity={setComplexity}
              complexity={complexity}
              result={result}
            />
            <Tags tags={tags} updateTagCount={updateTagCount} />
          </div>
          <div style={Style.calculators}>
            {
              calculators.map((calculator) => {
                return renderCalculator({
                  calculators,
                  calculator,
                  removeCalculator,
                  updateCalculator,
                  removeCalculatorWork,
                  addCalculatorWork,
                  updateCalculatorWork,
                  addPercentageCalculator,
                  removePercentageCalculator,
                  tags,
                  addTagToWork
                })
              })
            }
          </div>

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
    addPercentageCalculator,
    removePercentageCalculator,
    tags,
    addTagToWork
  }) {
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
      removePercentageCalculator={removePercentageCalculator.bind(null, id)}
      tags={tags}
      addTagToWork={addTagToWork.bind(null, id)}
    />
  )
}

export default connect(
  state => ({
    result: selectors.result(state),
    complexity: selectors.complexity(state),
    tags: selectors.tags(state),
    calculators: selectors.calculators(state)
  }),
  actions
)(App)
