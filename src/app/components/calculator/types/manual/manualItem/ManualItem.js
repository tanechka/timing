import React from 'react'
import IncrementDecrement from 'app/components/IncrementDecrement'
import ClickEditable from 'app/components/ClickEditable'
import CircleColorPicker from 'app/components/CircleColorPicker'
import DropDown from 'app/components/DropDown'

export default ({type}) => (
  <tr className={type}>
    <td>
      <a className='link--close' />
      <DropDown
        className='actions'
        label={<span className='view' />}
              >
        <CircleColorPicker />
      </DropDown>
      <span className='type'>
        <ClickEditable onChange={() => console.log('edit')} value='Простая' />
      </span>
    </td>
    <td>
      <IncrementDecrement />
    </td>
    <td><ClickEditable onChange={() => console.log('edit')} value='1' /></td>
    <td><ClickEditable onChange={() => console.log('edit')} value='350' /></td>
    <td><ClickEditable onChange={() => console.log('edit')} value='700' /></td>
    <td>5700</td>
    <td>10 700</td>
  </tr>
)
