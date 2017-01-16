import React from 'react';

export default class Tag extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className={ this.props.type }>

        <span className="title">C</span>
        <div className="calculator-tag-item">
          <button className="button button--increase">-</button>
          <input className="value" />
          <button className="button button--decrease">+</button>
        </div>
      </div>
    );
  }
}
