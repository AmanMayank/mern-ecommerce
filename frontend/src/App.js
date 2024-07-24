import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SummaryApi from "./common";
import Context from "./context";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/slice/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const fetchUserDetails = async () => {
    const { url, method } = SummaryApi.current_user;
    const dataResponse = await fetch(url, {
      method,
      credentials: "include",
    });

    const data = await dataResponse.json();
    if (data.success) {
      dispatch(setUserDetails(data.data));
    }
    // console.log(dataResponse, data);
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <>
      <Context.Provider value={{ fetchUserDetails }}>
        <ToastContainer />
        <Header />
        <main className="min-h-[calc(100vh-120px)]">
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
};

export default App;
