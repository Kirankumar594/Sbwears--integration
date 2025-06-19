import React from "react";
import {categories} from "../data/dummyData";
import { useNavigate } from "react-router-dom";
export default function ShopByCategories() {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate(`/productsList`);
  } 
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-5 mb-10 ">
        <h2 className="font-serif mb-3 text-2xl">SHOP BY CATEGORIES</h2>
        <h1 className="text-1xl">Discover Your Fashion</h1>
      </div>
      <div className=" ml-4 lg:ml-12 md:ml-10 overflow-scroll cursor-pointer  px-4 py-5 flex flex-row">
     { categories.map((collection)=>
           (<img 
           className="h-52 w-52 mr-3"
           onClick={handleClick}
           src={
            collection.imageUrl
           }
           alt={"name"}
         />)
        )}
      </div>
    </>
  );
}