import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaUserAstronaut } from "react-icons/fa6";
import { FaOpencart } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="h-16 shadow-md bg-white ">
      <div className="container mx-auto h-full flex items-center justify-between">
        <div className="">
          <Link to={"/"}>
            <img
              className="w-[90px] h-[50px]"
              src="/assets/shoplogo.svg"
              alt="logo"
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-4">
          <input
            type="text"
            placeholder="search product here..."
            className="w-full outline-none "
          />
          <div className="text-lg w-[50px] h-8 flex items-center justify-center rounded-r-full">
            <CiSearch />
          </div>
        </div>

        <div className="flex items-center gap-7 justify-between mr-2">
          <div className="text-3xl cursor-pointer">
            <FaUserAstronaut />
          </div>
          <div className="text-3xl cursor-pointer relative">
            <span>
              <FaOpencart />
            </span>
            <div className="absolute bottom-0 right-0">
              <p className="text-xs">0</p>
            </div>
          </div>

          <div>
            <Link to={"/login"}>
              <button className="px-2 py-2 rounded-lg text-white bg-custom-green font-bold flex items-center hover:bg-custom-green-dark">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
