import React from 'react'
import Tag from './tag/Tag'
import './tags.scss'

export default ({
  tags,
  updateTagCount
}) => {
  return (
    <section className='calculator-tags panel'>
      <div className='panel-heading'>
        <h2 className='title'>Типы работ</h2>
      </div>

      <section className='panel-content'>
        {
          tags.map((tag) => (
            <Tag
              updateTagCount={updateTagCount.bind(null, tag.get('id') )}
              count={tag.get('count')}
              key={tag.get('id')}
              type={tag.get('color') + ' calculator-tag pull-left'}
              />
          ))
        }
      </section>
    </section>
  )
}
