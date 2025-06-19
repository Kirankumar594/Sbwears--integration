import { React, useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsCartXFill } from "react-icons/bs";
import { RiLuggageCartFill } from "react-icons/ri";
import { MdOutlineAccountBalance } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";

import {
  RiDashboardLine,
  RiShoppingCart2Line, 
} from "react-icons/ri";
import { MdOutlineDiscount } from "react-icons/md";
import DiscountBanner from "./../components/DiscountBanner.jsx";
import DashBoardContents from "./../components/DashBoardContents.jsx";
import Category from "../components/Category.jsx";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import AddSize from "../components/AddSize.jsx";
import AddColor from "../components/AddColor.jsx";
import AddFabric from "../components/AddFabric.jsx";
import Product from "../components/Product.jsx";
import Contact from "../components/Contact.jsx";
import AddTitle from "../components/AddTitle.jsx";
import OccasionCategory from "../components/OccasionCategory.jsx";
import AddTag from "../components/AddTag.jsx";
import OccProduct from "../components/OccProduct.jsx";
import Stock from "../components/Stock.jsx";
import { AiOutlineStock } from "react-icons/ai";
import AbandonedCart from "../components/AbandonedCart.jsx";
import Customer from "../components/Customer.jsx";
import Orders from "../components/Orders.jsx";
import Transaction from "../components/Transaction.jsx";

