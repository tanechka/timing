import React from 'react'
import './index.scss'

export default class CircleColorPicker extends React.PureComponent {
  componentWillMount () {
    const colors = ['#4aa9e4', '#2ecc71', '#ff9800', '#f44336']
    const colorItems = colors.map((color) =>
      <li style={{backgroundColor: color, borderColor: color}} key={color} />
    )
    this.setState({ colorItems })
  }

  handleClick = (color, event) => {
    console.log('click')
    //  this.setState({ color: this.state.color.hex });
  }

  render () {
    return (
      <div>
        <ul className='color-picker'>
          {this.state.colorItems}
        </ul>
      </div>
    )
  }
}
