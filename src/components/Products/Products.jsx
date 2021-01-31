import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

// const products = [
//     {id: 1, name: 'shoes', description: 'Running shoes', price:'$10', image: 'https://app.photobucket.com/search/379c5a36-19bd-4b44-a438-b965fce94e5e'},
//     {id: 2, name: 'shocks', description: 'indoor shocks', price:'$5', image: 'https://unsplash.com/photos/zi5vRoAP3WY'},
// ];


const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();
    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify ="center" spacing ={4}>
                {products.map((product) => (
                    <Grid item key= {product.id} xs= {12} sm= {6} md={4} lg={3}>
                        <Product product= {product} onAddToCart= {onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;



