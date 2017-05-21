import React from 'react'
import './percentage.scss'
import DropDown from 'app/components/DropDown'
import ClickEditable from 'app/components/ClickEditable'

const Percentage = ({
  data,
  removeCalculator,
  upadateCalculator,
  calculators,
  addPercentageCalculator,
  removePercentageCalculator
  }) => (

  <section className='percentage panel'>
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

            <ClickEditable onChange={() => {}} value={data.get('name')}/>
          </h2>
          </th>
          <th>20</th>
          <th><ClickEditable onChange={() => {}} value={data.get('hourPrice1')} /></th>
          <th><ClickEditable onChange={() => {}} value={data.get('hourPrice2')} /></th>
          <th>5700</th>
          <th>10700</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <DropDown
              className='actions'
              label={<a className='link--search' />}
            >
              {
                calculators.map((calculator) => {
                  return <li className='list-item' onClick={() => { addPercentageCalculator(calculator.get('id'))}}>
                   { calculator.get('name') }
                  </li>
                })
              }
            </DropDown>
            <span className='type'>Работа</span>
            <span className='view' />
          </td>
          <td>Количество</td>
          <td>Время</td>
          <td>Цена час 1</td>
          <td>Цена час 2</td>
          <td>Цена 1</td>
          <td>Цена 2</td>
        </tr>

        {
          data.get('calculators').map(id => {
            const calculator = calculators.find(calculator => calculator.get('id') === id)

            if (calculator === void 0) {
              return null
            }

            return (
              <tr>
                <td><a className="link--close" onClick={ () => {
                  removePercentageCalculator(calculator.get('id'))
                }}>
                </a>{calculator.get('name')}</td>
                <td></td>
                <td>{calculator.get('hours')}</td>
                <td>{calculator.get('hourPrice1')}</td>
                <td>{calculator.get('hourPrice2')}</td>
                <td>0</td>
                <td>0</td>
              </tr>
            )
          })
        }

      </tbody>
    </table>
  </section>
)

export default Percentage
