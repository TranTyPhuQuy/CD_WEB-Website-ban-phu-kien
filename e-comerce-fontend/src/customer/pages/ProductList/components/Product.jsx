import React from "react";
import PropTypes from "prop-types";
import { Box, Skeleton, Typography } from "@mui/material";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  return (
    <Box padding={1}>
      <Skeleton variant="rectangular" width="100%" height={118} />
      <Skeleton />
      <Typography variant="body2">{product.name}</Typography>
    </Box>
  );
}

export default Product;
