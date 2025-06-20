import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
const Cart = () => {
  // const getCart = async () => {
  //   const [user, setUser] = useState([]);
  //   const res = await axios.get("http://localhost:8080/api/users/user/679df27605ddb49197de32fb");
  //   setUser(res.data);
  // };

  // useEffect(() => {
  //   getCart();
  // },[])
  return (
    <div>
      <div className="flex flex-col max-h-screen p-4 overflow-y-scroll bg-white max-w-1/3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
          <div className="flex flex-row pb-5 mt-5 ml-5 border-b">
            <img
              className="object-cover object-center w-20 h-24"
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
              <div className="flex items-center justify-between gap-2 mt-2">
                <div className="flex items-center gap-2 border">
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
                  <RiDeleteBin6Line className="w-5 h-5 mr-2" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="sticky bottom-0 p-5 bg-white border-t max-w-1/3 h-36">
        <div className="flex flex-row justify-between ">
          <p className="tracking-widestCustom">SUBTOTAL</p>
          <p>₹26,697</p>
        </div>
        <a href="checkout">
          <button className="flex flex-row items-center justify-center w-full py-3 mt-8 text-white bg-black tracking-widestCustom">
            <p className="pr-2 text-sm">PLACE ORDER </p>
            <img
              className="pr-2"
              src="https://cdn.gokwik.co/v4/images/upi-icons.svg"
              alt="img"
            />
            <img
              className="pr-2"
              src="https://cdn.gokwik.co/v4/images/right-arrow.svg"
              alt="img"
            />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Cart;
