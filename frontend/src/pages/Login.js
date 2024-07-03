import React, { useContext, useState } from "react";
import { PiEyesFill, PiSmileyXEyesBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common";

import { toast } from "react-toastify";
import Context from "../context";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { fetchUserDetails } = useContext(Context);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { url, method } = SummaryApi.signIn;

    const dataResponse = await fetch(url, {
      method: method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const data1 = await dataResponse.json();

    if (data1.success) {
      toast.success(data1.message, {
        style: {
          backgroundColor: "white",
          color: "#79B259",
        },
        progressStyle: {
          background: "#79B259",
        },
      });

      fetchUserDetails();

      navigate("/");
    }

    if (data1.error) {
      toast.error(data1.message);
    }
  };

  console.log("data login", data);

  return (
    <section id="login">
      <div className="mx-auto container p-4 ">
        <div className="bg-white p-2 py-5 w-full max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto ">
            <img src="/assets/login.gif" alt="login" />
          </div>

          <form className="p-6 mt-4" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Email : </label>
              <div className="bg-slate-200 p-2 my-2">
                <input
                  type="email"
                  placeholder="user@email.com"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label>Password : </label>
              <div className="bg-slate-200 p-2 flex my-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span>
                    {showPassword ? <PiEyesFill /> : <PiSmileyXEyesBold />}
                  </span>
                </div>
              </div>

              <Link
                to={"/forgot-password"}
                className="block ml-auto w-fit hover:underline hover:text-red-600"
              >
                Forgot Password
              </Link>
            </div>

            <button className="px-2 py-2 w-full max-w-[150px] rounded-lg text-white bg-custom-green font-bold flex items-center justify-center hover:shadow-lg hover:bg-custom-green-dark mx-auto block mt-4">
              Login
            </button>
          </form>

          <p className="my-4 pl-6">
            Don't have account ?{" "}
            <Link
              to={"/sign-up"}
              className="hover:text-red-600 hover:underline text-blue-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
