import React from 'react'
import IncrementDecrement from 'app/components/IncrementDecrement'

export default ({type, count, updateTagCount}) => (
  <div className={type}>
    <span className='title'></span>
    <IncrementDecrement
      value={count}
      onChange={(count) => updateTagCount({count})} />
  </div>
)
