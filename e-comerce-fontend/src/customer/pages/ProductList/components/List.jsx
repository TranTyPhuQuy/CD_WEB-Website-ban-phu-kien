import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";
import Product from "./Item";

List.propTypes = {
  data: PropTypes.array,
};

List.defaultProps = {
  data: [],
};

function List({ data }) {
  return (
    <Box>
      {console.log("data" + data)}
      <Grid container>
        {data.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default List;
