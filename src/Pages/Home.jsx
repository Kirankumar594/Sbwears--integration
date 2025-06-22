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
import axios from "axios";
// import SearchBar from '../components/SearchBar.jsx'

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState(null);
  console.log("user : " , user)
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
      setSearch("");
      // navigate(`/category?search=${search}`);
      navigate(`/productsList?search=${search}`);
    }
  };

  const userToken = localStorage.getItem("userToken");
  console.log("userToken : ", userToken);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem("userId");
        // const userId = "68554e45ca949721a71c9373";
        if (!userId) {
          throw new Error("User ID not found"); 
        }
        const response = await axios.get(
          `https://sbwears.com/api/users/user/${userId}`
        );
        const userData = response.data;
        setUser(userData);
        console.log("userData : ", userData);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="w-full h-full">
      <nav
        className={`fixed z-50 w-full px-5 lg:px-14 md:14 ${
          isScrolled ? "bg-white  " : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between py-2 lg:py-6 md:py-6">
          <div className="flex items-center gap-3 lg:gap-4 md:gap-4 text-tiny">
            {/* <div
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
            </div> */}
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
                <div className="flex flex-row items-center w-full gap-2">
                  <CiSearch
                    className={`h-5 w-5 ${
                      isScrolled ? "text-black " : "text-white"
                    }`}
                  />
                  <form onSubmit={handleSearch}>
                    <input
                      className={`focus:outline-none bg-transparent w-full py-3 ${
                        isScrolled ? "text-black" : "text-white"
                      }`}
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search..."
                    />
                  </form>
                </div>
                <button
                  className={`text-xl font-bold  ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                  onClick={() => setSearchBar(false)}
                >
                  <IoClose
                    className={`${isScrolled ? "text-gray-600" : "text-white"}`}
                  />
                </button>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center justify-center">
            <a href="/" className="flex flex-row items-center justify-center">
              {isScrolled ? (
                <img className="mr-4 size-16" src={logo} alt="logo" />
              ) : (
                <img className="mr-4 size-16" src={whiteLogo} alt="logo" />
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
          <div className="flex items-center gap-2 md:gap-8 lg:gap-8 text-tiny">
            <a
              href="/contact"
              className={`hidden lg:block md:block tracking-wide ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              CONTACT US
            </a>
            <div
              className="hidden text-black cursor-pointer sm:block"
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
              <div className="absolute z-50 w-48 mt-2 bg-white border rounded-md shadow-lg top-16 right-10">
                <div className="flex flex-col gap-3 p-4">
                  {userToken ? (
                    <>
                      <button className="px-2 py-1 text-left rounded-md hover:bg-gray-100">
                        <a href="/account">My Account</a>
                      </button>
                      <button
                        className="px-2 py-1 text-left border rounded-md hover:bg-gray-100"
                        onClick={() => {
                          localStorage.clear();
                          window.location.reload();
                        }}
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <button
                      className="px-2 py-1 text-left border rounded-md hover:bg-gray-100"
                      onClick={toggleLogin}
                    >
                      Login
                    </button>
                  )}
                </div>
              </div>
            )}

            {isLoginOpen && <Login setIsLoginOpen={setIsLoginOpen} />}
             {
              userToken ? (
                <div
                  className="relative inline-block cursor-pointer"
                  onClick={toggleCart}
                >
                  <FiShoppingCart
                    className={`w-6 h-6  ${
                      isScrolled ? "text-black" : "text-white"
                    }`}
                  />
                  {<span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {user?.cart?.length}
                  </span>}
                </div>
              ) : (
                <></>
              )
             }
          </div>
        </div>
        <div
          className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transition-transform transform ${
            isCartOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-black">Cart</h2>
            <button
              className="text-xl font-bold text-gray-700 hover:text-gray-900"
              onClick={toggleCart}
            >
              <IoClose className="text-gray-500" />
            </button>
          </div>
          <div className="h-full ">
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
              <MdAccountCircle className="w-8 h-8" />
              <a href="account">
                {" "}
                <span className="text-sm tracking-widest">MY ACCOUNT</span>
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
            className="fixed top-0 left-0 z-40 w-full h-full bg-black opacity-50"
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
      {/* <ShopByCategories /> */}
      {/* <ShopByCollections /> */}
    </div>
  );
};
export default Home;
