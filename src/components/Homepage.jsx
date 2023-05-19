import React from 'react'
import Header from './Header'

const Homepage = () => {
  return (
    <>
      <body>
        <div className="hero-img min-h-screen bg-cover bg-no-repeat bg-center">
          <Header />
          <div className="hero-content w-full h-screen flex justify-center">
            <a href="" className="button my-auto text-white border bg-[#1f2021] py-3 px-5 font-medium">
              SHOP NOW
            </a>
          </div>
        </div>
      </body>
    </>
  )
}

export default Homepage
