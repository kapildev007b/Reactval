import React from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'
import dummy from './Image/shinobu.jpg'
import dunny from './Image/luffy.webp'
import dyn from './Image/test.jpg'
import './Appp.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>



      <Header></Header>

      <img className='two' src={dummy}height='500px' width='500px'></img>
    
      <img className='two'src={dunny}height='500px' width='500px'></img>

      <img className='two'src={dyn}height='500px' width='500px'></img>



      <Footer></Footer>
      </div>
  )
}

export default App