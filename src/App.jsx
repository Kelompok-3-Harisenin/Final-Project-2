import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import Login from './components/Login'
import "@fortawesome/fontawesome-free/css/all.css";



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
         
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
