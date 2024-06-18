import React from "react";
import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProductThumbnail from "./Components/ProductThumbnail";
import useProductDetail from "../../../hooks/useProductDetail";
import { Link, useMatch } from "react-router-dom";
import ProductInfo from "./Components/ProductInfo";
import ProductTabs from "./Components/ProductTabs";
import "./ProductDetail.css";
import AddToCartBtn from "../../components/AddToCartBtn/AddToCartBtn";

const useStyles = makeStyles((theme) => ({
  root: { padding: "30px 0px", backgroundColor: "#f4f4f4" },
  left: {
    width: "400px",
    padding: "12px",
    borderRight: "1px solid grey",
  },
  right: { flex: "1 1 0", padding: "12px" },
  breadcrumb: { marginBottom: "20px" },
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
        <Box className={classes.breadcrumb}>
          <Breadcrumbs maxItems={3} aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="#">
              Trang chủ
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Chi tiết sản phẩm
            </Link>
            <Link underline="hover" color="inherit" href="#">
              {product.productName}
            </Link>
          </Breadcrumbs>
        </Box>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item className={classes.right}>
              <ProductInfo product={product} />
              <AddToCartBtn product={product} />
            </Grid>
          </Grid>
        </Paper>
        <ProductTabs />
      </Container>
    </Box>
  );
}

export default ProductDetail;
