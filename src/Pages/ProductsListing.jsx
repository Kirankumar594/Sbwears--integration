import React from "react";
import { useNavigate } from "react-router-dom";
import { Products } from "../data/dummyData";
import Filter from "../components/Filter";
import { BiSortAlt2 } from "react-icons/bi";

export default function ProductsListing() {
  const navigate = useNavigate();
  const handleClick = (productId) => {
    localStorage.setItem("selectedProductId", productId);
    navigate(`/product`);
  };
  return (
    <>
      <div className="container mt-5 mx-auto px-4 py-5 flex flex-row">
        <div className="hidden lg:block w-full  text-black  mr-10 py-2  rounded-md mt-10">
          <Filter /> 
        </div>
        <div className="flex flex-col">
          <img
            className=" h-full w-full"
            src="https://www.libas.in/cdn/shop/files/mehandi-magic.jpg?v=1733134506"
            alt="img"
          ></img>
          <div className="sticky top-0 lg:hidden bg-white  py-2   mt-3 flex flex-row ">
            <button className="border w-full py-2 text-white text-xs bg-buttonColor tracking-widest">
              <div className="flex flex-row items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
                FILTER (1)
              </div>
            </button>
            <button className="border bg-white w-full py-2 text-xs tracking-widest">
              <div className="flex flex-row items-center justify-center">
                <BiSortAlt2 className="mr-1 size-4" />
                SORT
              </div>
            </button>
          </div>
          <div className=" hidden lg:flex flex-row justify-between">
            <p className="text-xs text-gray-900 mt-5 mb-5">
              {" "}
              Mehendi Outfits for Women | 125 products
            </p>
            <div className="flex flex-row justify-between">
              <p className="text-xs tracking-widest  text-gray-900 mt-5">
                {" "}
                SORT
              </p>
              <p className="text-xs ml-5 tracking-widest text-gray-900 mt-5">
                FEATURED
              </p>
              <p className="ml-10 mt-5"></p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {Products.map((product) => (
              <div
                className="mb-6 hover:cursor-pointer"
                onClick={() => handleClick(product.id)}
              >
                <img
                  className="h-80% w-60% object-cover object-center"
                  src={product.imageUrl}
                  alt="img"
                />

                <p className="text-xs pl-2 pt-2 text-gray-900">
                  {product.description.length > 39
                    ? `${product.description.substring(0, 39)}...`
                    : product.description}
                </p>
                <div className="flex flex-row">
                  <p className="text-xs pl-2 pt-2 line-through text-gray-900">
                    {product.price}
                  </p>
                  <p className="text-xs pl-2 pt-2 text-gray-900">
                    {product.priceAfterDiscount}{" "}
                  </p>
                  <p className="text-xs pl-2 pt-2 text-red-400  ">
                    {product.discount} off
                  </p>
                </div>
                <p className="text-xs pl-2 pt-2 text-gray-900">
                  {product.size}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
