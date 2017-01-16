import React from 'react'
import InputRange from 'react-input-range';
import './header.scss'
import 'react-input-range/dist/react-input-range.css'

const Header = () => (
  <header className="calculator-header">
    <h2 className="calculator-header-title  pull-left">ig.PM</h2>

    <div className="calculator-header-content pull-right">

      <div className="calculator-header-item total pull-left">
        <h4 className="total-title">Итог</h4>
      </div>

      <div className="calculator-header-item complexity pull-left">
        <label className="title">Сложность</label>

        <InputRange
         maxValue={1.5}
         minValue={0}
         defaultValue={0}
         onChange={()=>{}}
       />
      </div>

      <div className="calculator-header-item header-time pull-left">
        <h3 className="title">Время</h3>
        <span className="value">80ч</span>
        <span className="range">60ч-100ч</span>
      </div>

      <div className="calculator-header-item price pull-left">
        <h3 className="title">Цена1</h3>
        <span className="value">50 456p</span>
        <span className="price-internal">внутреняя</span>
      </div>

      <div className="calculator-header-item profit pull-left">
        <h3 className="title">Время</h3>
        <span className="value">80ч</span>
      </div>

      <div className="calculator-header-item price pull-left">
        <h3 className="title">Цена2</h3>
        <span className="value">50 456p</span>
        <span className="price-final">конечная</span>
      </div>
    </div>
  </header>
)

export default Header;