const FilterSection = ({ title, isOpen, onToggle, icon, children }) => {
  return (
    <div className={`border-b border-gray-200 hover:bg-gray-100 ${isOpen ? "bg-gray-100" : ""}`}>
      <button
        className="w-full py-4  flex justify-between items-center text-left" 
        onClick={onToggle}
      >
        <div className="flex flex-row gap-3">
          {icon}
          <span className="text-sm tracking-widest  font-medium">{title}</span>
        </div>
        <span 
          className={`transform mr-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <MdOutlineKeyboardArrowDown className="w-6 h-8 " />
        </span>
      </button>
      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  );
};

export default function Dashboard() {
  const [component, setComponent] = useState("Dashboard");
  const handleComponent = (item) => {
    setComponent(item);
  };
  const [openSections, setOpenSections] = useState({
    topDis: false,
    AddProduct: false,
    specialDis: false,
    newarrivals: false,
    toprated: false,
    bestseller: false,
    sale: false,
    winter: false,
    wedding: false,
    new: false,
    special: false,
    collections: false,
    shop: false,
    bestSellers: false,
    extraLove: false,
    kids: false,
    speacialEdit: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="flex flex-row gap-2">
      <div className=" sticky top-0 py-8 w-3/12 h-screen bg-white  overflow-y-auto">
        <div 
          className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${component === "Dashboard" ? "bg-gray-200" : "bg-white"}`}
          onClick={() => handleComponent("Dashboard")}
        >
          <button className="w-full py-4  flex  gap-3 items-center text-left">
            <RiDashboardLine className="size-5 ml-8"/>
            <span className="text-sm tracking-widest  font-medium">
              DASHBOARD
            </span>  
          </button>
        </div>
        <div
          className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${component === "Discount Banner" ? "bg-gray-200" : "bg-white"}`}
          onClick={() => handleComponent("Discount Banner")}
        >
          <button className="w-full py-4  flex gap-3 items-center text-left">
            <MdOutlineDiscount className="size-5 ml-8" />
            <span className="text-sm tracking-widest  font-medium">
              DISCOUNT BANNER
            </span>
          </button>
        </div>
        <FilterSection
          icon={<BiCategoryAlt className="size-5  ml-8" />}
          title="OCCASION"
          isOpen={openSections.topDis}
          onToggle={() => toggleSection("topDis")}
        >
          <div className="space-y-2">
            <div className="flex flex-col tracking-widest ml-3">
              <span
                className={`ml-1 px-5 mr-28 mb-2 text-xs flex flex-row gap-2 cursor-pointer ${component === "AddTitle" ? "bg-gray-200" : ""}`}
                onClick={() => handleComponent("AddTitle")}
              >
                ADD TITLE
              </span>
              <span
                className={`ml-1 px-5 mr-28 mb-2 text-xs flex flex-row gap-2 cursor-pointer ${component === "OccasionCategory" ? "bg-gray-200" : ""}`}
                onClick={() => handleComponent("OccasionCategory")}
              >
                ADD CATEGORY
              </span>
            </div>
          </div>
        </FilterSection>
        <div
          className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${component === "Category" ? "bg-gray-200" : "bg-white"}`}
          onClick={() => handleComponent("Category")}
        >
          <button className="w-full py-4  flex gap-3 items-center text-left">
            <BiCategoryAlt className="size-5 ml-8" />
            <span className="text-sm tracking-widest  font-medium">
              PRODUCT CATEGORY
            </span>
          </button>
        </div>

        <FilterSection
          icon={<RiShoppingCart2Line className="size-5  ml-8" />}
          title="PRODUCT MANAGEMENT"
          isOpen={openSections.product}
          onToggle={() => toggleSection("product")}
        >
          <div className="space-y-2">
            <div className="flex flex-col tracking-widest ml-3">
              <span
                className={`ml-1 px-5 mr-28 mb-2 text-xs flex flex-row gap-2 cursor-pointer ${component === "Addsize" ? "bg-gray-200" : ""}`}
                onClick={() => handleComponent("Addsize")}
              >
                ADD SIZE
              </span>
              <span
                className={`ml-1 px-5 mr-28 mb-2 text-xs flex flex-row gap-2 cursor-pointer ${component === "AddColor" ? "bg-gray-200" : ""}`}
                onClick={() => handleComponent("AddColor")}
              >
                ADD COLOR
              </span>
              <span
                className={`ml-1 px-5 mr-28 mb-2 text-xs flex flex-row gap-2 cursor-pointer ${component === "AddFabric" ? "bg-gray-200" : ""}`}
                onClick={() => handleComponent("AddFabric")}
              >
                {" "}
                ADD FABRIC
              </span>
              <span
                className={`ml-1 px-5 mr-28 mb-2 text-xs flex flex-row gap-2 cursor-pointer ${component === "AddTag" ? "bg-gray-200" : ""}`}
                onClick={() => handleComponent("AddTag")}
              >
                {" "}
                ADD TAG
              </span>
            </div>
          </div>
        </FilterSection>
        {/* <div
          className="border-b border-gray-200 cursor-pointer"
          onClick={() => handleComponent("Product")}
        >
          <button className="w-full py-4  flex gap-3 items-center text-left">
            <RiShoppingCart2Line />
            <span className="text-sm tracking-widest  font-medium">
              PRODUCT
            </span>
          </button>
        </div> */}
        <FilterSection
          icon={<MdAddShoppingCart className="size-5  ml-8" />}
          title="PRODUCT"
          isOpen={openSections.AddProduct}
          onToggle={() => toggleSection("AddProduct")}
        >
          <div className="space-y-2">
            <div className="flex flex-col tracking-widest ml-3">
              <span
                className={`ml-1 px-5 mr-28 mb-2 text-xs flex flex-row gap-2 cursor-pointer ${component === "OccProduct" ? "bg-gray-200" : ""}`}
                onClick={() => handleComponent("OccProduct")}
              >
                OCCASION PRODUCT
              </span>
              <span
                className={`ml-1 px-5 mr-28 mb-2 text-xs flex flex-row gap-2 cursor-pointer ${component === "Product" ? "bg-gray-200" : ""}`}
                onClick={() => handleComponent("Product")}
              >
                CATEGORY PRODUCT
              </span>
            </div>
          </div>
        </FilterSection>

        <div
          className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${component === "Stock" ? "bg-gray-200" : "bg-white"}`}
          onClick={() => handleComponent("Stock")}
        >
          <button className="w-full py-4  flex gap-3 items-center text-left">
            <AiOutlineStock className="w-5 h-5 ml-8" />
            <span className="text-sm tracking-widest  font-medium">STOCK</span>
          </button>
        </div>
        <div
          className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${component === "AbandonedCart" ? "bg-gray-200" : "bg-white"}`}
          onClick={() => handleComponent("AbandonedCart")}
        >
          <button className="w-full py-4  flex gap-3 items-center text-left">
            <BsCartXFill className="w-5 h-5 ml-8" />
            <span className="text-sm tracking-widest  font-medium">
              ABANDONED CART
            </span>
          </button>
        </div>
        <div
          className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${component === "Customer" ? "bg-gray-200" : "bg-white"}`}
          onClick={() => handleComponent("Customer")}
        >
          <button className="w-full py-4  flex gap-3 items-center text-left">
            <RiAccountCircleLine className="w-5 h-5 ml-8" />
            <span className="text-sm tracking-widest  font-medium">
              CUSTOMER
            </span>
          </button>
        </div>
        <div
          className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${component === "Orders" ? "bg-gray-200" : "bg-white"}`}
          onClick={() => handleComponent("Orders")}
        >
          <button className="w-full py-4  flex gap-3 items-center text-left">
            <RiLuggageCartFill className="w-5 h-5 ml-8" />
            <span className="text-sm tracking-widest  font-medium">ORDERS</span>
          </button>
        </div>
        <div
          className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${component === "Transaction" ? "bg-gray-200" : "bg-white"}`}
          onClick={() => handleComponent("Transaction")}
        >
          <button className="w-full py-4  flex gap-3 items-center text-left">
            <MdOutlineAccountBalance className="w-5 h-5 ml-8" />
            <span className="text-sm tracking-widest  font-medium">
              TRANSACTION
            </span>
          </button>
        </div>

        <div
          className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${component === "Contact" ? "bg-gray-200" : "bg-white"}`}
          onClick={() => handleComponent("Contact")}
        >
          <button className="w-full py-4  flex gap-3 items-center text-left">
            <IoCallOutline className="size-5 ml-8" />
            <span className="text-sm tracking-widest  font-medium">
              CONTACT
            </span>
          </button>
        </div>
      </div>

      {component === "Dashboard" && <DashBoardContents />}
      {component === "Discount Banner" && <DiscountBanner />}
      {component === "AddTitle" && <AddTitle />}
      {component === "OccasionCategory" && <OccasionCategory />}
      {component === "Category" && <Category />}
      {component === "Addsize" && <AddSize />}
      {component === "AddColor" && <AddColor />}
      {component === "AddFabric" && <AddFabric />}
      {component === "AddTag" && <AddTag />}
      {component === "OccProduct" && <OccProduct />}
      {component === "Product" && <Product />}
      {component === "Stock" && <Stock />}
      {component === "AbandonedCart" && <AbandonedCart />}
      {component === "Customer" && <Customer />}
      {component === "Orders" && <Orders />}
      {component === "Transaction" && <Transaction />}
      {component === "Contact" && <Contact />}
    </div>
  );
}
