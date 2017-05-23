import React from 'react'
import * as CalculatorTypes from 'app/constants/CalculatorTypes'
import './left-bar.scss'

const LeftBar = ({addCalculator, style}) => (
  <aside style={style} className='left-bar'>
    <a href='#' className='logo' />
    <a href='#' className='manual' onClick={() => addCalculator(CalculatorTypes.MANUAL)} />
    <a href='#' className='percentage' onClick={() => addCalculator(CalculatorTypes.PERCENTAGE)} />
  </aside>
)

export default LeftBar
