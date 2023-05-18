import React from 'react'
import AllProductsList from './AllProductsList'
import products from '../data/products'
import Header from './Header'

const formatThousand = num => {
   const n = String(num),
         p = n.indexOf('.')
   return n.replace(
       /\d(?=(?:\d{3})+(?:\.|$))/g,
       (m, i) => p < 0 || i < p ? `${m}.` : m
   )
};



const AllProducts = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
       {products.map(item => (
          <AllProductsList
            discountPercent={item.discountPercent}
             imgUrl={item.imgUrl}
             title={item.title}
             rating={item.rating}
             discountPrice={item.discountPrice}
             price={formatThousand(item.price)}
             link={item.link}
          />
       ))}
    </div>
 </div>
 </>
  )
}

export default AllProducts