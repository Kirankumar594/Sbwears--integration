// import { React, useState } from "react";
// import { BiCategoryAlt } from "react-icons/bi";
// import { IoCallOutline } from "react-icons/io5";
// import { RiAccountCircleLine } from "react-icons/ri";
// import { BsCartXFill } from "react-icons/bs";
// import { RiLuggageCartFill } from "react-icons/ri";
// import { MdOutlineAccountBalance } from "react-icons/md";
// import { MdAddShoppingCart } from "react-icons/md";

// import {
//   RiDashboardLine,
//   RiShoppingCart2Line,
// } from "react-icons/ri";
// import { MdOutlineDiscount } from "react-icons/md";
// import DiscountBanner from "./../components/DiscountBanner.jsx";
// import DashBoardContents from "./../components/DashBoardContents.jsx";
// import Category from "../components/Category.jsx";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import AddSize from "../components/AddSize.jsx";
// import AddColor from "../components/AddColor.jsx";
// import AddFabric from "../components/AddFabric.jsx";
// import Product from "../components/Product.jsx";
// import Contact from "../components/Contact.jsx";
// import AddTitle from "../components/AddTitle.jsx";
// import OccasionCategory from "../components/OccasionCategory.jsx";
// import AddTag from "../components/AddTag.jsx";
// import OccProduct from "../components/OccProduct.jsx";
// import Stock from "../components/Stock.jsx";
// import { AiOutlineStock } from "react-icons/ai";
// import AbandonedCart from "../components/AbandonedCart.jsx";
// import Customer from "../components/Customer.jsx";
// import Orders from "../components/Orders.jsx";
// import Transaction from "../components/Transaction.jsx";
// import { LogOutIcon } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const FilterSection = ({ title, isOpen, onToggle, icon, children }) => {
//   return (
//     <div className={`border-b border-gray-200 hover:bg-gray-100 ${isOpen ? "bg-gray-100" : ""}`}>
//       <button
//         className="flex items-center justify-between w-full py-4 text-left"
//         onClick={onToggle}
//       >
//         <div className="flex flex-row gap-3">
//           {icon}
//           <span className="text-sm font-medium tracking-widest">{title}</span>
//         </div>
//         <span
//           className={`transform mr-5 transition-transform ${
//             isOpen ? "rotate-180" : ""
//           }`}
//         >
//           <MdOutlineKeyboardArrowDown className="w-6 h-8 " />
//         </span>
//       </button>
//       {isOpen && <div className="pb-4">{children}</div>}
//     </div>
//   );
// };

// export default function Dashboard() {
//   const [component, setComponent] = useState("Dashboard");
//   const handleComponent = (item) => {
//     setComponent(item);
//   };
//   const [openSections, setOpenSections] = useState({
//     topDis: false,
//     AddProduct: false,
//     specialDis: false,
//     newarrivals: false,
//     toprated: false,
//     bestseller: false,
//     sale: false,
//     winter: false,
//     wedding: false,
//     new: false,
//     special: false,
//     collections: false,
//     shop: false,
//     bestSellers: false,
//     extraLove: false,
//     kids: false,
//     speacialEdit: false,
//   });

//   const toggleSection = (section) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }));
//   };
//   const navigate = useNavigate()

//   return (
//     <div className="flex flex-row gap-2">
//       <div className="sticky top-0 w-3/12 h-screen py-8 overflow-y-auto bg-white ">
//         <div
//           className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${component === "Dashboard" ? "bg-gray-200" : "bg-white"}`}
//           onClick={() => handleComponent("Dashboard")}
//         >
//           <button className="flex items-center w-full gap-3 py-4 text-left">
//             <RiDashboardLine className="ml-8 size-5"/>
//             <span className="text-sm font-medium tracking-widest">
//               DASHBOARD
//             </span>
//           </button>
//         </div>
//         <div
//           className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${component === "Discount Banner" ? "bg-gray-200" : "bg-white"}`}
//           onClick={() => handleComponent("Discount Banner")}
//         >
//           <button className="flex items-center w-full gap-3 py-4 text-left">
//             <MdOutlineDiscount className="ml-8 size-5" />
//             <span className="text-sm font-medium tracking-widest">
//               DISCOUNT BANNER
//             </span>
//           </button>
//         </div>
//         {/* <FilterSection
//           icon={<BiCategoryAlt className="ml-8 size-5" />}
//           title="OCCASION"
//           isOpen={openSections.topDis}
//           onToggle={() => toggleSection("topDis")}
//         >
//           <div className="space-y-2">
//             <div className="flex flex-col ml-3 tracking-widest">
//               <span
//                 className={`ml-1 px-5 mr-28 mb-2 text-xs flex flex-row gap-2 cursor-pointer ${component === "AddTitle" ? "bg-gray-200" : ""}`}
//                 onClick={() => handleComponent("AddTitle")}
//               >
//                 ADD TITLE
//               </span>
//               <span
//                 className={`ml-1 px-5 mr-28 mb-2 text-xs flex flex-row gap-2 cursor-pointer ${component === "OccasionCategory" ? "bg-gray-200" : ""}`}
//                 onClick={() => handleComponent("OccasionCategory")}
//               >
//                 ADD CATEGORY
//               </span>
//             </div>
//           </div>
//         </FilterSection> */}
//         <div
//           className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${component === "Category" ? "bg-gray-200" : "bg-white"}`}
//           onClick={() => handleComponent("Category")}
//         >
//           <button className="flex items-center w-full gap-3 py-4 text-left">
//             <BiCategoryAlt className="ml-8 size-5" />
//             <span className="text-sm font-medium tracking-widest">
//               PRODUCT CATEGORY
//             </span>
//           </button>
//         </div>

