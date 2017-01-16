import React from 'react'
import ManualItem from './manualItem/ManualItem.js'
import './manual.scss'

const Manual = () => (
  <section className="manual">
    <table className="table">
      <thead>
        <tr>
          <th colSpan="2"><h2 className="title">Проектирование</h2></th>
          <th>20</th>
          <th>350</th>
          <th>700</th>
          <th>5700</th>
          <th>10700</th>
        </tr>
      </thead>
      <tbody>
        <tr>
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
