import React, {props} from 'react';
import Header from './Header';


const HamburgerNav = (props) => {
  return (
    <>
    {/* HAMBURGER MENU START */}
    <div className= {`${props.toggleClassCheck}`}>
      <div className='pt-5'>
    <div className="hamburger-text">
      <a href="#" id="login2">Login </a>
    </div>
    <div className="hamburger-text">
      <a href="#">Program </a>
    </div>
    <div className="hamburger-text">
      <a href="#">Corporate</a>
    </div>
    <div className="hamburger-text">
      <a href="#">About</a>
    </div>
    </div>
  </div>
  </>
  )
}

export default HamburgerNav