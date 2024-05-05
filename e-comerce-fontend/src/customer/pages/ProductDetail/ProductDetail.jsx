import React from "react";
import { Box, Button, Container, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProductThumbnail from "./components/ProductThumbnail";
import useProductDetail from "../../../hooks/useProductDetail";
import { useMatch } from "react-router-dom";
import ProductInfo from "./components/ProductInfo";
import QuantityBtn from "../../components/QuantityBtn/QuantityBtn";
import ProductTabs from "./components/ProductTabs";
import "./ProductDetail.css";

const useStyles = makeStyles((theme) => ({
  root: { margin: "30px 0px" },
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
  const { product, loading } = useProductDetail(productId);
  if (loading) {
    return <Box>Loading</Box>;
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
              <ProductInfo product={product} />
              <QuantityBtn product={product}/>
            </Grid>
          </Grid>
        </Paper>
        <ProductTabs />
      </Container>
    </Box>
  );
}

export default ProductDetail;
