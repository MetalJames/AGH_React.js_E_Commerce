import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {

    const classes = useStyles();

return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.image.url} title={product.name} />
        <CardContent>
                <div className={classes.cardContent}>
                <Typography variant='h5' gutterBottom>{product.name}</Typography>
                <Typography variant='h5'>{product.price.formatted_with_symbol}</Typography>
                </div>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
            <Button className={classes.test} component={ Link } to={`${product.id}`} variant='outlined'>More...</Button>
            <Button aria-label='Add to Card' variant='contained' color='primary' onClick={() => onAddToCart(product.id, 1)}>
                Add to Cart
            </Button>
        </CardActions>
    </Card>
)
};

export default Product;