//         <FilterSection
//           icon={<RiShoppingCart2Line className="ml-8 size-5" />}
//           title="PRODUCT MANAGEMENT"
//           isOpen={openSections.product}
//           onToggle={() => toggleSection("product")}
//         >
//           <div className="space-y-2">
//             <div className="flex flex-col ml-3 tracking-widest">
//               <span
//                 className={`ml-1 px-5 mr-28 mb-2 text-xs flex flex-row gap-2 cursor-pointer ${component === "Addsize" ? "bg-gray-200" : ""}`}
//                 onClick={() => handleComponent("Addsize")}
//               >
//                 ADD SIZE
//               </span>
//               <span
//                 className={`ml-1 px-5 mr-28 mb-2 text-xs flex flex-row gap-2 cursor-pointer ${component === "AddColor" ? "bg-gray-200" : ""}`}
//                 onClick={() => handleComponent("AddColor")}
//               >
//                 ADD COLOR
//               </span>
//               <span
//                 className={`ml-1 px-5 mr-28 mb-2 text-xs flex flex-row gap-2 cursor-pointer ${component === "AddFabric" ? "bg-gray-200" : ""}`}
//                 onClick={() => handleComponent("AddFabric")}
//               >
//                 {" "}
//                 ADD FABRIC
//               </span>
//               <span
//                 className={`ml-1 px-5 mr-28 mb-2 text-xs flex flex-row gap-2 cursor-pointer ${component === "AddTag" ? "bg-gray-200" : ""}`}
//                 onClick={() => handleComponent("AddTag")}
//               >
//                 {" "}
//                 ADD TAG
//               </span>
//             </div>
//           </div>
//         </FilterSection>
//         {/* <div
//           className="border-b border-gray-200 cursor-pointer"
//           onClick={() => handleComponent("Product")}
//         >
//           <button className="flex items-center w-full gap-3 py-4 text-left">
//             <RiShoppingCart2Line />
//             <span className="text-sm font-medium tracking-widest">
//               PRODUCT
//             </span>
//           </button>
//         </div> */}

//         {/* <FilterSection
//           icon={<MdAddShoppingCart className="ml-8 size-5" />}
//           title="PRODUCT"
//           isOpen={openSections.AddProduct}
//           onToggle={() => toggleSection("AddProduct")}
//         >
//           <div className="space-y-2">
//             <div className="flex flex-col ml-3 tracking-widest">
//               <span
//                 className={`ml-1 px-5 mr-28 mb-2 text-xs flex flex-row gap-2 cursor-pointer ${component === "OccProduct" ? "bg-gray-200" : ""}`}
//                 onClick={() => handleComponent("OccProduct")}
//               >
//                 OCCASION PRODUCT
//               </span>
//               <span
//                 className={`ml-1 px-5 mr-28 mb-2 text-xs flex flex-row gap-2 cursor-pointer ${component === "Product" ? "bg-gray-200" : ""}`}
//                 onClick={() => handleComponent("Product")}
//               >
//                 CATEGORY PRODUCT
//               </span>
//             </div>
//           </div>
//         </FilterSection> */}

