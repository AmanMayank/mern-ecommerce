import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="border rounded-lg p-4">
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover mb-4"
        />
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
      </Link>
    </div>
  );
};

export default Product;
