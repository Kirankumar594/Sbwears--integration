import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { occasions } from "../data/dummyData";
import axios from "axios";

export default function ShopByOccasions() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/productsList`);
  };

  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    try {
      const res = await axios.get(
        "https://sbwears.com/api/admin/product/category"
      );
      setCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategory();
  }, []);

  const [occasion, setOccasion] = useState([]);

  const getOccasion = async () => {
    try {
      const res = await axios.get(
        "https://sbwears.com/api/admin/occasion/title"
      );
      console.log(res);
      setOccasion(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOccasion();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-5 mb-10 ">
        <h2 className="mb-3 font-serif text-2xl">SHOP BY CATEGORIES</h2>
        <h1 className="text-1xl">Discover Your Fashion</h1>
      </div>
      <div className="container px-4 py-5 mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          {category.map((occasion) => (
            <div key={occasion.id} className="mb-6">
              <img
                src={`https://sbwears.com/image/${occasion.image}`}
                alt={occasion.description}
                className="cursor-pointer h-[60%] w-[100%] object-fill  group-hover:scale-105 transition-transform duration-300"
                onClick={handleClick}
              />
              <div className="flex flex-row items-center justify-between m-1">
                <p
                  className="mt-2 font-serif text-2xl cursor-pointer"
                  onClick={handleClick}
                >
                  {occasion.Category}
                </p>
                <button
                  className="px-6 py-2 text-xs text-black bg-white border border-black cursor-pointer"
                  onClick={handleClick}
                >
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
