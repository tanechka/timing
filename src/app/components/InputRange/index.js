import React from 'react'
import InputRange from 'react-input-range'
import 'react-input-range/dist/react-input-range.css'

export default class RangeInput extends React.PureComponent {
  static propTypes = {
    value: React.PropTypes.number
  }

  state = {
    value: 1
  }

  componentWillMount () {
    this.setState({value: this.state.value || 0})
  }

  handleChange = () => {
    this.props.onChange(event.target.value)
  }

  render() {
    return (
      <InputRange
        maxValue={20}
        minValue={0}
        value={this.state.value}
        onChange={this.handleChange} />
    );
  }
}
