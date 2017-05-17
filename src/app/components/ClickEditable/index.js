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

  edit = () => {
    this.setState({editing: true})
  }

  handleChange = (event) => {
    this.setState({text: event.target.value})
    this.props.onChange(event.target.value)
  }

  renderEditable = () => {
    return (
      <div className='edit-input'>
        <ContentEditable
          html={this.state.text}
          disabled={false}
          onChange={this.handleChange}
        />
      </div>
    )
  }

  render () {
    return this.renderEditable()
  }
}
