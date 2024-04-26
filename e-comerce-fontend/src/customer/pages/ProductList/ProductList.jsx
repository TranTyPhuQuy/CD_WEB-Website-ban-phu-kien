import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Pagination,
  Paper,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import productApi from "../../../api/productApi";
import LoadingProducts from "./components/LoadingProducts";
import List from "./components/List";

const useStyles = makeStyles((theme) => ({
  root: {},

  left: { width: "250px" },
  right: { flex: "1 1 0" },
}));

function ProductList(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
  });
  const [pagination, setPagination] = useState({
    limit: 10,
    total: 10,
    page:1
  });
  useEffect(() => {
    (async () => {
      try {
        const { data,pagination } = await productApi.getAll( filters );
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Loi product list: ", error);
      }
      setLoading(false);
    })();
  }, [filters]);
  const handlePanigation = (e,page) => {
    setFilters((prevFilters) => ({
        ... prevFilters,
        _page: page
    }));
  };
  return (
    <Box pt={4}>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0} />
            left column
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              {" "}
              {loading ? <LoadingProducts /> : <List data={productList} />}
              <Pagination 
              count={Math.ceil(pagination.total / pagination.limit)} 
              page={pagination.page} 
              variant="outlined" 
              shape="rounded" 
              onChange={handlePanigation}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductList;
