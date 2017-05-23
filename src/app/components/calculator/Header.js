import './header.scss'
import React from 'react'
import RangeElement from 'app/components/RangeElement'
import format from 'app/services/format'

export default ({setComplexity, complexity, result}) => {
  return (
    <header className='calculator-header'>
    <h2 className='calculator-header-title  pull-left'>ig.PM</h2>

    <div className='calculator-header-content pull-right'>

      <div className='calculator-header-item total pull-left'>
        <h4 className='total-title'>Итог</h4>
      </div>

      <div className='calculator-header-item complexity pull-left'>
        <h3 className='title'>Сложность</h3>

        <RangeElement
          value={complexity}
          onChange={count => setComplexity({count})}
        />
      </div>

      <div className='calculator-header-item header-time pull-left'>
        <h3 className='title'>Время</h3>
        <span className='value'>{format.hours(result.get('hours'))}</span>
        <span className='range'>{format.hours(result.get('hoursFrom'))}-{format.hours(result.get('hoursTo'))}</span>
      </div>

      <div className='calculator-header-item price pull-left'>
        <h3 className='title'>Цена1</h3>
        <span className='value'>{format.currency(result.get('price1'))}</span>
        <span className='price-internal'>внутреняя</span>
      </div>

      <div className='calculator-header-item profit pull-left'>
        <h3 className='title'>Прибыль</h3>
        <span className='value'>{format.currency(result.get('profit'))}</span>
      </div>

      <div className='calculator-header-item price pull-left'>
        <h3 className='title'>Цена2</h3>
        <span className='value'>{format.currency(result.get('price2'))}</span>
        <span className='price-final'>конечная</span>
      </div>
    </div>
  </header>
 )
}
