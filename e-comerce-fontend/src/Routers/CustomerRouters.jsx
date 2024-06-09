import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import ProductList from "../customer/pages/ProductList/ProductList";
import Header from "../customer/components/Header/Header";
import Footer from "../customer/components/Footer/Footer";
import ProductDetail from "../customer/pages/ProductDetail/ProductDetail";
import NotFound from "../customer/pages/NotFound/NotFound";
import Cart from "../customer/pages/Cart/Cart";
import Login from "../accounts/login/component/Login";
import ProductList1 from "../customer/pages/ProductList/ProductList1";

const CustomerRouters = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/login";

  return (
    <div>
      {!hideHeaderFooter && <Header/>}
      <Routes>
        <Route path="/" element={<HomePage />}>
          {" "}
        </Route>
        <Route path="/categories/:categoryName" element={<ProductList/>}>
          {" "}
        </Route>
        <Route path="/products/name/:productName" element={<ProductList1/>}>
          {" "}
        </Route>
        <Route path="/products/:productId" element={<ProductDetail/>}>
          {" "}
        </Route>
        <Route path="/cart" element={<Cart/>}>
          {" "}
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route component={NotFound} />
      </Routes>
      {!hideHeaderFooter && <Footer/>}
    </div>
  );
};

export default CustomerRouters;
