import 'normalize.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import RCR from 'react-component-redux'
import App from './containers/App'
import './index.scss'

render(
  <Provider store={RCR.store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
