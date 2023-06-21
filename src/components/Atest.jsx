import React from 'react'
import { useState, useEffect } from 'react';



const Atest = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001');
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div>
      {data.map((item) => (
        <p key={item.id}>{item.fullName}</p>
      ))}
    </div>
    </>
  )
}

export default Atest