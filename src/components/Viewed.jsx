import React from "react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Green Solid Cotton Blend Straight...",
    price: 899,
    image:"https://www.libas.in/cdn/shop/files/R-2.jpg?v=1736393431&width=1080",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Libas Art Green Embroidered Geo...",
    price: 4079,
    image:"https://www.libas.in/cdn/shop/files/P1-4.jpg?v=1734692902&width=1080",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Libas Art Green Embroidered Geo...",
    price: 4079,
    image:"https://www.libas.in/cdn/shop/files/G-2.jpg?v=1736393350&width=1080",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Libas Art Green Embroidered Geo...",
    price: 4079,
    image:"https://www.libas.in/cdn/shop/files/P2-2.jpg?v=1734692834&width=1080",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "Libas Art Green Embroidered Geo...",
    price: 4079,
    image:"https://www.libas.in/cdn/shop/files/48015_2.jpg?v=1734696406&width=1080",
    sizes: ["S", "M", "L", "XL"],
  },
];
export default function Viewed() { 
  const [selectedSizes, setSelectedSizes] = useState({});
  const [quantities, setQuantities] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleQuantityChange = (productId, change) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + change),
    }));
  };
  return (
    <div className=" max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg p-5 relative">
        {/* <div className="min-h-screen bg-gray-50 p-4 md:p-8"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg   p-3 relative" 
              >  
                <div className="space-y-2 flex flex-col items-center">
                  <h2 className="text-sm font-medium text-gray-800">
                    {product.name}
                  </h2>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-24 w-20 object-cover object-center"
                  />
                  <div className="text-xs font-bold">₹{product.price}</div>

                  <div className="relative w-full">
                    <select
                      value={selectedSizes[product.id] || ""}
                      onChange={(e) =>
                        handleSizeChange(product.id, e.target.value)
                      }
                      className="w-full py-2 px-3  border  appearance-none bg-white"
                    >
                      <option value="" disabled>
                        Select Size
                      </option>
                      {product.sizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                    <div className="absolute  right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path
                          d="M1 1L6 6L11 1"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-center py-1 px-3   justify-between border w-full   ">
                    <button
                      onClick={() => handleQuantityChange(product.id, -1)}
                      className="w-8 h-8 flex items-center justify-center text-green-500 text-2xl"
                    >
                      -
                    </button>
                    <span className="text-lg">
                      {quantities[product.id] || 1}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(product.id, 1)}
                      className="w-8 h-8 flex items-center justify-center text-green-500 text-2xl"
                    >
                      +
                    </button>
                  </div>

                  <button className="w-full   text-white py-2  text-sm"  style={{ backgroundColor: "#1B2B65" }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}
