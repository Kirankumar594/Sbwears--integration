import React from "react";

export default function TrackOrder() {
  return (
    <div className=" my-20 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 ">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">
            Track Your Order
          </h1>
          <h2 className="text-sm font-black text-gray-600 pb-2">
            Order ID / Tracking Number
          </h2>
        </div>

        <form className=" ">
          <div>
            <input
              type="text"
              placeholder="Enter Order ID or Tracking Number"
              className="w-full px-4 py-1 mb-5 text-sm  bg-gray-50 border border-gray-200 focus:outline-none   "
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2  bg-gradient-to-r from-[#2c4669] via-[#5e789b] to-[#2c4669] text-white font-semibold py-3 px-4 rounded-md transition-colors duration-300 ease-in-out"
          >
            Track Order
          </button>
        </form>
      </div>
    </div>
  );
}
