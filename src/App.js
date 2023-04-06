import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/pages/Home";
import Navbar from "./Components/layouts/Navbar.jsx";
import AllProducts from "./Components/pages/AllProducts";
import SingleProduct from "./Components/pages/SingleProduct";
import Cart from "./Components/pages/Cart";
import Login from "./Components/pages/Login";
import Register from "./Components/pages/Register";
import Payment from "./Components/pages/Payment";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/products" element={<AllProducts />} />
        <Route exact path="/products" element={<AllProducts />} />
        <Route exact path="/product/:id" element={<SingleProduct />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
