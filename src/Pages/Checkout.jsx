import { React, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const FilterSection = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="  w-full border-gray-200">
      <button
        className="w-full py-4  flex justify-between items-center text-left"
        onClick={onToggle}
      >
        <span className="text-sm tracking-widest  flex felx-row gap-2 font-medium">
          <FiShoppingCart className="w-5 h-5 cursor-pointer " />
          {title}
        </span>
        <span
          className={`transform  transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <MdOutlineKeyboardArrowDown className="w-6 h-8" />
        </span>
      </button>
      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  );
};

function Checkout() {
  const [component, setComponent] = useState("mobile");
  const [couponCode, setCouponCode] = useState("");
  const openOrderSummary = () => {};
  const [openSections, setOpenSections] = useState(false);

  const toggleSection = () => {
    setOpenSections((prev) => !prev);
  };
  const handleCoupon = (coup) => {
    setCouponCode(coup);
    setComponent("address");
  };

  return (
    <div className=" my-20 h-full flex items-center justify-center px-4">
      {component === "coupon" && (
        <div className="max-w-md w-full flex flex-col gap-2 bg-white rounded-lg shadow-lg p-8 ">
          <h1 className="font-bold text-center text-xl mb-4">
            Offers & Benefits
          </h1>
          <p>Available Offers</p>
          <div className="border-b">
            <div className="  p-2 flex felx-row justify-between items-center">
              <p>SALE15</p>
              <p
                className="cursor-pointer text-blue-800 font-semibold"
                onClick={() => handleCoupon("SALE15")}
              >
                APPLY
              </p>
            </div>
            <p className="text-xs px-2 pb-3">
              Shop For ₹3499 & More, Get Extra 15% Off
            </p>
          </div>
          <div className="border-b">
            <div className="  p-2 flex felx-row justify-between items-center">
              <p>SALE10</p>
              <p
                className="cursor-pointer text-blue-800 font-semibold"
                onClick={() => handleCoupon("SALE10")}
              >
                APPLY
              </p>
            </div>
            <p className="text-xs px-2 pb-3">
              Shop For ₹2499 & More, Get Extra 10% Off
            </p>
          </div>
          <div className="border-b">
            <div className="  p-2 flex felx-row justify-between items-center">
              <p>SALE25</p>
              <p
                className="cursor-pointer text-blue-800 font-semibold"
                onClick={() => handleCoupon("SALE25")}
              >
                APPLY
              </p>
            </div>
            <p className="text-xs px-2 pb-3">
              Shop For ₹4499 & More, Get Extra 25% Off
            </p>
          </div>
        </div>
      )}
      {component === "mobile" && (
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 ">
          <div className="text-center">
            <p className="text-xl">Mobile</p> 
            <div
              className="flex flex-row items-center justify-between cursor-pointer"
              onClick={openOrderSummary}
            > 
              <FilterSection
                title="Order Summary"
                isOpen={openSections}
                onToggle={() => toggleSection()}
              >
                <div className="flex flex-col max-h-screen overflow-y-scroll  max-w-1/3 bg-white">
                  {[1, 2].map(() => (
                    <div className="flex flex-row mt-5  border-b pb-5">
                      <img
                        className="h-24 w-20 object-cover object-center"
                        src="https://www.libas.in/cdn/shop/files/P2-2.jpg?v=1736509629&width=540"
                        alt="img"
                      />
                      <div className="flex flex-col ml-5">
                        <p className="mb-2 text-sm">
                          Surkh Libas Art Red Embroidered Georgette Straight
                          Suit With Dupatta
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
                <div className="flex flex-row justify-between  mt-5">
                  <p className="tracking-widestCustom">SUBTOTAL</p>
                  <p>₹26,697</p>
                </div>
              </FilterSection>
            </div>
          </div>

          <form className="mt-4 ">
            <div className="bg-gray-200 p-3 rounded-md">
              <input
                placeholder="ENTER COUPON CODE"
                className="focus:outline-none  bg-transparent w-full"
                value={couponCode}
              />
            </div>
            <div className="flex flex-row  justify-between mt-2">
              <p className="text-xs font-black mt-1">6 coupons available </p>
              <button
                className="text-sm text-blue-800 flex flex-row items-center font-black"
                onClick={() => setComponent("coupon")}
              >
                {" "}
                View Coupons{" "}
                <MdOutlineKeyboardArrowRight className=" w-6 h-6" />{" "}
              </button>
            </div>
            <div className="flex mt-4 flex-col gap-2">
              <p>Enter Mobile Number</p>
              <input
                value="+91 | 8088144722"
                placeholder="Enter Order ID or Tracking Number"
                className="w-full px-2 py-3 mb-5   rounded-lg   border border-black text-xl focus:outline-none   "
              />
            </div>

            <button
              onClick={() => setComponent("address")}
              className="w-full mt-2 flex flex-row justify-center items-center bg-black text-white  py-3 px-4 rounded-md transition-colors duration-300 ease-in-out"
            >
              <p className="pr-3">Continue</p>
              <IoIosArrowRoundForward className="w-8 h-8" />
            </button>
          </form>
        </div>
      )}
      {component === "address" && (
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 ">
          <div className="text-center">
            <p className="text-xl">Address</p> 
            <div
              className="flex flex-row items-center justify-between cursor-pointer"
              onClick={openOrderSummary}
            > 
              <FilterSection
                title="Order Summary"
                isOpen={openSections}
                onToggle={() => toggleSection()}
              >
                <div className="flex flex-col max-h-screen overflow-y-scroll  max-w-1/3 bg-white">
                  {[1, 2].map(() => (
                    <div className="flex flex-row mt-5  border-b pb-5">
                      <img
                        className="h-24 w-20 object-cover object-center"
                        src="https://www.libas.in/cdn/shop/files/P2-2.jpg?v=1736509629&width=540"
                        alt="img"
                      />
                      <div className="flex flex-col ml-5">
                        <p className="mb-2 text-sm">
                          Surkh Libas Art Red Embroidered Georgette Straight
                          Suit With Dupatta
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
                <div className="flex flex-row justify-between  mt-5">
                  <p className="tracking-widestCustom">SUBTOTAL</p>
                  <p>₹26,697</p>
                </div>
              </FilterSection>
            </div>
          </div>

          <form className="mt-4 ">
            <div className="bg-gray-200 p-3 rounded-md">
              <input
                placeholder="ENTER COUPON CODE"
                value={couponCode}
                className="focus:outline-none  bg-transparent w-full"
              />
            </div>
            <div className="flex flex-row  justify-between mt-2">
              <p className="text-xs font-black mt-1">6 coupons available </p>
              <button
                className="text-sm text-blue-800 flex flex-row items-center font-black"
                onClick={() => setComponent("coupon")}
              >
                {" "}
                View Coupons{" "}
                <MdOutlineKeyboardArrowRight className=" w-6 h-6" />{" "}
              </button>
            </div>
            <div className="flex flex-col mt-4 gap-2">
              <p>Shipping Address</p> 
              <textarea
                value="Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016"
                placeholder="Enter your address"
                rows={5}
                cols={40}
                className="border border-black focus:outline-none rounded-lg p-3"
              />
            </div>

            <button
              onClick={() => setComponent("pay")}
              className="mt-5 w-full  flex flex-row justify-center items-center bg-black text-white  py-3 px-4 rounded-md transition-colors duration-300 ease-in-out"
            >
              <p className="pr-3">Continue</p>
              <IoIosArrowRoundForward className="w-8 h-8" />
            </button>
          </form>
        </div>
      )}
      {component === "pay" && (
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 ">
          <div className="text-center">
            <p className="text-xl">Payment Method</p> 
            <div
              className="flex flex-row items-center justify-between cursor-pointer"
              onClick={openOrderSummary}
            > 
              <FilterSection
                title="Order Summary"
                isOpen={openSections}
                onToggle={() => toggleSection()}
              >
                <div className="flex flex-col max-h-screen overflow-y-scroll  max-w-1/3 bg-white">
                  {[1, 2].map(() => (
                    <div className="flex flex-row mt-5  border-b pb-5">
                      <img
                        className="h-24 w-20 object-cover object-center"
                        src="https://www.libas.in/cdn/shop/files/P2-2.jpg?v=1736509629&width=540"
                        alt="img"
                      />
                      <div className="flex flex-col ml-5">
                        <p className="mb-2 text-sm">
                          Surkh Libas Art Red Embroidered Georgette Straight
                          Suit With Dupatta
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
                <div className="flex flex-row justify-between  mt-5">
                  <p className="tracking-widestCustom">SUBTOTAL</p>
                  <p>₹26,697</p>
                </div>
              </FilterSection>
            </div>
          </div>
          <div className="bg-gray-200 p-3 rounded-md">
            <input
              placeholder="ENTER COUPON CODE"
              value={couponCode}
              className="focus:outline-none  bg-transparent w-full"
            />
          </div>
          <div className="flex flex-row  justify-between mt-2">
            <p className="text-xs font-black mt-1">6 coupons available </p>
            <button
              className="text-sm text-blue-800 flex flex-row items-center font-black"
              onClick={() => setComponent("coupon")}
            >
              {" "}
              View Coupons <MdOutlineKeyboardArrowRight className=" w-6 h-6" />{" "}
            </button>
          </div>
          <p className="mt-3">Payment Options</p>
          <div className="flex mt-3 gap-3 flex-col">
            <div className="bg-black  p-4 cursor-pointer rounded-md flex items-center justify-between flex-row">
              <p className="font-semibold text-white">UPI</p>
              <div className="flex flex-row items-center gap-2">
                <p className="text-white"> ₹26,697</p>
                <MdOutlineKeyboardArrowRight className="text-white w-6 h-6" />
              </div>
            </div>
            <div className="bg-black  p-4 cursor-pointer rounded-md flex items-center justify-between flex-row">
              <p className="font-semibold text-white">Debit/Credit Cards</p>
              <div className="flex flex-row items-center gap-2">
                <p className="text-white"> ₹26,697</p>
                <MdOutlineKeyboardArrowRight className="text-white w-6 h-6" />
              </div>
            </div>
            <div className="bg-black  p-4 cursor-pointer rounded-md flex items-center justify-between flex-row">
              <p className="font-semibold text-white">NetBanking</p>
              <div className="flex flex-row items-center gap-2">
                <p className="text-white"> ₹26,697</p>
                <MdOutlineKeyboardArrowRight className="text-white w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Checkout;
