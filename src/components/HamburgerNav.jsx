import React, {props} from 'react';
import Header from './Header';





const HamburgerNav = (props) => {

  return (
    <>

    {/* HAMBURGER MENU START */}
    <div className= {`${props.toggleClassCheck}`}>
        <div className='pt-5'>
              <div className="hamburger-text">
                <a href="" id="login2">HOME </a>
              </div>
              <div className="hamburger-text">
                <a href="">SHOP </a>
              </div>
              <div className="hamburger-text">
                <a href="">GOOD VIBRATIONS</a>
              </div>
              <div className="hamburger-text">
                <a href="">MAGAZINE</a>
              </div>
          <div className="hamburger-text-small">
            <a href="">Log In</a>
          </div>
          <div className="hamburger-text-small">
            <a href="">Create Account</a>
          </div>
          <div className="hamburger-text-small">
            <a href="">Contact Us</a>
          </div>
          <div className="hamburger-text-small">
            <a href="">Size Guide</a>
          </div>
          <div className="hamburger-text-small">
            <a href="">How To Shop</a>
          </div>
          <div className="hamburger-text-small">
            <a href="">FAQ</a>
          </div>
          <div className="hamburger-text-small">
            <a href="">Return Policy</a>
          </div>
          <div className="hamburger-text-small">
            <a href="">Team & Conditions</a>
          </div>
          <div className="hamburger-text-small">
            <a href="">Terms of Service</a>
          </div>
          <div className="hamburger-text-small">
            <a href="">Refund Policy</a>
          </div>
          <div className="hamburger-text-small">
            <a href="">Order Confirmation</a>
          </div>
      </div>
  </div>
  </>
  )
}

export default HamburgerNav