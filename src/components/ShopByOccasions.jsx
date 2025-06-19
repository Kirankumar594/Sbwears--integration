import React from "react";
import { useNavigate } from 'react-router-dom';
import { occasions } from "../data/dummyData";

export default function ShopByOccasions() {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate(`/productsList`);
  } 
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-1 mb-5 ">
        <h2 className="font-serif mb-3 text-2xl">SHOP BY OCCASIONS</h2>
        <h1 className="text-1xl">Styles For Every Celebration</h1>
      </div>
      <div className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {occasions.map((occasion) => (
            <div key={occasion.id} className="mb-6">
              <img 
                src={occasion.imageUrl}
                alt={occasion.description}
                className="cursor-pointer h-70% w-70% object-cover object-center group-hover:scale-105 transition-transform duration-300"
                onClick={handleClick}
              />
              <div className="flex flex-row justify-between m-1 items-center">
                <p className="text-2xl font-serif mt-2 cursor-pointer" onClick={handleClick} >{occasion.description}</p>
                <button className="bg-white text-xs py-2 px-6 text-black border cursor-pointer border-black" onClick={handleClick}>
                  EXPLORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
