import { useState, props } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import Login from './components/Login'
import Header from './components/Header'
import MainText, {Grid} from './components/Main'
import HamburgerNav from './components/HamburgerNav'

function App() {
  
  return (
    <>



      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </Router>
      <MainText/>
      <Grid/>
      <Footer/>

    </>
  )
}

export default App
