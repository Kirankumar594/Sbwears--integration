import React from "react";
import { Products } from "../data/dummyData";
import { useNavigate } from "react-router-dom";
export default function RecentlyViewed() {
    const navigate = useNavigate();
    const handleClick = (productId)=>{ 
      localStorage.setItem('selectedProductId', productId);
      navigate(`/product`);
      window.location.reload();
    } 
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-6 mb-10 ">
        <h2 className=" text-2xl">Recently Viewed</h2> 
      </div>
        <div className="flex  flex-row overflow-scroll scrollbar-hide">
          {Products.map((product) => ( 
            <div  className="mb-6 mr-2 hover:cursor-pointer min-h-80 min-w-80" 
              key={product.id}
              onClick={()=>handleClick(product.id)} 
            >
              <img className=" object-cover object-center" src={product.imageUrl} alt="img" />
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
              <p className="text-xs pl-2 pt-2 text-gray-900">{product.size}</p>
            </div>
          ))}
        </div>
    </>
  );
}
