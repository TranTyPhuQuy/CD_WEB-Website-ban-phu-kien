import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import ProductList from "../customer/pages/ProductList/ProductList";
import Header from "../customer/components/Header/Header";
import Footer from "../customer/components/Footer/Footer";
import ProductDetail from "../customer/pages/ProductDetail/ProductDetail";
import NotFound from "../customer/pages/NotFound/NotFound";
import Cart from "../customer/pages/Cart/Cart";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}>
          {" "}
        </Route>
        <Route path="/categories/:categoryName" element={<ProductList />}>
          {" "}
        </Route>
        <Route path="/products/name/:productName" element={<ProductList />}>
          {" "}
        </Route>
        <Route path="/products/:productId" element={<ProductDetail />}>
          {" "}
        </Route>
        <Route path="/cart" element={<Cart />}>
          {" "}
        </Route>
        <Route component={NotFound} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
