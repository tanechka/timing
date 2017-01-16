import React from 'react';

export default class ManualItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <tr className={this.props.type}>
        <td>
          <a className="link--close" />
          <span className="view"></span>
          <span className="type">Простая</span>
        </td>
        <td>
          <div className="manual-item">
            <button className="button button--increase">-</button>
            <input className="value" />
            <button className="button button--decrease">+</button>
          </div>
        </td>
        <td>1</td>
        <td>350</td>
        <td>700</td>
        <td>5700</td>
        <td>10 700</td>
      </tr>
    );
  }
}
