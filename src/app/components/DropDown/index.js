import React from 'react'
import './index.scss'

export default class DropDown extends React.PureComponent {
  state = {
    open: false
  }

  toggleOpen = () => {
    this.setState({open: !this.state.open})
  }

  render () {
    return (
      <div className={`dropdown ${this.props.className}`}>
        <div onClick={this.toggleOpen} style={{display: 'inline-block'}}>
          {this.props.label}
        </div>
        {
          this.state.open
          ? <div onClick={this.toggleOpen}>
              <div className="dropdown-overlay"></div>
              <div className='dropdown-section'>
                <ul className='dropdown-list'>
                  {this.props.children}
                </ul>
              </div>
            </div>
          : null
        }

      </div>

    )
  }
}
