import React from "react";
import { Navbar, Home, SingleProduct, PageNotAvailable } from "./components/export";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {About, Cart, Contact} from "./pages/export";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/product/:id" element={<SingleProduct />}/>
          <Route path="/*" element={<PageNotAvailable />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
