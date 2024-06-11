import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/Authentication/SignUp";
import SignIn from "./components/Authentication/SignIn";
import Products from "../src/components/Products/Products";
import ProductDetails from "./components/Products/ProductDetails";
import Cart from "./components/Products/Cart";
import Google from "./components/Authentication/Google";
import PrivateRoute from "./components/common/PrivateRoute/PrivateRoute";
import CreateProduct from "./components/Products/CreateProduct";
import CreateCatagory from "./components/Catagory/CreateCatagory";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products-details" element={<ProductDetails />} />
        <Route path="/google" element={<Google />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/create-catagory" element={<CreateCatagory />} />
        <Route element= {<PrivateRoute/>}>
            
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
