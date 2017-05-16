import React from 'react'
import './manual.scss'
import ManualItem from './ManualItem'
import DropDown from 'app/components/DropDown'
import ClickEditable from 'app/components/ClickEditable'
import format from 'app/services/format'

export default ({data, removeCalculator}) => (
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
              <li onClick={removeCalculator} className='list-item'>
                удалить
              </li>
              <li onClick={() => console.log('copy')} className='list-item'>
                копировать
              </li>
            </DropDown>
            <ClickEditable onChange={() => console.log('edit')} value='Проектирование'/>
          </h2>
        </th>
        <th>{data.get('hours')}</th>
        <th><ClickEditable onChange={() => console.log('edit')} value='350'/></th>
        <th><ClickEditable onChange={() => console.log('edit')} value='700'/></th>
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
        data.get('works').map((work, index) => <ManualItem calculator={data} data={work} key={index} className='manual-specific--blue manual-specific'/>)
      }
      </tbody>
    </table>
  </section>
)
