import { Box } from  '@mui/material';
import { BASEURLHOST, THUMBNAIL_PLACEHOLDER } from "../../../../constants";
import PropTypes from 'prop-types';
import React from 'react';

ProductThumbnail.propTypes = {
  product: PropTypes.object,
};

function ProductThumbnail({ product }) {
  const thumbnailUrl = product.thumbnail ? `${BASEURLHOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;
  return (
    <Box>
      <img src={thumbnailUrl} alt={product.name} width="100%" />
    </Box>
  );
}

export default ProductThumbnail;
