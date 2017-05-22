import React from 'react'
import './index.scss'

export default ({
  tags,
  addTagToWork
}) => {

  let colorItems = tags.map((tag) => {
    return (
      <li className={tag.get('color')}
        key={tag.get('id')}
        onClick={ ()=>{ 
          addTagToWork(tag.get('id'))
        }
      }
      />
    )
  })

  return (
    <div>
      <ul className='color-picker'>
        { colorItems }
      </ul>
    </div>
  )
}
