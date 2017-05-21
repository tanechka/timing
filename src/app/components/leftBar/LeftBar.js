import React from 'react'
import * as CalculatorTypes from 'app/constants/CalculatorTypes'
import './left-bar.scss'

const LeftBar = ({addCalculator}) => (
  <aside className='left-bar'>
    <a href='#' className='logo' />
    <a href='#' className='manual' onClick={() => addCalculator(CalculatorTypes.MANUAL)} />
    <a href='#' className='percentage' onClick={() => addCalculator(CalculatorTypes.MANUAL)} />
  </aside>
)

export default LeftBar
