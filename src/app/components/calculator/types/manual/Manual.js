import React from 'react'
import './manual.scss'
import ManualItem from './ManualItem'
import DropDown from 'app/components/DropDown'
import ClickEditable from 'app/components/ClickEditable'
import format from 'app/services/format'
import NumberFormat from 'react-number-format'

const Style = {
  input: {
    background: 'none',
    border: 'none',
    outline: 'none',
    borderBottom: '1px solid',
    // fontWeight: 'inherit',
    color: 'inherit',
    width: 42,
    textAlign: 'center',
    padding: 0,
    marginTop: 3
  }
}

export default ({
  data,
  removeCalculator,
  updateCalculator,
  removeCalculatorWork,
  addCalculatorWork,
  updateCalculatorWork
  }) => (
    
  <section className='manual panel'>
    <table className='table'>
      <thead className='panel-heading'>
      <tr>
        <th colSpan='2'>
          <h2 className='title'>
            <DropDown
              className='actions'
              label={<span className='icon-setting'/>}
            >
              <li onClick={addCalculatorWork} className='list-item'>
                добавить
              </li>
              <li onClick={removeCalculator} className='list-item'>
                удалить
              </li>
              <li onClick={() => console.log('copy')} className='list-item'>
                копировать
              </li>
            </DropDown>
            <ClickEditable onChange={(value) => updateCalculator({name: value})} value={data.get('name')}/>
          </h2>
        </th>
        <th>{data.get('hours')}</th>
        <th>
          <NumberFormat
            thousandSeparator=" "
            style={Style.input}
            onChange={(e, value) => updateCalculator({hourPrice1: value})}
            value={data.get('hourPrice1')}
          />
        </th>
        <th>
          <NumberFormat
            thousandSeparator=" "
            style={Style.input}
            onChange={(e, value) => updateCalculator({hourPrice2: value})}
            value={data.get('hourPrice2')}
          />
        </th>
        <th>{format.number(data.get('price1'))}</th>
        <th>{format.number(data.get('price2'))}</th>
      </tr>
      </thead>
      <tbody>
      <tr className='panel-sub-heading'>
        <td>Работа</td>
        <td>Количество</td>
        <td>Время</td>
        <td>Цена час 1</td>
        <td>Цена час 2</td>
        <td>Цена 1</td>
        <td>Цена 2</td>
      </tr>
      {
        data.get('works').map((work) => (
          <ManualItem
            calculator={data}
            data={work}
            key={work.get('id')}
            removeCalculatorWork={removeCalculatorWork.bind(null, work.get('id'))}
            updateCalculatorWork={updateCalculatorWork.bind(null, work.get('id'))}
            className='manual-specific--blue manual-specific'
          />
        ))
      }
      </tbody>
    </table>
  </section>
)
