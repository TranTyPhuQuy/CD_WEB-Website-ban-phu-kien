import React from "react";
import PropTypes from "prop-types";
import { Box, Skeleton, Typography } from "@mui/material";
import { BASEURLHOST } from "../../../../constants";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const thumbnailUrl = product.thumbnail
    ? `${BASEURLHOST}${product.thumbnail?.url}`
    : "https://www.svgrepo.com/show/508699/landscape-placeholder.svg";
  return (
    <Box padding={1}>
      <img src={thumbnailUrl} alt={product.name} width="100%" />
      <Skeleton />
      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.salePrice)}
        </Box>
        <Box component="span" fontSize="13px" fontWeight="bold" mr={1} color="red">
          {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ""}
        </Box>
      </Typography>
    </Box>
  );
}

export default Product;