//         <div
//           className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${component === "Product" ? "bg-gray-200" : "bg-white"}`}
//           // onClick={() => handleComponent("Stock")}
//           onClick={() => handleComponent("Product")}
//         >
//           <button className="flex items-center w-full gap-3 py-4 text-left">
//             {/* <AiOutlineStock className="w-5 h-5 ml-8" /> */}
//              <MdAddShoppingCart className="ml-8 size-5" />
//             <span className="text-sm font-medium tracking-widest">PRODUCT</span>
//           </button>
//         </div>
//         <div
//           className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${component === "Stock" ? "bg-gray-200" : "bg-white"}`}
//           onClick={() => handleComponent("Stock")}
//         >
//           <button className="flex items-center w-full gap-3 py-4 text-left">
//             <AiOutlineStock className="w-5 h-5 ml-8" />
//             <span className="text-sm font-medium tracking-widest">STOCK</span>
//           </button>
//         </div>
//         <div
//           className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${component === "AbandonedCart" ? "bg-gray-200" : "bg-white"}`}
//           onClick={() => handleComponent("AbandonedCart")}
//         >
//           <button className="flex items-center w-full gap-3 py-4 text-left">
//             <BsCartXFill className="w-5 h-5 ml-8" />
//             <span className="text-sm font-medium tracking-widest">
//               ABANDONED CART
//             </span>
//           </button>
//         </div>
//         <div
//           className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${component === "Customer" ? "bg-gray-200" : "bg-white"}`}
//           onClick={() => handleComponent("Customer")}
//         >
//           <button className="flex items-center w-full gap-3 py-4 text-left">
//             <RiAccountCircleLine className="w-5 h-5 ml-8" />
//             <span className="text-sm font-medium tracking-widest">
//               CUSTOMER
//             </span>
//           </button>
//         </div>
//         <div
//           className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${component === "Orders" ? "bg-gray-200" : "bg-white"}`}
//           onClick={() => handleComponent("Orders")}
//         >
//           <button className="flex items-center w-full gap-3 py-4 text-left">
//             <RiLuggageCartFill className="w-5 h-5 ml-8" />
//             <span className="text-sm font-medium tracking-widest">ORDERS</span>
//           </button>
//         </div>
//         <div
//           className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${component === "Transaction" ? "bg-gray-200" : "bg-white"}`}
//           onClick={() => handleComponent("Transaction")}
//         >
//           <button className="flex items-center w-full gap-3 py-4 text-left">
//             <MdOutlineAccountBalance className="w-5 h-5 ml-8" />
//             <span className="text-sm font-medium tracking-widest">
//               TRANSACTION
//             </span>
//           </button>
//         </div>

//         <div
//           className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${component === "Contact" ? "bg-gray-200" : "bg-white"}`}
//           onClick={() => handleComponent("Contact")}
//         >
//           <button className="flex items-center w-full gap-3 py-4 text-left">
//             <IoCallOutline className="ml-8 size-5" />
//             <span className="text-sm font-medium tracking-widest">
//               CONTACT
//             </span>
//           </button>
//         </div>
//         <div
//           className={`border-b border-gray-200 cursor-pointer hover:bg-gray-300 bg-gray-200`}
//           onClick={() =>{
//             localStorage.clear()
//             navigate("/admin/login")
//           }
//         }
//         >
//           <button className="flex items-center w-full gap-3 py-4 text-left">
//             <LogOutIcon className="ml-8 size-5" />
//             <span className="text-sm font-medium tracking-widest">
//               LOGOUT
//             </span>
//           </button>
//         </div>
//       </div>

//       {component === "Dashboard" && <DashBoardContents />}
//       {component === "Discount Banner" && <DiscountBanner />}
//       {component === "AddTitle" && <AddTitle />}
//       {component === "OccasionCategory" && <OccasionCategory />}
//       {component === "Category" && <Category />}
//       {component === "Addsize" && <AddSize />}
//       {component === "AddColor" && <AddColor />}
//       {component === "AddFabric" && <AddFabric />}
//       {component === "AddTag" && <AddTag />}
//       {component === "OccProduct" && <OccProduct />}
//       {component === "Product" && <Product />}
//       {component === "Stock" && <Stock />}
//       {component === "AbandonedCart" && <AbandonedCart />}
//       {component === "Customer" && <Customer />}
//       {component === "Orders" && <Orders />}
//       {component === "Transaction" && <Transaction />}
//       {component === "Contact" && <Contact />}
//     </div>
//   );
// }

import { React, useState, useEffect } from "react";
import axios from "axios";
import { BiCategoryAlt } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsCartXFill } from "react-icons/bs";
import { RiLuggageCartFill } from "react-icons/ri";
import { MdOutlineAccountBalance } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
import { RiDashboardLine, RiShoppingCart2Line } from "react-icons/ri";
import { MdOutlineDiscount } from "react-icons/md";
import DiscountBanner from "./../components/DiscountBanner.jsx";
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
import { Navigate, useNavigate } from "react-router-dom";
import { LogOutIcon } from "lucide-react";

// API Base URL
const API_BASE_URL = "https://sbwears.com/api";

