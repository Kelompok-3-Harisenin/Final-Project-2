import { useState, props } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import Login from './components/Login'
import Header from './components/Header'
import HamburgerNav from './components/HamburgerNav'
import AllProducts from './components/AllProducts'
import Jacket from './components/Jacket'
import TShirt from './components/TShirt'
import Shirt from './components/Shirt'
import NewArrivals from './components/NewArrivals'
import Accessories from './components/Accessories'
import WrongPage from './components/WrongPage'



function App() {
  
  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/all-products' element={<AllProducts/>}></Route>
          <Route path='/jacket' element={<Jacket/>}></Route>
          <Route path='/t-shirt' element={<TShirt/>}></Route>
          <Route path='/shirt' element={<Shirt/>}></Route>
          <Route path='/new-arrivals' element={<NewArrivals/>}></Route>
          <Route path='/accessories' element={<Accessories/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/*' element={<WrongPage/>}></Route>
        </Routes>
      </Router>
      <Footer/>

    </>
  )
}

export default App
