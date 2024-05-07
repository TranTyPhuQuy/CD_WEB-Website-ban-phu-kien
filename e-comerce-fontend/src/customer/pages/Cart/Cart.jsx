import React from "react";
import { useSelector } from "react-redux";
// import { cartItemsCountSelector, cartTotalSelector,cartSelector } from "./Selectors";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CartItem from "./Components/CartItem";
import { cartSelector } from "./Selectors";

Cart.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: { margin: "30px 0px" },
  left: { width: "65%" },
  right: { width: "33%" },
}));
function Cart(props) {
  const classes = useStyles();
  const cart = useSelector(cartSelector);
  return (
    <Box className={classes.root}>
      <Container>
        <Typography sx={{ fontWeight: 500, fontSize: "23px" }}>
          GIỎ HÀNG
        </Typography>
        <Grid container spacing={2}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              {cart.length === 0 ? (
                <Typography>Rong</Typography>
              ) : (
                  cart.map((cartItems) => (
                    <CartItem product={cartItems.product} quan={cartItems.quantity}/>
                  ))
              )}
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <Box sx={{ m: 0, p: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: "50px",
                  }}
                >
                  <Typography>Tạm tính</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    20.000.000 đ
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: "50px",
                  }}
                >
                  <Typography>Thành tiền</Typography>
                  <Typography
                    sx={{ fontWeight: 500 }}
                    variant="h5"
                    color="#FF0000"
                  >
                    20.000.000 đ
                  </Typography>
                </Box>
              </Box>
            </Paper>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ width: "100%", marginTop: "20px" }}
              size="large"
              // onClick={handleAddToCartSubmit}
            >
              ĐẶT HÀNG
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Cart;

// lỗi: Cannot access 'cartSelector' before initialization
// ReferenceError: Cannot access 'cartSelector' before initialization
