import { useState, props } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import Login from './components/Login'
import Header from './components/Header'
import HamburgerNav from './components/HamburgerNav'
import AllProducts from './components/AllProducts'



function App() {
  
  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/all-products' element={<AllProducts/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </Router>
      <Footer/>

    </>
  )
}

export default App
