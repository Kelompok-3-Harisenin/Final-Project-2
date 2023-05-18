import React from "react";
import * as Icon from "react-feather";

const countRating = (x) =>{
  for (i=0; i<x; i++ ){
    return "X";
  }
}


const AllProductsList = ({
  link,
  title,
  rating,
  imgUrl,
  price,
  discountPrice,
  discountPercent,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-stone-900 text-[#232324] rounded-md overflow-hidden font-sans"
    >
      <div className="text-red-900 font-semibold border-2 border-red-900 rounded-3xl relative w-2/6 flex items-center">
        <div className="text-center"> Save {discountPercent}%OFF</div>
      </div>
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover mt-4"
      />
      <div className="w-full py-5 px-8">
        <h2 className="text-xl md:text-2xl pt-2 md:mb-1 font-semibold text-center">
          {title}
        </h2>
        <h2 className="text-center text-l md:text-xl font-semibold">
          {" "}
          <Icon.Minus className="inline" />{" "}Rp
          <del className="text-red-500">{discountPrice}</del> {price}
        </h2>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
        
          {/* {rating.map((star) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md">
              {star}
            
            </span>
          ))} */}
        </p>
      </div>
    </a>
  );
};

export default AllProductsList;
