import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../../Header';
import AllProductsList from '../AllProductsList';

const Products = ({ endpoint }) => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:3001/products/${endpoint}`);
          const jsonData = await response.json();
          setData(jsonData.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [endpoint]);
  
    return (
      <>
        <div className="bg-slate-400 h-[67px]">
          <Header />
        </div>
  
        <div className="py-10">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {data.map((item) => (
                <AllProductsList
                discountPercent={item.discount}
                imgUrl={item.thumbnailPreview}
                title={item.detailName}
                rating={item.rating}
                discountPrice={item.discount}
                price={item.initialPrice}
                link={item.link}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };

export default Products