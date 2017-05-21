import React from 'react'
import './percentage.scss'
import DropDown from 'app/components/DropDown'
import ClickEditable from 'app/components/ClickEditable'
import HeaderNumber from 'app/components/HeaderNumber'
import format from 'app/services/format'

export default ({
  data,
  calculators,
  removeCalculator,
  updateCalculator,
  addPercentageCalculator,
  removePercentageCalculator
}) => {
  const value = data.get('value')
  let avalibleCalculators =  calculators.filter(element => {
    return (
      element.get('type') === 'manual' &&
      data.get('calculators').indexOf(element.get('id')) === -1
    )
  })

  return (
    <section className='percentage panel'>
      <table className='table'>
        <thead className='panel-heading'>
        <tr>
          <th>
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
          <th>
            <HeaderNumber
              value={data.get('value')}
              onChange={(e, value) => updateCalculator({value})}
            />
          </th>
          <th>{data.get('hours')}</th>
          <th>
            <HeaderNumber
              onChange={(e, hourPrice1) => updateCalculator({hourPrice1})}
              value={data.get('hourPrice1')}
            />
          </th>
          <th>
            <HeaderNumber
              onChange={(e, hourPrice2) => updateCalculator({hourPrice2})}
              value={data.get('hourPrice2')}
            />
          </th>
          <th>{format.number(data.get('price1'))}</th>
          <th>{format.number(data.get('price2'))}</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <DropDown
              className='actions'
              label={<a className='link--search'/>}
            >
              {

                avalibleCalculators.size ?
                  avalibleCalculators.map(calculator => (
                    <li
                      key={calculator.get('id')}
                      className='list-item'
                      onClick={addPercentageCalculator.bind(null, calculator.get('id'))}
                    >
                      { calculator.get('name')}
                    </li>
                  ))
                :
                <li className='list-item'>
                  No items
                </li>
              }
            </DropDown>
            <span className='type'>Работа</span>
            <span className='view'/>
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
}
