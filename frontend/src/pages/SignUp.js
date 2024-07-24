import React, { useState } from "react";
import { PiEyesFill, PiSmileyXEyesBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import imageTobase64 from "../helpers/imageTobase64";
import SummaryApi from "../common";
import { toast } from "react-toastify";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
  });

  const navigate = useNavigate();

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
    if (data.password === data.confirmPassword) {
      e.preventDefault();

      const { url, method } = SummaryApi.signUp;

      const dataResponse = await fetch(url, {
        method: method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const data1 = await dataResponse.json();

      if (data1.success) {
        toast.success(data1.message, {
          icon: {
            color: "red",
          },
          style: {
            backgroundColor: "white",
            color: "#79B259",
          },
          progressStyle: {
            background: "#79B259",
          },
        });

        navigate("/login");
      }

      if (data1.error) {
        toast.error(data1.message);
      }
      // console.log("data", data1);
    } else {
      console.log("Kindly enter the same password");
    }
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];
    const imagePic = await imageTobase64(file);
    setData((prev) => {
      return {
        ...prev,
        profilePic: imagePic,
      };
    });
  };

  return (
    <section id="signup">
      <div className="mx-auto container p-4 ">
        <div className="bg-white p-2 py-5 w-full max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto">
            <div>
              <img src={data.profilePic || "/assets/login.gif"} alt="login" />
            </div>
            <form>
              <label>
                <div className="text-xs bg-custom-green text-white p-2 inline-block whitespace-nowrap rounded-md hover:bg-custom-green-dark cursor-pointer text-center">
                  Upload image
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleUploadPic}
                />
              </label>
            </form>
          </div>

          <form className="p-6 mt-4" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Name : </label>
              <div className="bg-slate-200 p-2 my-2">
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  name="name"
                  value={data.name}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="grid">
              <label>Email : </label>
              <div className="bg-slate-200 p-2 my-2">
                <input
                  type="email"
                  required
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
                  required
                  placeholder="Enter password"
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
            </div>

            <div>
              <label>Confirm Password : </label>
              <div className="bg-slate-200 p-2 flex my-2">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  placeholder="Enter the same password"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <span>
                    {showConfirmPassword ? (
                      <PiEyesFill />
                    ) : (
                      <PiSmileyXEyesBold />
                    )}
                  </span>
                </div>
              </div>
            </div>

            <button className="px-2 py-2 w-full max-w-[150px] rounded-lg text-white bg-custom-green font-bold flex items-center justify-center hover:shadow-lg hover:bg-custom-green-dark mx-auto block mt-4">
              Signup
            </button>
          </form>

          <p className="my-4 pl-6">
            Already a member ?{" "}
            <Link
              to={"/login"}
              className="hover:text-red-600 hover:underline text-blue-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
