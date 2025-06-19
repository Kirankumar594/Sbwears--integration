
import React, { useEffect, useState } from "react";
import { Products } from "../data/dummyData";
import ProductInfo from "../components/ProductInfo";
import CustomerReviews from "../components/CustomerReviews";
import AlsoLike from "../components/AlsoLike";
import RecentlyViewed from "../components/RecentlyViewed";

export default function ProductPage() {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    const selectedProductId = localStorage.getItem("selectedProductId");
    const selectedProduct = Products[selectedProductId - 1];
    setProduct(selectedProduct);
  }, []);

  if (!product) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-buttonColor"></div>
    </div>
  );

  return (
    <>
      <div className="container mx-auto px-4 py-5 lg:flex lg:flex-row flex-col mt-5">

        <div className="lg:w-2/3 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.allImages.map((img, index) => (
              <img 
                key={index}
                className="w-full h-auto object-cover rounded-lg" 
                src={img} 
                alt={`product-${index + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>


        <div className="lg:w-1/3 w-full lg:ml-8 mt-8 lg:mt-0">
          <div className="lg:sticky lg:top-8">
            <h1 className="text-xl font-black mb-4">{product.description}</h1>
            

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
              <span className="ml-2 text-gray-500 text-xs">(1)</span>
            </div>


            <div className="flex justify-between items-center mb-4">
              <p className="text-xs">Sku: 49199A-XS</p>
            </div>
 
            <div className="flex items-center flex-wrap mb-6">
              <span className="text-lg font-semibold">{product.priceAfterDiscount}</span>
              <span className="ml-4 text-gray-400 text-xs">Inclusive Of All Taxes</span>
            </div>

             
            <div className="mb-6">
              <p className="text-sm mb-2">Size:</p>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
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


            <button className="w-full bg-buttonColor text-white py-4 rounded-md font-medium tracking-wider hover:bg-opacity-90 transition-all duration-300 mb-6">
              ADD TO CART
            </button>


            <div className="mb-6">
              <p className="text-sm text-gray-700 mb-2">Delivery For</p>
              <div className="flex border border-gray-300 rounded-md overflow-hidden">
                <input
                  type="text"
                  placeholder="Enter your Pincode"
                  className="flex-1 px-4 py-3 text-sm focus:outline-none"
                />
                <button className="px-6 text-buttonColor font-medium">CHECK</button>
              </div>
            </div>


            <div className="space-y-4">
              <div className="flex items-center">
                <img
                  className="h-6 w-6"
                  src="https://cdn.shopify.com/s/files/1/0341/4805/7228/files/Group_357.svg?v=1714394429"
                  alt="Express Shipping"
                />
                <p className="ml-3 text-sm text-gray-600">Express Shipping</p>
              </div>
              
              <div className="flex items-center">
                <img
                  className="h-6 w-6"
                  src="https://cdn.shopify.com/s/files/1/0341/4805/7228/files/Icon_10.svg?v=1714394598"
                  alt="COD"
                />
                <p className="ml-3 text-sm text-gray-600">Cash on Delivery Available</p>
              </div>
              
              <div className="flex items-start">
                <img
                  className="h-6 w-6 mt-1"
                  src="https://cdn.shopify.com/s/files/1/0341/4805/7228/files/Icon_11.svg?v=1714394430"
                  alt="Exchange"
                />
                <p className="ml-3 text-sm text-gray-600">
                  Easy 7 days exchanges: This item is only exchangeable for the same
                  or a different size, if available, and cannot be returned.
                </p>
              </div>
            </div>


            <div className="mt-8">
              <ProductInfo />
            </div>
          </div>
        </div>
      </div>


      <div className="container mx-auto px-4">
        <CustomerReviews />
        <AlsoLike />
        <RecentlyViewed />
      </div>
    </>
  );
}