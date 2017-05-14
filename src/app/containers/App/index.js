import React from 'react'
import { connect } from 'react-redux'
import RCR from 'react-component-redux'
import LeftBar from '../../components/leftBar/LeftBar'
import Header from '../../components/calculator/Header'
import Tags from '../../components/calculator/tags/Tags'
import Manual from '../../components/calculator/types/manual/Manual'
import Percentage from '../../components/calculator/types/percentage/Percentage'
import reducers from './reducers'
import { REDUCER_NAME } from './constants'
import * as actions from './actions'
import * as selectors from './selectors'

RCR.reducers.add(REDUCER_NAME, reducers)

const Style = {
  wrap: {
    overflow: 'auto'
  },
  content: {
    background: '#eeeeee',
    marginLeft: 70
  }
}

class App extends React.Component {
  static propTypes = {
    timestamp: React.PropTypes.number,
    checkWorking: React.PropTypes.func
  }

  componentWillMount () {
    console.log(this.props.timestamp)
    this.props.checkWorking()
  }

  render () {
    return (
      <div style={Style.wrap}>
        <LeftBar />
        <div style={Style.content}>
          <Header />
          <Tags />
          <Manual />
          <Percentage />
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    timestamp: selectors.timestamp(state[REDUCER_NAME])
  }),
  actions
)(App)
