import React, { useEffect, useState } from "react";
import { collections } from "../data/dummyData";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function ShopByCollections() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/productsList`);
  };

  const [collection, setCollection] = useState([]);
  const getCollection = async () => {
    try {
      const response = await axios.get(
        "https://sbwears.com/api/admin/occasion/title"
      );
      setCollection(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCollection();
  }, []);
  return (
    <>
      {/* <div className="flex flex-col items-center justify-center mt-16 mb-8 ">
        <h2 className="mb-3 font-serif text-2xl">{collection[1]?.title}</h2>
        <h1 className="text-1xl">{collection[1]?.subtitle}</h1>
      </div> 
      <div className="container px-4 py-5 mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          {
            collection[1]?.categories?.map((collection)=>(
              <div className="mb-6 ">
              <img
                src={`https://sbwears.com/image/${collection.image}`}
                alt={"name"}
                onClick={handleClick}
                className="cursor-pointer h-70% w-70% object-cover object-center group-hover:scale-105 transition-transform duration-300"
              /> 
              <div className="flex flex-row items-center justify-between m-1">
               <div onClick={handleClick} className="cursor-pointer">
                   <p className="mt-2 font-serif text-2xl">{collection.description}</p>
                   <p className="mt-2 font-sans text-1xl">{collection.subDescription}</p>
                </div>
              <button onClick={handleClick} className="px-6 py-2 text-xs text-black bg-white border border-black ">EXPLORE</button>
              </div>
            </div> 
            ))
          }
          
        </div>
        </div> */}

      {collection.slice(1).map((col, index) => (
        <div key={index}>
          <div className="flex flex-col items-center justify-center mt-16 mb-8">
            <h2 className="mb-3 font-serif text-2xl">{col.title}</h2>
            <h1 className="text-1xl">{col.subtitle}</h1>
          </div>

          <div className="container px-4 py-5 mx-auto">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
              {col.categories?.map((category, catIndex) => (
                <div className="mb-6" key={catIndex}>
                  <img
                    src={`https://sbwears.com/image/${category.image}`}
                    alt="category"
                    onClick={handleClick}
                    className="cursor-pointer h-70% w-70% object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="flex flex-row items-center justify-between m-1">
                    <div onClick={handleClick} className="cursor-pointer">
                      <p className="mt-2 font-serif text-2xl">
                        {category.description}
                      </p>
                      <p className="mt-2 font-sans text-1xl">
                        {category.subDescription}
                      </p>
                    </div>
                    <button
                      onClick={handleClick}
                      className="px-6 py-2 text-xs text-black bg-white border border-black"
                    >
                      EXPLORE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
