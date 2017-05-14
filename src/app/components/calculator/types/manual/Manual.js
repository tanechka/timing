import React from 'react'
import ManualItem from './manualItem/ManualItem.js'
import './manual.scss';
import DropDown from 'app/components/DropDown';
import ClickEditable from  'app/components/ClickEditable';
import CircleColorPicker from 'app/components/CircleColorPicker';

const Manual = () => (
  <section className="manual panel">

    <table className="table">
      <thead className="panel-heading">
        <tr>
          <th colSpan="2">
            <h2 className="title">
              <DropDown
               className="actions"
                label={<span className="icon-setting"></span>}
                >
                <li onClick={() => console.log('delete')} className="list-item">
                  удалить
                </li>
                <li onClick={() => console.log('copy')} className="list-item">
                  копировать
                </li>
              </DropDown>
              <ClickEditable onChange={() => console.log('edit')} value="Проектирование" />
            </h2>
          </th>
          <th>20</th>
          <th><ClickEditable onChange={() => console.log('edit')} value="350" /></th>
          <th><ClickEditable onChange={() => console.log('edit')} value="700" /></th>
          <th>5700</th>
          <th>10700</th>
        </tr>
      </thead>
      <tbody>
        <tr className="panel-sub-heading">
          <td>Работа</td>
          <td>Количество</td>
          <td>Время</td>
          <td>Цена час 1</td>
          <td>Цена час 2</td>
          <td>Цена 1</td>
          <td>Цена 2</td>
        </tr>
        <ManualItem type="manual-specific--blue manual-specific" />
        <ManualItem type="manual-specific--green manual-specific" />
        <ManualItem type="manual-specific--white manual-specific" />
      </tbody>
    </table>
  </section>
)

export default Manual;
