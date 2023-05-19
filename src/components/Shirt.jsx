import React from "react";
import AllProductsList from "./AllProductsList";
import shirt from "../data/shirt";
import Header from "./Header";

const formatThousand = (num) => {
  const n = String(num),
    p = n.indexOf(".");
  return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, (m, i) =>
    p < 0 || i < p ? `${m}.` : m
  );
};

const Shirt = () => {
  return (
    <>
      <div className="bg-slate-400 h-[67px]">
        <Header />
      </div>

      <div className="py-10">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {shirt.map((item) => (
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
      </div>
    </>
  );
};

export default Shirt;
