import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import Carts from "./Cart/Carts"
import Routers from "../routes/Routers";
import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state)=>state.cartUi.cartIsVisible)
  return (
    <>
      <Header />
      {showCart && <Carts/>}
      <div>
        <Routers />
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
