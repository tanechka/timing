import React from 'react'
import IncrementDecrement from 'app/components/IncrementDecrement'
import ClickEditable from 'app/components/ClickEditable'
import CircleColorPicker from 'app/components/CircleColorPicker'
import DropDown from 'app/components/DropDown'
import format from 'app/services/format'

export default ({className, calculator, data, removeCalculatorWork, updateCalculatorWork}) => {
  const hourPrice1 = data.get('hourPrice1') || calculator.get('hourPrice1')
  const hourPrice2 = data.get('hourPrice2') || calculator.get('hourPrice2')
  const count = data.get('count')

  return (
    <tr className={className}>
      <td>
        <a className='link--close' onClick={removeCalculatorWork}/>
        <DropDown
          className='actions'
          label={<span className='view'/>}
        >
          <CircleColorPicker />
        </DropDown>
        <span className='type'>
        <ClickEditable
          onChange={(value) => updateCalculatorWork({name: value})}
          value={data.get('name')}
        />
      </span>
      </td>
      <td>
        <IncrementDecrement value={count} onChange={(value) => updateCalculatorWork({count: value})} />
      </td>
      <td><ClickEditable onChange={(value) => updateCalculatorWork({hours: value})}
                          value={data.get('hours')}/></td>
      <td><ClickEditable onChange={(value) => updateCalculatorWork({hourPrice1: value})}
                         value={hourPrice1}/></td>
      <td><ClickEditable onChange={(value) => updateCalculatorWork({hourPrice2: value})}
                         value={hourPrice2}/></td>
      <td>{format.number(count * hourPrice1)}</td>
      <td>{format.number(count * hourPrice2)}</td>
    </tr>
  )
}
