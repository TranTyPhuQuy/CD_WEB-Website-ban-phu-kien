import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

ProductDetail.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: "400px",
    padding: "12px",
    borderRight: '1px solid grey'
  },
  right: { flex: "1 1 0", padding: "12px" },
}));
function ProductDetail(props) {
  const classes = useStyles();
  return (
    <Box>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              Thumbnail
            </Grid>
            <Grid item className={classes.right}>
              Product infor
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default ProductDetail;
