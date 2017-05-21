import React from 'react'
import NumberFormat from 'react-number-format'

const Style = {
  background: 'none',
  border: 'none',
  outline: 'none',
  borderBottom: '1px solid',
  color: 'inherit',
  width: 42,
  textAlign: 'center',
  padding: 0,
  marginTop: 3,
  fontWeight: 700
}

export default (props) => (
  <NumberFormat
    style={Style}
    {...props}
  />
)
