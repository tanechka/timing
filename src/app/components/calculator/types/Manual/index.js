import React from 'react'
import Classes from './manual.scss'
import ManualItem from './ManualItem'
import DropDown from 'app/components/DropDown'
import ClickEditable from 'app/components/ClickEditable'
import format from 'app/services/format'
import HeaderNumber from 'app/components/HeaderNumber'
import ReactTooltip from 'react-tooltip'

export default class Manual extends React.PureComponent {
  render () {
    const {
      data,
      tags,
      removeCalculator,
      updateCalculator,
      removeCalculatorWork,
      addCalculatorWork,
      updateCalculatorWork,
      addTagToWork
    } = this.props

    return (
      <section className={`${Classes.manual} panel`} style={{borderColor: data.get('color')}}>
        <table className='table'>
          <thead className='panel-heading'>
          <tr>
            <th className="name">
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
                </DropDown>
                <ClickEditable style={{minWidth: 150}} onChange={(name) => updateCalculator({name})} value={data.get('name')}/>
              </h2>
            </th>
            <th></th>
            <th><span className="sum">&#931;</span> {format.hours(data.get('hours'))}</th>
            <th>
              <HeaderNumber
                thousandSeparator=" "
                onChange={(e, value) => updateCalculator({hourPrice1: value})}
                value={data.get('hourPrice1')}
              />
            </th>
            <th>
              <HeaderNumber
                thousandSeparator=" "
                onChange={(e, value) => updateCalculator({hourPrice2: value})}
                value={data.get('hourPrice2')}
              />
            </th>
            <th><span className="sum">&#931;</span> {format.number(data.get('price1'))}</th>
            <th><span className="sum">&#931;</span> {format.number(data.get('price2'))}</th>
          </tr>
          </thead>
          <tbody>
          <tr className='panel-sub-heading'>
            <td>Работа</td>
            <td>Количество</td>
            <td>Время</td>
            <td><span className='section-with-tooltip'>Цена час 1 <p className="tooltip" data-tip="Себестоимость">i</p></span></td>
            <td><span className='section-with-tooltip'>Цена час 2 <p className="tooltip" data-tip="Отпускная цена">i</p></span></td>
            <td><span className='section-with-tooltip'>Цена 1 <p className="tooltip" data-tip="Себестоимость = Цена час 1 * Количество">i</p></span></td>
            <td><span className='section-with-tooltip'>Цена 2 <p className="tooltip" data-tip="Себестоимость = Цена час 2 * Количество">i</p></span></td>
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
                tags={tags}
                addTagToWork={addTagToWork.bind(null, work.get('id'))}
              />
            ))
          }
          </tbody>
        </table>
        <ReactTooltip />
      </section>
    )
  }
}