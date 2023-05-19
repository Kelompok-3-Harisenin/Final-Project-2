
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import Login from './components/Login'
import Carousel from './components/Carousel'
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
      <Carousel/>
      <Footer/>
    </>
  )
}

export default App
