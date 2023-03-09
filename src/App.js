import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Produtos from "./Produtos";
import Header from "./Header";
import Footer from "./Footer";
import { GlobalContext, GlobalStorage } from "./Global";
import Cart from "./Cart";

const App = () => {
  return (
    <>
      <GlobalStorage>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="Cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </GlobalStorage>
    </>
  );
};

export default App;
