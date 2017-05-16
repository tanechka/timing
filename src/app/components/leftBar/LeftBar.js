import React from 'react'
import './left-bar.scss'

const LeftBar = ({addCalculator}) => (
  <aside className='left-bar'>
    <a href='#' className='logo' />
    <a href='#' className='link' onClick={addCalculator} />
  </aside>
)

export default LeftBar
