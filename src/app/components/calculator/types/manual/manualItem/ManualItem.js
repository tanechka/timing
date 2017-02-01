import React from 'react';
import IncrementDecrement from 'app/components/IncrementDecrement';

export default ({type}) => (
    <tr className={type}>
        <td>
            <a className="link--close"/>
            <span className="view"></span>
            <span className="type">Простая</span>
        </td>
        <td>
            <IncrementDecrement/>
        </td>
        <td>1</td>
        <td>350</td>
        <td>700</td>
        <td>5700</td>
        <td>10 700</td>
    </tr>
);
