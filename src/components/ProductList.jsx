import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      title: "Product 1",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Product 2",
      price: 150,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Product 3",
      price: 200,
      image: "https://via.placeholder.com/150",
    },
  ];

  

  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
