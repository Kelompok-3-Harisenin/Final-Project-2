import React from "react";
import * as Icon from "react-feather";

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
      className=" text-[#232324] rounded-md overflow-hidden font-sans mx-3 max-w-[277px] "
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
        <h2 className="text-l md:text-xl pt-2 md:mb-1 font-normal text-center">
          {title}
        </h2>
        <h2 className="text-center text-l md:text-xl font-semibold">
          {" "}
          <Icon.Minus className="inline" /> Rp
          <del className="text-red-500">{discountPrice}</del> {price}
        </h2>
        <p className="flex justify-center text-md md:text-l ">{rating}</p>
      </div>
    </a>
  );
};

export default AllProductsList;