// Dashboard Content Component with Real Data
const DashBoardContents = () => {
  const [dashboardData, setDashboardData] = useState({
    totalProducts: 0,
    totalSales: 0,
    activeUsers: 0,
    pendingOrders: 0,
    recentActivities: [],
    recentOrders: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      // Fetch all required data
      const [occasionProducts, categoryProducts, users, abandonedCarts] =
        await Promise.all([
          axios
            .get(`${API_BASE_URL}/admin/occasion/product`)
            .catch(() => ({ data: { products: [] } })),
          axios
            .get(`${API_BASE_URL}/admin/category/product`)
            .catch(() => ({ data: { products: [] } })),
          axios
            .get(`${API_BASE_URL}/admin/getAllusers`)
            .catch(() => ({ data: [] })),
          axios
            .get(`${API_BASE_URL}/admin/cart/abandoned`)
            .catch(() => ({ data: { usersWithAbandonedCarts: [] } })),
        ]);

      // Calculate statistics
      const totalOccasionProducts =
        occasionProducts.data?.products?.length || 0;
      const totalCategoryProducts =
        categoryProducts.data?.products?.length || 0;
      const totalProducts = totalOccasionProducts + totalCategoryProducts;

      // Calculate total sales from products
      const occasionSales =
        occasionProducts.data?.products?.reduce((sum, product) => {
          return sum + product.offerPrice * (product.stocks || 0);
        }, 0) || 0;

      const categorySales =
        categoryProducts.data?.products?.reduce((sum, product) => {
          return sum + product.offerPrice * (product.stocks || 0);
        }, 0) || 0;

      const totalSales = occasionSales + categorySales;

      // Get active users (users who have items in cart or recent activity)
      const activeUsers =
        users.data?.filter(
          (user) =>
            user.cart?.length > 0 ||
            new Date(user.updatedAt) >
              new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
        ).length || 0;

      // Get pending orders (users with items in cart)
      const pendingOrders =
        users.data?.filter((user) => user.cart?.length > 0).length || 0;

      // Get recent activities (new user registrations)
      const recentActivities =
        users.data
          ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          ?.slice(0, 5)
          ?.map((user) => ({
            id: user._id,
            type: "registration",
            message: `${user.firstName || user.phoneNumber} joined`,
            timestamp: user.createdAt,
          })) || [];

      // Get recent orders (recent cart additions)
      const recentOrders =
        users.data
          ?.filter((user) => user.cart?.length > 0)
          ?.sort((a, b) => {
            const aLatest = Math.max(
              ...(a.cart?.map((item) => new Date(item.addedAt)) || [0])
            );
            const bLatest = Math.max(
              ...(b.cart?.map((item) => new Date(item.addedAt)) || [0])
            );
            return bLatest - aLatest;
          })
          ?.slice(0, 5)
          ?.map((user, index) => ({
            id: user._id,
            orderNumber: `#${Math.random()
              .toString(36)
              .substr(2, 4)
              .toUpperCase()}`,
            customer: user.firstName || user.phoneNumber,
            timestamp: user.cart[0]?.addedAt || user.updatedAt,
            items: user.cart?.length || 0,
          })) || [];

      setDashboardData({
        totalProducts,
        totalSales,
        activeUsers,
        pendingOrders,
        recentActivities,
        recentOrders,
      });
    } catch (err) {
      console.error("Error fetching dashboard data:", err);
      setError("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="flex-1 p-8 bg-gray-50">
        <div className="flex items-center justify-center h-96">
          <div className="w-12 h-12 border-b-2 border-blue-600 rounded-full animate-spin"></div>
          <span className="ml-3 text-gray-600">Loading dashboard...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 p-8 bg-gray-50">
        <div className="px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded">
          <p>{error}</p>
          <button
            onClick={fetchDashboardData}
            className="px-4 py-2 mt-2 text-white bg-red-500 rounded hover:bg-red-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-8 bg-gray-50">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">Dashboard</h1>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="mb-2 text-sm font-medium text-gray-500">
            Total Products
          </h3>
          <p className="text-3xl font-bold text-gray-800">
            {dashboardData.totalProducts}
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="mb-2 text-sm font-medium text-gray-500">
            Total Sales
          </h3>
          <p className="text-3xl font-bold text-gray-800">
            {formatCurrency(dashboardData.totalSales)}
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="mb-2 text-sm font-medium text-gray-500">
            Active Users
          </h3>
          <p className="text-3xl font-bold text-gray-800">
            {dashboardData.activeUsers}
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="mb-2 text-sm font-medium text-gray-500">
            Pending Orders
          </h3>
          <p className="text-3xl font-bold text-gray-800">
            {dashboardData.pendingOrders}
          </p>
        </div>
      </div>

      {/* Recent Activities and Orders */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Recent Activities */}
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="mb-6 text-xl font-semibold text-gray-800">
            Recent Activities
          </h2>
          <div className="space-y-4">
            {dashboardData.recentActivities.length > 0 ? (
              dashboardData.recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-gray-50"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                      <RiAccountCircleLine className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        New User Registration
                      </p>
                      <p className="text-sm text-gray-600">
                        {activity.message}
                      </p>
                      <p className="text-xs text-gray-500">
                        {formatDate(activity.timestamp)}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 text-xs text-white bg-black rounded-full">
                    Registration
                  </span>
                </div>
              ))
            ) : (
              <p className="py-8 text-center text-gray-500">
                No recent activities
              </p>
            )}
          </div>
        </div>

        {/* Recent Orders */}
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="mb-6 text-xl font-semibold text-gray-800">
            Recent Orders
          </h2>
          <div className="space-y-4">
            {dashboardData.recentOrders.length > 0 ? (
              dashboardData.recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-gray-50"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                      <RiLuggageCartFill className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        New Order Received
                      </p>
                      <p className="text-sm text-gray-600">
                        Order {order.orderNumber} from {order.customer}
                      </p>
                      <p className="text-xs text-gray-500">
                        {formatDate(order.timestamp)}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 text-xs text-white bg-black rounded-full">
                    Order
                  </span>
                </div>
              ))
            ) : (
              <p className="py-8 text-center text-gray-500">No recent orders</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const FilterSection = ({ title, isOpen, onToggle, icon, children }) => {
  return (
    <div
      className={`border-b border-gray-200 hover:bg-gray-100 ${
        isOpen ? "bg-gray-100" : ""
      }`}
    >
      <button
        className="flex items-center justify-between w-full py-4 text-left"
        onClick={onToggle}
      >
        <div className="flex flex-row gap-3">
          {icon}
          <span className="text-sm font-medium tracking-widest">{title}</span>
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
  const [apiData, setApiData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleComponent = (item) => {
    setComponent(item);
    if (item !== "Dashboard") {
      loadComponentData(item);
    }
  };

  const [openSections, setOpenSections] = useState({
    topDis: false,
    AddProduct: false,
    product: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // API call function with better error handling
  const makeApiCall = async (
    endpoint,
    method = "GET",
    data = null,
    isFormData = false
  ) => {
    try {
      setLoading(true);
      setError(null);

      const config = {
        method,
        url: `${API_BASE_URL}${endpoint}`,
        headers: isFormData ? {} : { "Content-Type": "application/json" },
        timeout: 10000, // 10 second timeout
      };

      if (data) {
        if (method === "GET") {
          config.params = data;
        } else {
          config.data = data;
        }
      }

      const response = await axios(config);
      return response.data;
    } catch (err) {
      console.error(`API Error for ${endpoint}:`, err);
      const errorMessage =
        err.response?.data?.error ||
        err.response?.data?.message ||
        err.message ||
        "Network error";
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Load data based on component
  const loadComponentData = async (componentName) => {
    let endpoint = "";
    let dataKey = "";

    switch (componentName) {
      case "Discount Banner":
        endpoint = "/admin/banner";
        dataKey = "banners";
        break;
      case "AddTitle":
        endpoint = "/admin/occasion/title";
        dataKey = "titles";
        break;
      case "OccasionCategory":
        endpoint = "/admin/occasion/category";
        dataKey = "occasionCategories";
        break;
      case "Category":
        endpoint = "/admin/product/category";
        dataKey = "productCategories";
        break;
      case "Addsize":
        endpoint = "/admin/productManagement/size";
        dataKey = "sizes";
        break;
      case "AddColor":
        endpoint = "/admin/productManagement/color";
        dataKey = "colors";
        break;
      case "AddFabric":
        endpoint = "/admin/productManagement/fabric";
        dataKey = "fabrics";
        break;
      case "AddTag":
        endpoint = "/admin/productManagement/tag";
        dataKey = "tags";
        break;
      case "OccProduct":
        endpoint = "/admin/occasion/product";
        dataKey = "occasionProducts";
        break;
      case "Product":
        endpoint = "/admin/category/product";
        dataKey = "categoryProducts";
        break;
      case "Customer":
        endpoint = "/admin/getAllusers";
        dataKey = "users";
        break;
      case "AbandonedCart":
        endpoint = "/admin/cart/abandoned";
        dataKey = "abandonedCarts";
        break;
      default:
        return;
    }

    if (endpoint) {
      const data = await makeApiCall(endpoint);
      if (data) {
        setApiData((prev) => ({
          ...prev,
          [dataKey]: data,
        }));
      }
    }
  };

  // API Operations with proper error handling
  const apiOperations = {
    addBanner: async (formData) => {
      const result = await makeApiCall("/admin/banner", "POST", formData, true);
      if (result) loadComponentData("Discount Banner");
      return result;
    },
    deleteBanner: async (bannerId) => {
      const result = await makeApiCall(`/admin/banner/${bannerId}`, "DELETE");
      if (result) loadComponentData("Discount Banner");
      return result;
    },
    addOrUpdateTitle: async (titleData) => {
      const result = await makeApiCall(
        "/admin/occasion/title",
        "POST",
        titleData
      );
      if (result) loadComponentData("AddTitle");
      return result;
    },
    deleteTitle: async (titleId) => {
      const result = await makeApiCall(
        `/admin/occasion/title/${titleId}`,
        "DELETE"
      );
      if (result) loadComponentData("AddTitle");
      return result;
    },
    addOrUpdateOccCategory: async (formData) => {
      const result = await makeApiCall(
        "/admin/occasion/category",
        "POST",
        formData,
        true
      );
      if (result) loadComponentData("OccasionCategory");
      return result;
    },
    deleteOccCategory: async (categoryId) => {
      const result = await makeApiCall(
        `/admin/occasion/category/${categoryId}`,
        "DELETE"
      );
      if (result) loadComponentData("OccasionCategory");
      return result;
    },
    addOrUpdateProCategory: async (formData) => {
      const result = await makeApiCall(
        "/admin/product/category",
        "POST",
        formData,
        true
      );
      if (result) loadComponentData("Category");
      return result;
    },
    deleteProCategory: async (categoryId) => {
      const result = await makeApiCall(
        `/admin/product/category/${categoryId}`,
        "DELETE"
      );
      if (result) loadComponentData("Category");
      return result;
    },
    addSize: async (sizeData) => {
      const result = await makeApiCall(
        "/admin/productManagement/size",
        "POST",
        sizeData
      );
      if (result) loadComponentData("Addsize");
      return result;
    },
    addColor: async (colorData) => {
      const result = await makeApiCall(
        "/admin/productManagement/color",
        "POST",
        colorData
      );
      if (result) loadComponentData("AddColor");
      return result;
    },
    addFabric: async (fabricData) => {
      const result = await makeApiCall(
        "/admin/productManagement/fabric",
        "POST",
        fabricData
      );
      if (result) loadComponentData("AddFabric");
      return result;
    },
    addTag: async (tagData) => {
      const result = await makeApiCall(
        "/admin/productManagement/tag",
        "POST",
        tagData
      );
      if (result) loadComponentData("AddTag");
      return result;
    },
    addOrUpdateOccasionProduct: async (formData) => {
      const result = await makeApiCall(
        "/admin/occasion/product",
        "POST",
        formData,
        true
      );
      if (result) loadComponentData("OccProduct");
      return result;
    },
    addOrUpdateCategoryProduct: async (formData) => {
      const result = await makeApiCall(
        "/admin/category/product",
        "POST",
        formData,
        true
      );
      if (result) loadComponentData("Product");
      return result;
    },
    updateOccasionStock: async (stockData) => {
      const result = await makeApiCall(
        "/admin/update/occasion/stock",
        "POST",
        stockData
      );
      if (result) loadComponentData("Stock");
      return result;
    },
    updateCategoryStock: async (stockData) => {
      const result = await makeApiCall(
        "/admin/update/category/stock",
        "POST",
        stockData
      );
      if (result) loadComponentData("Stock");
      return result;
    },
    getUser: async (userId) => {
      return await makeApiCall(`/admin/user/${userId}`);
    },
    updateUser: async (userData) => {
      const result = await makeApiCall("/admin/update/user", "POST", userData);
      if (result) loadComponentData("Customer");
      return result;
    },
  };

  const refreshData = () => {
    if (component !== "Dashboard") {
      loadComponentData(component);
    }
  };
  const navigate = useNavigate();
  const getComponentProps = () => ({
    apiData,
    loading,
    error,
    ...apiOperations,
    refreshData,
    makeApiCall,
  });

  return (
    <div className="flex flex-row gap-2">
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <div className="w-8 h-8 mx-auto border-b-2 border-blue-600 rounded-full animate-spin"></div>
            <p className="mt-2 text-sm text-gray-600">Loading...</p>
          </div>
        </div>
      )}

      {/* Error Toast */}
      {error && (
        <div className="fixed z-50 max-w-md p-4 text-white bg-red-500 rounded-lg shadow-lg top-4 right-4">
          <div className="flex items-start justify-between">
            <p className="text-sm">{error}</p>
            <button
              onClick={() => setError(null)}
              className="ml-2 text-lg leading-none text-white hover:text-gray-200"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <div className="sticky top-0 w-3/12 h-screen py-8 overflow-y-auto bg-white ">
        <div
          className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${
            component === "Dashboard" ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => handleComponent("Dashboard")}
        >
          <button className="flex items-center w-full gap-3 py-4 text-left">
            <RiDashboardLine className="ml-8 size-5" />
            <span className="text-sm font-medium tracking-widest">
              DASHBOARD
            </span>
          </button>
        </div>
        <div
          className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${
            component === "Discount Banner" ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => handleComponent("Discount Banner")}
        >
          <button className="flex items-center w-full gap-3 py-4 text-left">
            <MdOutlineDiscount className="ml-8 size-5" />
            <span className="text-sm font-medium tracking-widest">
              DISCOUNT BANNER
            </span>
          </button>
        </div>
        {/* <FilterSection
          icon={<BiCategoryAlt className="ml-8 size-5" />}
          title="OCCASION"
          isOpen={openSections.topDis}
          onToggle={() => toggleSection("topDis")}
        >
          <div className="space-y-2">
            <div className="flex flex-col ml-3 tracking-widest">
              <span
                className={`ml-1 px-5 mr-28 mb-2 text-xs flex flex-row gap-2 cursor-pointer ${
                  component === "AddTitle" ? "bg-gray-200" : ""
                }`}
                onClick={() => handleComponent("AddTitle")}
              >
                ADD TITLE
              </span>
              <span
                className={`ml-1 px-5 mr-28 mb-2 text-xs flex flex-row gap-2 cursor-pointer ${
                  component === "OccasionCategory" ? "bg-gray-200" : ""
                }`}
                onClick={() => handleComponent("OccasionCategory")}
              >
                ADD CATEGORY
              </span>
            </div>
          </div>
        </FilterSection> */}
        <div
          className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${
            component === "Category" ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => handleComponent("Category")}
        >
          <button className="flex items-center w-full gap-3 py-4 text-left">
            <BiCategoryAlt className="ml-8 size-5" />
            <span className="text-sm font-medium tracking-widest">
              PRODUCT CATEGORY
            </span>
          </button>
        </div>

        <FilterSection
          icon={<RiShoppingCart2Line className="ml-8 size-5" />}
          title="PRODUCT MANAGEMENT"
          isOpen={openSections.product}
          onToggle={() => toggleSection("product")}
        >
          <div className="space-y-2">
            <div className="flex flex-col ml-3 tracking-widest">
              <span
                className={`ml-1 px-5 mr-28 mb-2 text-xs flex flex-row gap-2 cursor-pointer ${
                  component === "Addsize" ? "bg-gray-200" : ""
                }`}
                onClick={() => handleComponent("Addsize")}
              >
                ADD SIZE
              </span>
              <span
                className={`ml-1 px-5 mr-28 mb-2 text-xs flex flex-row gap-2 cursor-pointer ${
                  component === "AddColor" ? "bg-gray-200" : ""
                }`}
                onClick={() => handleComponent("AddColor")}
              >
                ADD COLOR
              </span>
              <span
                className={`ml-1 px-5 mr-28 mb-2 text-xs flex flex-row gap-2 cursor-pointer ${
                  component === "AddFabric" ? "bg-gray-200" : ""
                }`}
                onClick={() => handleComponent("AddFabric")}
              >
                {" "}
                ADD FABRIC
              </span>
              <span
                className={`ml-1 px-5 mr-28 mb-2 text-xs flex flex-row gap-2 cursor-pointer ${
                  component === "AddTag" ? "bg-gray-200" : ""
                }`}
                onClick={() => handleComponent("AddTag")}
              >
                {" "}
                ADD TAG
              </span>
            </div>
          </div>
        </FilterSection>

        {/* <FilterSection
          icon={<MdAddShoppingCart className="ml-8 size-5" />}
          title="PRODUCT"
          isOpen={openSections.AddProduct}
          onToggle={() => toggleSection("AddProduct")}
        >
          <div className="space-y-2">
            <div className="flex flex-col ml-3 tracking-widest">
              <span
                className={`ml-1 px-5 mr-28 mb-2 text-xs flex flex-row gap-2 cursor-pointer ${
                  component === "OccProduct" ? "bg-gray-200" : ""
                }`}
                onClick={() => handleComponent("OccProduct")}
              >
                OCCASION PRODUCT
              </span>
              <span
                className={`ml-1 px-5 mr-28 mb-2 text-xs flex flex-row gap-2 cursor-pointer ${
                  component === "Product" ? "bg-gray-200" : ""
                }`}
                onClick={() => handleComponent("Product")}
              >
                CATEGORY PRODUCT
              </span>
            </div>
          </div>
        </FilterSection> */}

        <div
          className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${
            component === "Product" ? "bg-gray-200" : "bg-white"
          }`}
           onClick={() => handleComponent("Product")}
        >
          <button className="flex items-center w-full gap-3 py-4 text-left">
            {/* <AiOutlineStock className="w-5 h-5 ml-8" /> */}
            <MdAddShoppingCart className="ml-8 size-5" />
            <span className="text-sm font-medium tracking-widest">PRODUCT</span>
          </button>
        </div>
        <div
          className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${
            component === "Stock" ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => handleComponent("Stock")}
        >
          <button className="flex items-center w-full gap-3 py-4 text-left">
            <AiOutlineStock className="w-5 h-5 ml-8" />
            <span className="text-sm font-medium tracking-widest">STOCK</span>
          </button>
        </div>
        <div
          className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${
            component === "AbandonedCart" ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => handleComponent("AbandonedCart")}
        >
          <button className="flex items-center w-full gap-3 py-4 text-left">
            <BsCartXFill className="w-5 h-5 ml-8" />
            <span className="text-sm font-medium tracking-widest">
              ABANDONED CART
            </span>
          </button>
        </div>
        <div
          className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${
            component === "Customer" ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => handleComponent("Customer")}
        >
          <button className="flex items-center w-full gap-3 py-4 text-left">
            <RiAccountCircleLine className="w-5 h-5 ml-8" />
            <span className="text-sm font-medium tracking-widest">
              CUSTOMER
            </span>
          </button>
        </div>
        <div
          className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${
            component === "Orders" ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => handleComponent("Orders")}
        >
          <button className="flex items-center w-full gap-3 py-4 text-left">
            <RiLuggageCartFill className="w-5 h-5 ml-8" />
            <span className="text-sm font-medium tracking-widest">ORDERS</span>
          </button>
        </div>
        <div
          className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${
            component === "Transaction" ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => handleComponent("Transaction")}
        >
          <button className="flex items-center w-full gap-3 py-4 text-left">
            <MdOutlineAccountBalance className="w-5 h-5 ml-8" />
            <span className="text-sm font-medium tracking-widest">
              TRANSACTION
            </span>
          </button>
        </div>

        <div
          className={`border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${
            component === "Contact" ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => handleComponent("Contact")}
        >
          <button className="flex items-center w-full gap-3 py-4 text-left">
            <IoCallOutline className="ml-8 size-5" />
            <span className="text-sm font-medium tracking-widest">CONTACT</span>
          </button>
        </div>
         <div
           className={`border-b border-gray-200 cursor-pointer hover:bg-gray-300 bg-gray-200`}
         onClick={() =>{
localStorage.clear()
             navigate("/admin/login")
           }
         }
         >
           <button className="flex items-center w-full gap-3 py-4 text-left">
             <LogOutIcon className="ml-8 size-5" />
             <span className="text-sm font-medium tracking-widest">
               LOGOUT
             </span>
           </button>
         </div>
      </div>

      {/* Component Rendering */}
      {component === "Dashboard" && <DashBoardContents />}
      {component === "Discount Banner" && (
        <DiscountBanner {...getComponentProps()} />
      )}
      {component === "AddTitle" && <AddTitle {...getComponentProps()} />}
      {component === "OccasionCategory" && (
        <OccasionCategory {...getComponentProps()} />
      )}
      {component === "Category" && <Category {...getComponentProps()} />}
      {component === "Addsize" && <AddSize {...getComponentProps()} />}
      {component === "AddColor" && <AddColor {...getComponentProps()} />}
      {component === "AddFabric" && <AddFabric {...getComponentProps()} />}
      {component === "AddTag" && <AddTag {...getComponentProps()} />}
      {component === "OccProduct" && <OccProduct {...getComponentProps()} />}
      {component === "Product" && <Product {...getComponentProps()} />}
      {component === "Stock" && <Stock {...getComponentProps()} />}
      {component === "AbandonedCart" && (
        <AbandonedCart {...getComponentProps()} />
      )}
      {component === "Customer" && <Customer {...getComponentProps()} />}
      {component === "Orders" && <Orders {...getComponentProps()} />}
      {component === "Transaction" && <Transaction {...getComponentProps()} />}
      {component === "Contact" && <Contact {...getComponentProps()} />}
    </div>
  );
}
