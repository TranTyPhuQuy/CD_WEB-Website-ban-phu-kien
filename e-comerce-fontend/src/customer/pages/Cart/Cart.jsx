import React from "react";
import { useSelector } from "react-redux";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CartItem from "./Components/CartItem";
import { cartSelector,cartTotalSelector } from "./Selectors";
import { formatPrice } from "../../../utils";

Cart.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: { padding: "30px 0px", backgroundColor: '#f4f4f4'},
  left: { width: "65%" },
  right: { width: "33%" },
}));
function Cart(props) {
  const classes = useStyles();
  const cart = useSelector(cartSelector);
  const cartTotal = useSelector(cartTotalSelector);

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
                    {formatPrice(cartTotal)}
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
                    {formatPrice(cartTotal)}
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
