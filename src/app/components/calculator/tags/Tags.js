import React from 'react'
import Tag from './tag/Tag'
import './tags.scss'

const Tags = () => (
  <section className='calculator-tags panel'>
    <div className='panel-heading'>
      <h2 className='title'>Типы работ</h2>
    </div>

    <section className='panel-content'>
      <Tag type='calculator-tag blue pull-left' />
      <Tag type='calculator-tag green pull-left' />
      <Tag type='calculator-tag orange pull-left' />
      <Tag type='calculator-tag red pull-left' />
    </section>
  </section>
)

export default Tags
