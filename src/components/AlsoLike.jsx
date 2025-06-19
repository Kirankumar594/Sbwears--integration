import React from "react";
import { Products } from "../data/dummyData";
import { useNavigate } from "react-router-dom";
export default function AlsoLike() {
    const navigate = useNavigate();
    const handleClick = (productId)=>{ 
      localStorage.setItem('selectedProductId', productId);
      navigate(`/product`);
      window.location.reload();
    } 
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-24 mb-10 ">
        <h2 className=" text-2xl">You may also like</h2> 
      </div>
        <div className="flex   flex-row scrollbar-hide overflow-scroll ">
          {Products.map((product) => ( 
             
            <div key={product.id} className="mb-6 mr-2 hover:cursor-pointer min-h-96 min-w-72"
            onClick={()=>handleClick(product.id)} 
            >
              <img className=" object-cover object-center" 
                
                src={product.imageUrl} alt="img" />
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
