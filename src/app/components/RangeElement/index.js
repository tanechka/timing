import React from 'react'
import InputRange from 'react-input-range'
import 'react-input-range/dist/react-input-range.css'

export default class RangeElement extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      value: 1
    }
  }

  componentWillMount () {
    this.setState({value: this.props.value * 10 || 0})
  }

  componentWillReceiveProps (nextProps) {
    this.setState({value: nextProps.value * 10 || 0})
  }

  handleChange = (range, value) => {
    this.setState({value})
    this.props.onChange(value / 10)
  }

  render () {
    return (
      <InputRange
        maxValue={20}
        minValue={5}
        value={this.state.value}
        onChange={this.handleChange}
      />
    )
  }
}
