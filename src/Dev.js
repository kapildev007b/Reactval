import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Val from './Val'
import Basic from './Basic'

function Dev() {
  return (
    <div>   
   <Router>
    <Routes>
      <Route path='/' element = {<Val/>}></Route>
      <Route path='/Basic' element = {<Basic/>}></Route>
    </Routes>
  </Router>
  </div>
  )
}

export default Dev