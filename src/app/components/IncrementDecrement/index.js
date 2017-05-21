import React from 'react'
import NumberFormat from 'react-number-format'
import './index.scss'

export default class DropDown extends React.PureComponent {
  static propTypes = {
    value: React.PropTypes.number
  }

  state = {
    value: 1
  }

  componentWillMount () {
    this.setState({value: this.props.value || 0})
  }

  change(diff) {
    const value = this.state.value * 1 + diff

    this.setState({
      value
    })

    this.props.onChange(value)
  }

  increment = () => {
    this.change(1)
  }

  decrement = () => {
    if (this.state.value > 0) {
      this.change(-1)
    }
  }

  handleChange = ({target}) => {
    this.setState({value: target.value})
    this.props.onChange(target.value)
  }

  render () {
    return (
      <div className='increment-decrement'>
        <button className='button button--increase' onClick={this.decrement}>-</button>
        <NumberFormat onChange = { this.handleChange} className='value' value={this.state.value}/>
        <button className='button button--decrease' onClick={this.increment}>+</button>
      </div>
    )
  }
}
