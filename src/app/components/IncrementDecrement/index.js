import React from 'react';
import './index.scss';

export default () => (
    <div className="increment-decrement">
        <button className="button button--increase">-</button>
        <input className="value"/>
        <button className="button button--decrease">+</button>
    </div>
)