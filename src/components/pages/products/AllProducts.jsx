import React from 'react';
import Products from './Products';

const AllProducts = () => {
  return <Products endpoint="allproducts?page=1" />;
};

export default AllProducts;


// const formatThousand = (num) => {
//   const n = String(num),
//     p = n.indexOf(".");
//   return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, (m, i) =>
//     p < 0 || i < p ? `${m}.` : m
//   );
// };