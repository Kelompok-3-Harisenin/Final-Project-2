import Homepage from "./components/pages/Homepage";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Carousel from "./components/Carousel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import AllProducts from "./components/pages/products/AllProducts";
import Jacket from "./components/pages/products/Jacket";
import TShirt from "./components/pages/products/TShirt";
import Shirt from "./components/pages/products/Shirt";
import NewArrivals from "./components/pages/products/NewArrivals";
import Accessories from "./components/pages/products/Accessories";
import WrongPage from "./components/pages/WrongPage";
import Contact from "./components/pages/Contact";
import Magazine from "./components/pages/Magazine";
import Atest from "./components/Atest";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/all-products" element={<AllProducts />}></Route>
          <Route path="/jacket" element={<Jacket />}></Route>
          <Route path="/t-shirt" element={<TShirt />}></Route>
          <Route path="/shirt" element={<Shirt />}></Route>
          <Route path="/new-arrivals" element={<NewArrivals />}></Route>
          <Route path="/accessories" element={<Accessories />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/*" element={<WrongPage />}></Route>
          <Route path="/Magazine" element={<Magazine />}></Route>
          <Route path="/Atest" element={<Atest />}></Route>
        </Routes>
      </Router>
      <Carousel />
      <Footer />
    </>
  );
}

export default App;
