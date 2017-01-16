import React from 'react'
import LeftBar from '../components/leftBar/LeftBar'
import Header from '../components/calculator/Header'
import Tags from '../components/calculator/tags/Tags'
import Manual from '../components/calculator/types/manual/Manual'
import Percentage from '../components/calculator/types/percentage/Percentage'
import './app.scss'

const App = () => (
  <div className="wrap">
   <LeftBar />
   <div className="content">
     <Header />
     <Tags />
     <Manual />
     <Percentage />
   </div>
   <div className="right-content">
   </div>
  </div>
)

export default App;
