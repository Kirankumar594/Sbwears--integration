import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
const Cart = () => {
  return (
    <div>
      <div className="flex flex-col max-h-screen overflow-y-scroll p-4 max-w-1/3 bg-white">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
          <div className="flex flex-row mt-5 ml-5 border-b pb-5">
            <img
              className="h-24 w-20 object-cover object-center"
              src="https://www.libas.in/cdn/shop/files/P2-2.jpg?v=1736509629&width=540"
              alt="img"
            />
            <div className="flex flex-col ml-5">
              <p className="mb-2 text-sm">
                Surkh Libas Art Red Embroidered Georgette Straight Suit With
                Dupatta
              </p>
              <div className="mb-2 text-sm">₹4,499</div>
              <div className="mb-2 text-sm">Size: XS</div>
              <div className="flex items-center justify-between mt-2 gap-2">
                <div className="flex items-center border gap-2">
                  <button className="w-8 h-8 text-gray-800 rounded-md">
                    −
                  </button>
                  <span className="text-gray-800">1</span>
                  <button className="w-8 h-8 text-gray-800 rounded-md">
                    ＋
                  </button>
                </div>
                <button className="text-gray-500">
                  <span className="sr-only">Remove</span>
                  <RiDeleteBin6Line className="h-5 w-5 mr-2" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-1/3 sticky bottom-0 bg-white border-t p-5  h-36">
        <div className="flex flex-row justify-between  ">
          <p className="tracking-widestCustom">SUBTOTAL</p>
          <p>₹26,697</p>
        </div>
        <a href="checkout">
         <button className="bg-black flex flex-row justify-center  items-center text-white mt-8 py-3 w-full  tracking-widestCustom">
          <p className="text-sm pr-2">PLACE ORDER  </p> 
          <img className="pr-2" src="https://cdn.gokwik.co/v4/images/upi-icons.svg" alt="img"/>
          <img  className='pr-2' src="https://cdn.gokwik.co/v4/images/right-arrow.svg" alt="img"/>
        </button>
        </a>
      </div>
    </div>
  );
};

export default Cart;
