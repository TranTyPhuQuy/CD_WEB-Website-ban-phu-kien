import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    root:{},

    left:{width:'250px'},
    right:{flex: '1 1 auto'}

}))

function ProductList(props) {
    const classes = useStyles();
    return (
        <Box pt={4}>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                    <Paper elevation={0} />
                        left column
                    </Grid>
                    <Grid item className={classes.right}>
                    <Paper elevation={0} />
                    right column
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ProductList;