import { React, useEffect, useState } from "react";
import Hero from "../components/Hero.jsx";
import { useNavigate } from "react-router-dom";
import ShopByOccasions from "../components/ShopByOccasions.jsx";
import ShopByCategories from "../components/ShopByCategories.jsx";
import ShopByCollections from "../components/ShopByCollections.jsx";
import { FaRegHeart } from "react-icons/fa";
// import { VscAccount } from "react-icons/vsc";
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import logo from "../components/Assets/logo.png";
import whiteLogo from "../components/Assets/logo_white_exact.png";
import Menu from "../components/Menu.jsx";
import { IoClose } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import Cart from "../components/Cart.jsx";
import { FiShoppingCart } from "react-icons/fi";
import Login from "../components/Login.jsx";
// import SearchBar from '../components/SearchBar.jsx'

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

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
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isSearchBar, setSearchBar] = useState(false);
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
    <div className="h-full w-full">
      <nav
        className={`fixed z-50 w-full px-5 lg:px-14 md:14 ${
          isScrolled ? "bg-white  " : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center py-2 lg:py-6 md:py-6">
          <div className="flex gap-3 lg:gap-4 md:gap-4 items-center text-tiny">
            <div
              className="flex flex-row gap-1 cursor-pointer"
              onClick={toggleMenu}
            >
              <IoMdMenu
                className={`w-5 h-5 ${
                  isScrolled ? "text-grey " : "text-white"
                }`}
              />
              <div
                className={`hidden lg:block md:block text-tiny tracking-wide font-light ${
                  isScrolled ? "text-grey " : "text-white"
                }`}
              >
                MENU
              </div>
            </div>
            <div
              className="flex flex-row gap-1 cursor-pointer"
              onClick={openSearch}
            >
              <CiSearch
                className={`w-5 h-5 ${
                  isScrolled ? "text-grey " : "text-white"
                }`}
              />
              <div
                className={`hidden lg:block md:block text-tiny tracking-wide font-light lg:mr-24 md:mr-24 ${
                  isScrolled ? "text-grey " : "text-white"
                }`}
              >
                SEARCH
              </div>
            </div>
            {isSearchBar && (
              <div 
              className={`absolute lg:px-6 px-2 left-0 lg:left-52 top-0 w-full lg:w-4/6 rounded-lg  md:mt-28 lg:mt-28 mt-20 flex flex-row border ${
                isScrolled ? "bg-white" : "bg-transparent"
              } `}
            >
            
                <div className="flex flex-row w-full items-center gap-2">
                  <CiSearch className={`h-5 w-5 ${isScrolled ? "text-black ": "text-white"}`} />
                  <form onSubmit={handleSearch}> 
                    <input 
                      className={`focus:outline-none bg-transparent w-full py-3 ${isScrolled ? "text-black" : "text-white"}`}
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search..."
                    />
                  </form>
                </div>
                <button
                  className={`text-xl font-bold  ${isScrolled ? "text-black" : "text-white"}`}
                  onClick={() => setSearchBar(false)}
                >
                  <IoClose className={`${isScrolled ? "text-gray-600" : "text-white"}`}/>
                </button>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center items-center">
            <a href="/" className="flex flex-row justify-center items-center">
              {isScrolled ? (
                <img className="size-16 mr-4" src={logo} alt="logo" />
              ) : (
                <img className="size-16 mr-4" src={whiteLogo} alt="logo" />
              )}{" "}
              <p
                className={` font-serif ${
                  isScrolled ? "text-black" : "text-gray-300"
                }`}
              >
                SB WEARS
              </p>
            </a>
          </div>
          <div className="flex gap-2 md:gap-8 lg:gap-8  items-center  text-tiny">
            <a
              href="/contact"
              className={`hidden lg:block md:block tracking-wide ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              CONTACT US
            </a>
            <div
              className="hidden sm:block text-black cursor-pointer"
              onClick={toggleAccount}
            >
              <p
                className={`hidden lg:block md:block tracking-wide ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                MY ACCOUNT{" "}
              </p>
            </div>
            {isAccountOpen && (
              <div className="absolute top-16 right-10 mt-2 bg-white shadow-lg border rounded-md z-50 w-48">
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
            <div className="flex justify-center gap-3 lg:gap-8 md:gap-8">
              <a href="account">
                <FaRegHeart
                  className={`w-5 h-5  ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                />
              </a>
              <FiShoppingCart
                className={`w-5 h-5 cursor-pointer ${
                  isScrolled ? "text-black" : "text-white"
                }`}
                onClick={toggleCart}
              />
            </div>
          </div>
        </div>
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
              <a href="account">
                {" "}
                <span className="tracking-widest text-sm">MY ACCOUNT</span>
              </a>
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
      </nav>
      <Hero />
      <ShopByOccasions />
      <ShopByCategories />
      <ShopByCollections />
    </div>
  );
};
export default Home;
