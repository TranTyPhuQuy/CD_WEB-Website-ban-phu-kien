import React from "react";
import { useSelector } from "react-redux";
import { cartTotalSelector } from "./Selectors";

Cart.propTypes = {};

function Cart(props) {
  const cartTotal = useSelector(cartTotalSelector);

  return <div>Cart Feature {cartTotal}</div>;
}

export default Cart;
