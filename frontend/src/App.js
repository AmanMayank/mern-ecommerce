import React from "react";
// import Navbar from "./components/Navbar";
// import HomeScreen from "./screens/HomeScreen";
// import ProductScreen from "./screens/ProductScreen";
// import CartScreen from "./screens/CartScreen";
// import LoginScreen from "./screens/LoginScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    // <Navbar />
    // // <Router>
    // //   <Navbar />
    //   {/* <Switch> */}
    //   // <Route path="/" component={HomeScreen} exact />
    //   // <Route path="/product/:id" component={ProductScreen} />
    //   // <Route path="/cart" component={CartScreen} />
    //   // <Route path="/login" component={LoginScreen} />
    //   {/* </Switch> */}
    // // </Router>
    <>
      <Header />
      <main className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
