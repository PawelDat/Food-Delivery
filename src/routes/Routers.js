import React from "react";
import {Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home'
import AllFoods from '../pages/AllFoods'
import FoodDetails from '../pages/FoodDetails'
import Contact from '../pages/Contact'
import Cart from '../pages/Cart'
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/foods" element={<AllFoods/>}/>
      <Route path="/foods/:id" element={<FoodDetails/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  );
};

export default Routers;
