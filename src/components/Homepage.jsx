import React from 'react'

const Homepage = () => {
  return (
    <>
<body>
<div class="hero-img min-h-screen bg-cover bg-no-repeat bg-center">
      <div class="header-wrapper bg-transparent pt-5">
        <div class="header-nav">
          <div class="container mx-auto flex justify-between items-center">
            <a
              href=""
              class="burger text-slate-900 relative w-[30px] h-[30px] bottom-[10px]"
            >
              <div
                class="burger-icon absolute block h-[2px] top-[17px] bg-white w-5 left-1"
              ></div>
              <div
                class="burger-icon absolute block h-[2px] top-[24px] bg-white w-5 left-1"
              ></div>
              <div
                class="burger-icon absolute block h-[2px] top-[31px] bg-white w-5 left-1"
              ></div>
            </a>

            <a href="" class="logo">
              <img
                class="max-h-14 max-w-[240px] sm:pl-12 pl-12"
                src="/assets/Homepage/hero-logo.png"
                alt=""
              />
            </a>
            <div class="site-nav flex text-white gap-2">
              <a class="w-7 h-7" href=""
                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  />
                </svg>
              </a>
              <a class="w-7 h-7" href=""
                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
                  />
                </svg>
              </a>
              <a class="w-7 h-7" href=""
                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <path
                    fill="currentColor"
                    d="M222.14 58.87A8 8 0 0 0 216 56H54.68l-4.89-26.86A16 16 0 0 0 34.05 16H16a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H83.17a8 8 0 0 1-7.87-6.57L72.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56ZM180 192a12 12 0 1 1-12 12a12 12 0 0 1 12-12Zm-96 0a12 12 0 1 1-12 12a12 12 0 0 1 12-12Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-content w-full h-screen flex justify-center">
        <a
          href=""
          class="button my-auto text-white border bg-[#1f2021] py-3 px-5 font-medium"
        >
          SHOP NOW
        </a>
      </div>
    </div>


</body>
    </>
    )
}

export default Homepage