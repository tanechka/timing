import React from 'react'
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

  increment = () => {
    this.setState({
      value: this.state.value + 1
    })

    this.props.onChange(this.state.value)
  }

  decrement = () => {
    if (this.state.value > 0) {
      this.setState({
        value: this.state.value - 1
      })

      this.props.onChange(this.state.value)
    }
  }

  handleChange = () => {
    this.props.onChange(event.target.value)
  }

  render () {
    return (
      <div className='increment-decrement'>
        <button className='button button--increase' onClick={this.decrement}>-</button>
        <input onChange = { this.handleChange} className='value' value={this.state.value}/>
        <button className='button button--decrease' onClick={this.increment}>+</button>
      </div>
    )
  }
}
