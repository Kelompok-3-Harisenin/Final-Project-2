import React from 'react'
import Header from './Header'

const Homepage = () => {
  return (
    <>
      <body>
        <div class="hero-img min-h-screen bg-cover bg-no-repeat bg-center">
          <Header />
          <div class="hero-content w-full h-screen flex justify-center">
            <a href="" class="button my-auto text-white border bg-[#1f2021] py-3 px-5 font-medium">
              SHOP NOW
            </a>
          </div>
        </div>
      </body>
    </>
  )
}

export default Homepage
