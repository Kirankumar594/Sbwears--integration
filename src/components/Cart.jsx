import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

// const userId = "679df27605ddb49197de32fb";
const userId = localStorage.getItem("userId") 
const Cart = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCart = async () => {
    try {
      const res = await axios.get(
        `https://sbwears.com/api/users/user/${userId}`
      );
      setUser(res.data);
    } catch (err) {
      console.error("Failed to fetch cart:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  const handleAddToCart = async (productId, size) => {
    try {
      const cartItem = {
        userId,
        productId,
        quantity: 1,
        size,
      };

      const res = await axios.post(
        "https://sbwears.com/api/admin/cart/add",
        cartItem
      );

      if (res.status === 200) {
        await getCart();
      }
    } catch (error) {
      console.error("Add to cart error:", error);
    }
  };
  console.log("user.cart : " , user?.cart)
  const handleRemoveFromCart = async (productId, size, removeAll = false) => {
    try {
      const res = await axios.post(
        "https://sbwears.com/api/admin/cart/remove",
        {
          userId,
          productId,
          size,
          removeAll,
        }
      );

      if (res.status === 200) {
        await getCart();
      }
    } catch (error) {
      console.error("Remove from cart error:", error);
    }
  };

  if (loading) return <div>Loading...</div>;

  const cartItems = user?.cart || [];
  console.log("cartItems : " , cartItems)
  const subtotal = cartItems.reduce((total, item) => {
    return total + (item.productId?.offerPrice || 0) * item.quantity;
  }, 0);

  return (
    <div className="flex flex-col h-screen max-w-xl mx-auto bg-white">
      <div className="flex-1 p-4 overflow-y-auto">
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="flex pb-5 mt-5 border-b border-gray-200"
          >
            <img
              className="w-20 h-24 object-cover"
              src={`https://sbwears.com/image/${item?.productId?.images?.[0]}`}
              alt={item.productId?.name}
            />
            <div className="flex flex-col ml-5 flex-1">
              <p className="mb-2 text-sm font-medium">
                {item.productId?.name}
              </p>
              <p className="mb-2 text-sm">₹{item.productId?.offerPrice}</p>
              <p className="mb-2 text-sm">Size: {item.size}</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2 border px-2 rounded">
                  <button
                    className="w-8 h-8 text-gray-800"
                    onClick={() =>
                      handleRemoveFromCart(item.productId._id, item.size)
                    }
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="w-8 h-8 text-gray-800"
                    onClick={() =>
                      handleAddToCart(item.productId._id, item.size)
                    }
                  >
                    ＋
                  </button>
                </div>
                <button
                  className="text-gray-500"
                  onClick={() =>
                    handleRemoveFromCart(item.productId._id, item.size, true)
                  }
                >
                  <RiDeleteBin6Line className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sticky Footer */}
      <div className="sticky bottom-0 p-5 bg-white border-t border-gray-200 shadow-md">
        <div className="flex justify-between text-sm font-medium">
          <p>SUBTOTAL</p>
          <p>₹{subtotal.toLocaleString()}</p>
        </div>
        {/* <a href="/checkout"> */}
          <button className="flex items-center justify-center w-full py-3 mt-6 text-white bg-black hover:bg-gray-900 transition">
            <span className="text-sm pr-2">PLACE ORDER</span>
            <img
              className="h-5 pr-2"
              src="https://cdn.gokwik.co/v4/images/upi-icons.svg"
              alt="UPI"
            />
            <img
              className="h-5"
              src="https://cdn.gokwik.co/v4/images/right-arrow.svg"
              alt="→"
            />
          </button>
        {/* </a> */}
      </div>
    </div>
  );
};

export default Cart;
