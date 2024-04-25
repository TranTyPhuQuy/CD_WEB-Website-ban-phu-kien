import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import productApi from '../../../api/productApi';
import LoadingProducts from './components/LoadingProducts';

const useStyles = makeStyles(theme => ({
    root: {},

    left: { width: '250px' },
    right: { flex: '1 1 auto' }

}))


function ProductList(props) {
    const classes = useStyles();
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const repo = await productApi.getAll({ _page: 1, _limit: 10 });
                setProductList(repo);
                console.log({ repo });
            } catch (error) {
                console.log('Loi product list: ',error);
            }
            setLoading(false);
        })();
    }, []);

    return (
        <Box pt={4}>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0} />
                        left column
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0}> {loading ? <LoadingProducts/> : <Typography>Product List</Typography>}</Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ProductList;