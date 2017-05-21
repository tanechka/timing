import React from 'react'
import './index.scss'
let ContentEditable = require('react-contenteditable')

export default class ClickEditable extends React.PureComponent {
  state = {
    editing: false
  }

  componentWillMount () {
    this.state.text = this.props.value
  }

  handleChange = (event) => {
    this.setState({text: event.target.value})
    this.props.onChange(event.target.value)
  }

  render () {
    const {style} = this.props
    return (
      <div className='edit-input'>
        <ContentEditable
          style={style}
          html={this.state.text}
          disabled={false}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
