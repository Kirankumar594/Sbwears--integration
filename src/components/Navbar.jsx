import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RiTelegram2Line } from "react-icons/ri";
import logo from "../components/Assets/logo.png";
import Menu from "./Menu";
import Cart from "./Cart";
import Login from "./Login";  
import { useNavigate } from "react-router-dom";  

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSearchBar, setSearchBar] = useState(false); 

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
    setIsMenuOpen(false);
    setIsAccountOpen(false);
    setIsLoginOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsCartOpen(false);
    setIsAccountOpen(false);
    setIsLoginOpen(false);
  };

  const toggleAccount = () => {
    setIsAccountOpen((prev) => !prev);
    setIsMenuOpen(false);
    setIsCartOpen(false);
    setIsLoginOpen(false);
  };

  const toggleLogin = () => {
    setIsLoginOpen((prev) => !prev);
    setIsMenuOpen(false);
    setIsCartOpen(false);
    setIsAccountOpen(false);
  };
  const openSearch = () => {
    setSearchBar(true);
  }; 
  const [search, setSearch] = useState("");  
  const navigate = useNavigate(); 

  const handleSearch = (e) => {
    e.preventDefault(); 
    if (search.trim()) {
      setSearch('')
       navigate(`/category?search=${search}`);
    }
  };
  return (
    <div>
      <nav className="top-0 left-0 w-full shadow-sm bg-white">
        <div
          className={`flex justify-between items-center py-4 lg:py-6 md:py-6 w-full px-5 lg:px-14 md:14 
        ${isSearchBar ? "mb-10" : ""}
          `}
        >
          <div className="flex items-center gap-5 lg:mr-32 md:32">
            <div className="cursor-pointer" onClick={toggleMenu}>
              <IoMdMenu className="h-5 w-5" />
            </div>
            <p className="cursor-pointer ">
              <CiSearch className="h-5 w-5" onClick={openSearch} />
            </p>
            {isSearchBar && (
       <div className="absolute justify-between bg-white  lg:px-6 px-2 left-0 lg:left-52 top-0 w-full lg:w-4/6 rounded-lg md:mt-28 lg:mt-28 mt-20 flex flex-row border ">
       {/* <div className="absolute px-6 top-0 right-0 mt-28 flex flex-row border justify-center min-w-full"> */}
          <div className="flex flex-row w-1/2 items-center gap-2">
            <CiSearch className="h-5 w-5" />
            <form onSubmit={handleSearch}>
              <input
                className="focus:outline-none w-full py-3"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
              />
            </form>
          </div>
          <button
            className="text-xl font-bold text-gray-700 hover:text-gray-900"
            onClick={() => setSearchBar(false)}
          >
            <IoClose className="text-gray-500" />
          </button>
        </div>
      )}
            {/* {isSearchBar && (
              <div className="absolute px-6 top-0 right-0 mt-28 flex flex-row border justify-center min-w-full">
                <div className="flex flex-row w-1/2 items-center gap-2">
                  <CiSearch className="h-5 w-5" />
                  <form typeof="submit">
                    <input
                      className="focus:outline-none w-full py-3"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search..."
                    />
                  </form >
                </div>
                <button
                  className="text-xl font-bold text-gray-700 hover:text-gray-900"
                  onClick={() => setSearchBar(false)}
                >
                  <IoClose className="text-gray-500" />
                </button>
              </div>
            )} */}
          </div>
          <div className="flex flex-col justify-center items-center">
            <a href="/" className="flex flex-row justify-center items-center">
              <img className="size-16 mr-4" src={logo} alt="logo" />
              <p className="font-serif">SB WEARS</p>
            </a>
          </div>
          <div className="flex  relative  items-center gap-4 lg:gap-8 md:gap-8">
            <div
              className="hidden sm:block text-black cursor-pointer"
              onClick={toggleAccount}
            >
              <MdAccountCircle className="text-black h-6 w-6" />
            </div>

            {isAccountOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white shadow-lg border rounded-md z-50 w-48">
                <div className="flex flex-col gap-3 p-4">
                  <button className="text-left hover:bg-gray-100 px-2 py-1 rounded-md">
                    <a href="account">My Account</a>
                  </button>
                  <button
                    className="text-left border hover:bg-gray-100 px-2 py-1 rounded-md"
                    onClick={toggleLogin}
                  >
                    Login
                  </button>
                </div>
              </div>
            )}

            {isLoginOpen && <Login />}

            <a href="trackorder">
              <RiTelegram2Line className="hidden sm:block h-6 w-6" />
            </a>
            <a href="account">
              <FaRegHeart className="  h-5 w-5" />
            </a>
            <button
              className="relative flex items-center space-x-2  py-1 rounded-md"
              onClick={toggleCart}
            >
              <FiShoppingCart className="text-black h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transition-transform transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-black">Cart</h2>
          <button
            className="text-xl font-bold text-gray-700 hover:text-gray-900"
            onClick={toggleCart}
          >
            <IoClose className="text-gray-500" />
          </button>
        </div>
        <div className=" h-full">
          <Cart />
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "100%", maxWidth: "360px" }}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <MdAccountCircle className="h-8 w-8" />

            <span className="tracking-widest text-sm">MY ACCOUNT</span>
          </div>
          <button
            className="text-xl font-bold text-gray-700 hover:text-gray-900"
            onClick={toggleMenu}
          >
            <IoClose className="text-gray-500" />
          </button>
        </div>
        <div>
          <Menu />
        </div>
      </div>

      {(isCartOpen || isMenuOpen || isAccountOpen) && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={() => {
            setIsCartOpen(false);
            setIsMenuOpen(false);
            setIsAccountOpen(false);
            // setIsLoginOpen(false);
          }}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
