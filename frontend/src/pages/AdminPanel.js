import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserAstronaut } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";

function AdminPanel() {
  const user = useSelector((state) => state?.user?.user);
  return (
    <div className="min-h-[calc(100vh-120px)]  md:flex hidden">
      <aside className="bg-white min-h-full w-full max-w-60 customShadow">
        <div className="h-32 flex items-center justify-center flex-col">
          <div
            // onClick={() => setDropDown(!dropDown)}
            className="text-5xl cursor-pointer "
          >
            {user?.profilePic ? (
              <img
                src={user.profilePic}
                className="w-20 h-20 rounded-full"
                alt={user?.name}
              />
            ) : (
              <FaUserAstronaut />
            )}
          </div>
          <p className="capitalize text-lg font-semibold">{user?.name}</p>
          <p className="text-xs">{user?.role}</p>
        </div>

        <div>
          <nav className="flex flex-col justify-center items-center p-4">
            <Link
              to={"all-users"}
              className="px-2 py-1 hover:bg-slate-100 w-full text-center rounded hover:shadow-md"
            >
              {" "}
              All Users
            </Link>
            <Link
              className="px-2 py-1 hover:bg-slate-100 w-full text-center rounded hover:shadow-md"
              to={"all-products"}
            >
              {" "}
              Products
            </Link>
          </nav>
        </div>
      </aside>
      <main className="h-full w-full p-2">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminPanel;
