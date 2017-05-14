import React from 'react';
import './percentage.scss';

const Percentage = () => (
  <section className="percentage panel">
    <table className="table">
      <thead className="panel-heading">
        <tr>
          <th colSpan="2"><h2 className="title">Техническое задание</h2></th>
          <th>20</th>
          <th>350</th>
          <th>700</th>
          <th>5700</th>
          <th>10700</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <a className="link--search" />
            <span className="type">Работа</span>
            <span className="view"></span>
          </td>
          <td>Количество</td>
          <td>Время</td>
          <td>Цена час 1</td>
          <td>Цена час 2</td>
          <td>Цена 1</td>
          <td>Цена 2</td>
        </tr>
      </tbody>
    </table>
  </section>
)

export default Percentage;
