import React from 'react'
import IncrementDecrement from 'app/components/IncrementDecrement'
import ClickEditable from 'app/components/ClickEditable'
import CircleColorPicker from 'app/components/CircleColorPicker'
import DropDown from 'app/components/DropDown'
import format from 'app/services/format'
import NumberFormat from 'react-number-format'

const Style = {
  input: {
    padding: 0,
    width: 30,
    background: 'none',
    border: 0,
    outline: 'none',
    color: 'inherit',
    textAlign: 'center',
    borderBottom: '1px solid'
  }
}

export default ({
  className,
  calculator,
  data,
  removeCalculatorWork,
  updateCalculatorWork,
  tags,
  addTagToWork
}) => {
  const hourPrice1 = data.get('hourPrice1') || calculator.get('hourPrice1')
  const hourPrice2 = data.get('hourPrice2') || calculator.get('hourPrice2')
  const count = data.get('count')
  let tagWork = tags.first()

  if (data.get('tagId')) {
    tagWork = tags.find((tag) => {
      return data.get('tagId') === tag.get('id')
    })
  }

  return (
    <tr className={className}>
      <td>
        <a className='link--close' onClick={removeCalculatorWork}/>
        <DropDown
          className='actions'
          label={<span className={ data.get('tagId') ? tagWork.get('color') + ' view' : 'view' }/>}
        >
          <CircleColorPicker tags={tags} addTagToWork={addTagToWork} />
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
      <td>
        <NumberFormat
          style={Style.input}
          onChange={(e, value) => updateCalculatorWork({hours: value})}
          value={data.get('hours')}
        />
      </td>
      <td>
        <NumberFormat
          style={Style.input}
          onChange={(e, value) => updateCalculatorWork({hourPrice1: value})}
          placeholder={calculator.get('hourPrice1')}
          value={data.get('hourPrice1')}
        />
      </td>
      <td>
        <NumberFormat
          style={Style.input}
          onChange={(e, value) => updateCalculatorWork({hourPrice2: value})}
          placeholder={calculator.get('hourPrice2')}
          value={data.get('hourPrice2')}
        />
      </td>
      <td>{format.number(count * hourPrice1)}</td>
      <td>{format.number(count * hourPrice2)}</td>
    </tr>
  )
}
