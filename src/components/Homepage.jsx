
import Header from "./Header";
import HamburgerNav from "./HamburgerNav";
import React, { useEffect, useState } from "react";

const navbarNav = document.querySelector(".hamburger-nav");
const hamburgerClick = () => {
  navbarNav.classList.toggle("active");
};



const Homepage = () => {
  return (
    <>
      <div className="hero-img min-h-screen bg-cover bg-no-repeat bg-center">
        <Header hamburgerClick={hamburgerClick} />
        <div className="h-screen flex justify-center">
          <button
            href=""
            className="button my-auto text-white border bg-[#1f2021] py-3 px-5 font-medium"
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </>
  );
};

export default Homepage;
