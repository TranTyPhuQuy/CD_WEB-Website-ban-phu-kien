import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Typography } from "@mui/material";
import { BASEURLHOST, THUMBNAIL_PLACEHOLDER } from "../../../../constants";
import QuantityBtn from "../../../components/QuantityBtn/QuantityBtn";
import { Height } from "@mui/icons-material";
import { formatPrice } from "../../../../utils";
import { addToCart, setQuantity } from "../CartSlice";
import { useDispatch } from "react-redux";

CartItem.propTypes = {};

function CartItem({ minValue = 1, maxValue = 100, product, quan }) {
  // const thumbnailUrl = product.imageUrl
  // ? `${BASEURLHOST}${product.imageUrl?.url}`
  // : THUMBNAIL_PLACEHOLDER;
  const [quantity, setCount] = useState(quan);
  const dispatch = useDispatch();
  //   const dispatch = useDispatch();
  const handleIncrementCounter = () => {
    if (quantity < maxValue) {
      setCount((prevState) => prevState + 1);
      const action = setQuantity({
        id: product.id,
        quantity: quantity+1,
      });

      dispatch(action);
    }
  };

  const handleDecrementCounter = () => {
    if (quantity > minValue) {
      setCount((prevState) => prevState - 1);
      const action = setQuantity({
        id: product.id,
        quantity: quantity-1,
      });

      dispatch(action);
    }
  };
  return (
    // alt={product.productName}
    <Box sx={{ display: "flex", p: 1, justifyContent: "space-between" }}>
      <img
        src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
        width="100px"
        alt=""
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box width="400px">
          <Typography>{product.productName}</Typography>
          {/* <Typography sx={{ fontWeight: 'bold' }} color='#009900'>GIAO HÀNG NHANH</Typography> */}
          <Button sx={{ p: 0, minWidth: 0, marginTop: 4.125 }}>Xóa</Button>
        </Box>
        <Box>
          <p> {formatPrice(product.discountedPrice)}</p>
        </Box>
      </Box>
      <Box>
        <div className="btn-group_quantity">
          <button className="decrement-btn" onClick={handleDecrementCounter}>
            <span class="material-symbols-outlined">-</span>
          </button>
          <p>{quantity}</p>
          <button className="increment-btn" onClick={handleIncrementCounter}>
            <span class="material-symbols-outlined">+</span>
          </button>
        </div>
      </Box>
    </Box>
  );
}

export default CartItem;
