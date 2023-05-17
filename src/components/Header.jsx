import { useEffect, useState } from "react";
import HamburgerNav from "./HamburgerNav";
import * as Icon from 'react-feather';

const Header = () => {
  const [navbarState, setNavbarState] = useState(false);
  let toggleClassCheck = navbarState ? "hamburger-nav active" : "hamburger-nav";


// document.addEventListener('click', e => {
//   const isDropdownButton = e.target.matches("[data-dropdown-button]")
//   if (!isDropdownButton && e.target.closest ('[data-dropdown]') != null) return

//   let currentDropdown
//   if (isDropdownButton) {
//     currentDropdown = e.target.closest('[data-dropdown]')
//     currentDropdown.className.toggle('active')
//   }

//   document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
//     if (dropdown === currentDropdown) return
//     dropdown.className.remove('active')
//   })
// })

  return (
    <>
      <HamburgerNav toggleClassCheck={toggleClassCheck} />

      <div className=" pt-5 fixed w-full z-50">
        <div className=" container mx-auto flex justify-between items-center sm:px-0 px-10">
<button>
  <Icon.Menu href="" className="flex text-white sm:hidden relative w-[30px] h-[30px] " id="hamburger-menu"
  onClick={() => setNavbarState(!navbarState)}/>
</button>

          {/* <button
            href=""
            className=" flex text-slate-900 sm:hidden relative w-[30px] h-[30px] bottom-[10px] "
            id="hamburger-menu"
            onClick={() => setNavbarState(!navbarState)}
          >
            <div className=" absolute block h-[2px] top-[17px] bg-white w-5 left-1"></div>
            <div className=" absolute block h-[2px] top-[24px] bg-white w-5 left-1"></div>
            <div className=" absolute block h-[2px] top-[31px] bg-white w-5 left-1"></div>
          </button> */}

          <button href="" className="logo mb-2 ">
            <img
              className="max-h-14 max-w-[240px] sm:left-12 ml-12 "
              src="/assets/Homepage/hero-logo.png"
              alt=""
            />
          </button>

          <div className="flex text-white gap-2 ">
            <a className=" h-7 hidden md:block text-xl px-3 hover:text-[#232324]" href="">
              HOME
            </a>

            <div className="dropdown w-32 hidden md:flex" data-dropdown> 
            <button className="nav-link h-7 text-xl pl-7 w-full flex" data-dropdown-button href="">
              SHOP <div className="mt-2 ml-2"><Icon.ArrowDown size={12}/></div>
            </button>
            <div className="dropdown-menu text-lg">
              <button className="block hover:text-gray-600"> New Arrivals</button>
              <button className="block hover:text-gray-600"> T-Shirt</button>
              <button className="block hover:text-gray-600"> Shirt</button> 
              <button className="block hover:text-gray-600"> Sweater</button> 
              <button className="block hover:text-gray-600"> Polo Shirt</button> 
              <button className="block hover:text-gray-600"> Jacket</button> 
              <button className="block hover:text-gray-600"> Pants</button> 
              <button className="block hover:text-gray-600"> Blue Series</button> 
              <button className="block hover:text-gray-600"> Accessories</button> 
              <button className="block hover:text-gray-600"> All Product</button> 
            </div>
            </div>

            <div className="dropdown">
            <button className="nav-link h-7 hidden md:flex text-xl " href="">
              GOOD VIBRATIONS <div className="mt-2 ml-2"><Icon.ArrowDown size={12}/></div>
            </button>
            <div className="dropdown-menu ">
              <button className="hover:text-gray-600 "> Good Vibrations Vol 3</button>
            </div>
            </div>

            <a className=" h-7 hidden md:block text-xl px-3 hover:text-[#232324]" href="">
              MAGAZINE
            </a>

            <button className="w-7 h-7 hover:text-[#232324]" href="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                />
              </svg>
            </button>

            <button className="w-7 h-7 hover:text-[#232324]" href="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
                />
              </svg>
            </button>
            <button className="w-7 h-7 hover:text-[#232324]" href="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <path
                  fill="currentColor"
                  d="M222.14 58.87A8 8 0 0 0 216 56H54.68l-4.89-26.86A16 16 0 0 0 34.05 16H16a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H83.17a8 8 0 0 1-7.87-6.57L72.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56ZM180 192a12 12 0 1 1-12 12a12 12 0 0 1 12-12Zm-96 0a12 12 0 1 1-12 12a12 12 0 0 1 12-12Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
