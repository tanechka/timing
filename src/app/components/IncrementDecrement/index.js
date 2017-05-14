import React from 'react'
import './index.scss'

export default class DropDown extends React.PureComponent {
  state = {
    value: 1
  }

  increment = () => {
    this.setState({
      value: this.state.value + 1
    })
  }

  decrement = () => {
    if (this.state.value > 0) {
      this.setState({
        value: this.state.value - 1
      })
    }
  }

  render () {
    return (
      <div className='increment-decrement'>
        <button className='button button--increase' onClick={this.decrement}>-</button>
        <input className='value' value={this.state.value} />
        <button className='button button--decrease' onClick={this.increment}>+</button>
      </div>
    )
  }
}
