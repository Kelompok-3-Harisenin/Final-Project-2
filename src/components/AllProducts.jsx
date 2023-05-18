import React from 'react'
import AllProductsList from './AllProductsList'
import products from '../data/products'
import Header from './Header'

const AllProducts = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
       {products.map(item => (
          <AllProductsList
             imgUrl={item.imgUrl}
             title={item.title}
             rating={item.rating}
             discountPrice={item.discountPrice}
             price={item.price}
             link={item.link}
          />
       ))}
    </div>
 </div>
 </>
  )
}

export default AllProducts