import React from "react";
import {collections} from '../data/dummyData'
import { useNavigate } from "react-router-dom";
export default function ShopByCollections() {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate(`/productsList`);
  } 
  return (
    <> 
      <div className="flex flex-col justify-center items-center mt-16 mb-8 ">
        <h2 className="font-serif mb-3 text-2xl">SHOP BY COLLECTIONS</h2>
        <h1 className="text-1xl">Indulge in Curated Styles</h1>
      </div> 
      <div className="container mx-auto  px-4 py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {
            collections.map((collection)=>(
              <div className=" mb-6">
              <img
                src={collection.imageUrl}
                alt={"name"}
                onClick={handleClick}
                className="cursor-pointer h-70% w-70% object-cover object-center group-hover:scale-105 transition-transform duration-300"
              /> 
              <div className="flex flex-row justify-between m-1 items-center">
               <div onClick={handleClick} className="cursor-pointer">
                   <p className="text-2xl font-serif mt-2">{collection.description}</p>
                   <p className="text-1xl font-sans mt-2">{collection.subDescription}</p>
                </div>
              <button onClick={handleClick} className="bg-white text-xs py-2 px-6  text-black border border-black ">EXPLORE</button>
              </div>
            </div> 
            ))
          }
          
        </div>
        </div>
    </>
  );
}
