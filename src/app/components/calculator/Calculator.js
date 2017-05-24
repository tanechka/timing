import React from 'react'
import * as CalculatorTypes from 'app/constants/CalculatorTypes'
import Manual from './types/Manual'
import Percentage from './types/Percentage'

export default class Calculator extends React.PureComponent {
  proxyProps = {}
  Calculator = void 0

  componentWillMount () {
    const {proxyProps} = this
    const {
      data,
      removeCalculator,
      updateCalculator,
      addCalculatorWork,
      removeCalculatorWork,
      updateCalculatorWork,
      addPercentageCalculator,
      removePercentageCalculator,
      addTagToWork
    } = this.props
    const id = data.get('id')

    Object.assign(proxyProps, {
      removeCalculator: removeCalculator.bind(null, id),
      updateCalculator: updateCalculator.bind(null, id)
    })

    switch (data.get('type')) {
      case CalculatorTypes.MANUAL: {
        this.Calculator = Manual
        Object.assign(proxyProps, {
          addTagToWork: addTagToWork.bind(null, id),
          addCalculatorWork: addCalculatorWork.bind(null, id),
          updateCalculatorWork: updateCalculatorWork.bind(null, id),
          removeCalculatorWork: removeCalculatorWork.bind(null, id)
        })
        break
      }
      case CalculatorTypes.PERCENTAGE: {
        this.Calculator = Percentage
        Object.assign(proxyProps, {
          addPercentageCalculator: addPercentageCalculator.bind(null, id),
          removePercentageCalculator: removePercentageCalculator.bind(null, id)
        })
        break
      }
    }
  }

  render () {
    const {data, tags, calculators} = this.props
    const {proxyProps} = this
    switch (data.get('type')) {
      case CalculatorTypes.MANUAL:
        Object.assign(proxyProps, {
          tags
        })
        break
      case CalculatorTypes.PERCENTAGE:
        Object.assign(proxyProps, {
          calculators
        })
        break
    }
    return (
      <this.Calculator
        data={this.props.data}
        {...this.proxyProps}
      />
    )
  }
}