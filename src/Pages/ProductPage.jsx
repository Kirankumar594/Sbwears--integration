import React, { useEffect, useState } from "react";
import { Products } from "../data/dummyData";
import ProductInfo from "../components/ProductInfo";
import CustomerReviews from "../components/CustomerReviews";
import AlsoLike from "../components/AlsoLike";
import RecentlyViewed from "../components/RecentlyViewed";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductPage() {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const { id } = useParams();
  console.log(id);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const getProductById = async () => {
    const res = await axios(
      `https://sbwears.com/api/admin/category/product/${id}`
    );
    console.log(res);
    setProduct(res.data.product);
  };

  useEffect(() => {
    getProductById();
  }, []);

  if (!product)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-12 h-12 border-t-2 border-b-2 rounded-full animate-spin border-buttonColor"></div>
      </div>
    );

    // const userId = "68554e45ca949721a71c9373";
  const handleAddToCart = async () => { 
    if(!selectedSize){
      alert("Please select size")
      return
    }
    const userId = localStorage.getItem("userId") 
    const cart = {
      userId,
      productId: id,
      quantity: 1,
      size: selectedSize,
    };
    try {
      const res = await axios.post(
        // "https://sbwears.com/api/admin/cart/add",
        "https://sbwears.com/api/admin/cart/add",
        cart
      );
      console.log("res : " , res)
      if (res.status === 200) alert("Product added to cart successfully");
    } catch (error) {
      console.log(error);
    }
  };
  console.log("product : " , product)
  return (
    <>
      <div className="container flex-col px-4 py-5 mx-auto mt-5 lg:flex lg:flex-row">
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {product.images.map((img, index) => (
              <img
                key={index}
                className="object-cover w-full h-auto rounded-lg"
                src={`https://sbwears.com/image/${img}`}
                alt={`product-${index + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>

        <div className="w-full mt-8 lg:w-1/3 lg:ml-8 lg:mt-0">
          <div className="lg:sticky lg:top-8">
            <h1
              className="mb-4 text-xl font-black"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></h1>

            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="w-4 h-4 text-ratingColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.431 8.2 1.174-5.91 5.737 1.396 8.124L12 18.897l-7.354 3.856 1.396-8.124-5.91-5.737 8.2-1.174L12 .587z" />
                </svg>
              ))}
              <span className="ml-2 text-xs text-gray-500">(1)</span>
            </div>

            <div className="flex items-center justify-between mb-4">
              <p className="text-xs">ProductId : {product._id}</p>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-lg font-normal line-through">
                Rs. {product.mrp}
              </span>
              <span className="text-lg font-normal">
                Rs. {product.offerPrice}
              </span>
              <span className="text-lg font-normal text-red-500">
                {product.discount}%
              </span>
              <span className="ml-4 text-xs text-gray-400">
                Inclusive Of All Taxes
              </span>
            </div>

            <div className="mb-6">
              <p className="mb-2 text-sm">Size:</p>
              <div className="flex flex-wrap gap-3">
                {product.availableSizes?.map((size) => (
                  <button
                    key={size}
                    className={`w-12 h-12 rounded-full border flex items-center justify-center text-sm transition-all duration-300
      ${
        selectedSize === size
          ? "bg-buttonColor text-white border-purple-custom"
          : "bg-white border-gray-300 text-buttonColor hover:border-buttonColor"
      }`}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              className="w-full py-4 mb-6 font-medium tracking-wider text-white transition-all duration-300 rounded-md bg-buttonColor hover:bg-opacity-90"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>

            {/* <div className="mb-6">
              <p className="mb-2 text-sm text-gray-700">Delivery For</p>
              <div className="flex overflow-hidden border border-gray-300 rounded-md">
                <input
                  type="text"
                  placeholder="Enter your Pincode"
                  className="flex-1 px-4 py-3 text-sm focus:outline-none"
                />
                <button className="px-6 font-medium text-buttonColor">
                  CHECK
                </button>
              </div>
            </div> */}

            <div className="space-y-4">
              <div className="flex items-center">
                <img
                  className="w-6 h-6"
                  src="https://cdn.shopify.com/s/files/1/0341/4805/7228/files/Group_357.svg?v=1714394429"
                  alt="Express Shipping"
                />
                <p className="ml-3 text-sm text-gray-600">Express Shipping</p>
              </div>

              <div className="flex items-center">
                <img
                  className="w-6 h-6"
                  src="https://cdn.shopify.com/s/files/1/0341/4805/7228/files/Icon_10.svg?v=1714394598"
                  alt="COD"
                />
                <p className="ml-3 text-sm text-gray-600">
                  Cash on Delivery Available
                </p>
              </div>

              <div className="flex items-start">
                <img
                  className="w-6 h-6 mt-1"
                  src="https://cdn.shopify.com/s/files/1/0341/4805/7228/files/Icon_11.svg?v=1714394430"
                  alt="Exchange"
                />
                <p className="ml-3 text-sm text-gray-600">
                  Easy 7 days exchanges: This item is only exchangeable for the
                  same or a different size, if available, and cannot be
                  returned.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <ProductInfo product={product} />
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 mx-auto">
        {/* <CustomerReviews />
        <AlsoLike />
        <RecentlyViewed /> */}
      </div>
    </>
  );
}
