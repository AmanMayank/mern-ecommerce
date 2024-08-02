import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaUserAstronaut } from "react-icons/fa6";
import { FaOpencart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/slice/userSlice";

function Header() {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [dropDown, setDropDown] = useState(false);

  // console.log("user ==== ", user);

  const handleLogout = async () => {
    const { url, method } = SummaryApi.logout_user;
    const fetchData = await fetch(url, {
      method,
      credentials: "include",
    });

    const data = await fetchData.json();

    if (data.success) {
      dispatch(setUserDetails(null));
      toast.success(data.message, {
        style: {
          backgroundColor: "white",
          color: "#79B259",
        },
        progressStyle: {
          background: "#79B259",
        },
      });
    }

    navigate("/");

    if (data.error) {
      toast.error(data.message);
    }
  };

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
          <div className="relative flex justify-center">
            {user?._id && (
              <div
                onClick={() => setDropDown(!dropDown)}
                className="text-3xl md:cursor-pointer"
              >
                {user?.profilePic ? (
                  <img
                    src={user.profilePic}
                    className="w-10 h-10 rounded-full"
                    alt={user?.name}
                  />
                ) : (
                  <FaUserAstronaut />
                )}
              </div>
            )}
            {dropDown && (
              <div className="absolute bg-white bottom-0 top-11 h-fit shadow-lg rounded hidden md:block">
                <nav className="flex flex-col">
                  <Link
                    to={"admin-panel"}
                    className="whitespace-nowrap hover:bg-slate-200 p-4"
                    onClick={() => setDropDown(!dropDown)}
                  >
                    Admin Panel
                  </Link>
                  {user?.role === "ADMIN" && (
                    <Link
                      to={"/"}
                      className="whitespace-nowrap hover:bg-slate-200 p-4"
                    >
                      Something
                    </Link>
                  )}
                </nav>
              </div>
            )}
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
            {user?._id ? (
              <button
                onClick={handleLogout}
                className="px-2 py-2 rounded-lg text-white bg-custom-green font-bold flex items-center hover:bg-custom-green-dark"
              >
                Logout
              </button>
            ) : (
              <Link to={"/login"}>
                <button className="px-2 py-2 rounded-lg text-white bg-custom-green font-bold flex items-center hover:bg-custom-green-dark">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
