import React from "react";
import { Box, Container, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProductThumbnail from "./components/ProductThumbnail";
import useProductDetail from "../../../hooks/useProductDetail";
import { useMatch } from "react-router-dom";
import ProductInfo from "./components/ProductInfo";
import AddToCartForm from "./components/AddToCartForm";
import IncrementDecrementBtn from "./components/IncrementDecrementBtn";

const useStyles = makeStyles((theme) => ({
  root: {margin: '30px 0px'},
  left: {
    width: "400px",
    padding: "12px",
    borderRight: "1px solid grey",
  },
  right: { flex: "1 1 0", padding: "12px" },
}));

function ProductDetail() {
  const classes = useStyles();
  const match = useMatch("/products/:productId");
  const {
    params: { productId },
  } = match;
  const {product, loading} = useProductDetail(productId);
if(loading) {return <Box>Loading</Box>}
  const handleAddToCartSubmit = (formValues) => {
    console.log('Form submit', formValues);
  }
  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item className={classes.right}>
              <ProductInfo product={product}/>
              {/* <AddToCartForm onSubmit={handleAddToCartSubmit}/> */}
              <IncrementDecrementBtn/>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default ProductDetail;
