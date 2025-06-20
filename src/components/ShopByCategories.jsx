import React, { useEffect, useState } from "react";
import { categories } from "../data/dummyData";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function ShopByCategories() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/productsList`);
  };

  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/admin/product/category"
      );
      console.log(res, "qqqqqqqqqqqqqqq");
      setCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-5 mb-10 ">
        <h2 className="mb-3 font-serif text-2xl">SHOP BY CATEGORIES</h2>
        <h1 className="text-1xl">Discover Your Fashion</h1>
      </div>
      <div className="flex flex-row px-4 py-5 ml-4 overflow-scroll cursor-pointer lg:ml-12 md:ml-10">
        {category.map((collection) => (
          <img
            className="mr-3 h-52 w-52"
            onClick={handleClick}
            src={`http://localhost:8080/image/${collection.image}`}
            alt={"name"}
          />
        ))}
      </div>
    </>
  );
}
