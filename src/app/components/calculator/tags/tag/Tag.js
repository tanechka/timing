import React from 'react';
import IncrementDecrement from 'app/components/IncrementDecrement';

export default ({type}) => (
    <div className={type}>
        <span className="title">C</span>
        <IncrementDecrement/>
    </div>
);