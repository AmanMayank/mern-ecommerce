import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-xl font-bold">
            E-Shop
          </Link>
          <div>
            <Link to="/cart" className="text-white mx-4">
              Cart
            </Link>
            <Link to="/login" className="text-white mx-4">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
