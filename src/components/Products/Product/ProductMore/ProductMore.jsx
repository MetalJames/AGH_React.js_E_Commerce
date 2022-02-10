import React, { useState, useEffect } from 'react';
import { commerce } from '../../../../lib/commerce';
import { useParams } from 'react-router-dom';
import { Grid, Card, CardMedia, Typography, CircularProgress, CardActions, Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import { Link } from 'react-router-dom';

const MoreInfo = ({ onAddToCart }) => {

    const isMobile = window.innerWidth <= 500;

    const classes = useStyles();
    const [ products, setProducts ] = useState([ ]);
    const [ isLoading, setIsLoading ] = useState();

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        // console.log(data)
        setProducts(data);
    }

    const params = useParams();
    // console.log(params);

    useEffect(()=> {
        setIsLoading(true)
        fetchProducts()
                .then(() => {  
                    setIsLoading(false)
                })
        }, [])

    const ItemNot = () => (
        <Grid className={classes.fullWidth}>
            {products.filter(product => product.id === params.id).map(myproduct=>(
                <Card className={classes.root} key={myproduct.id}>
                    <CardMedia className={classes.media} image={myproduct.image.url}/>
                        <br />
                        <div className={classes.cardTitleMain}>
                            <Typography variant='h4' className={classes.bold} gutterBottom>{myproduct.name}</Typography>
                            <br />
                        </div>
                        <div className={classes.cardDescription}>
                            <Typography variant='h5'>Price: {myproduct.price.formatted_with_symbol}</Typography>
                            <Typography variant='h5' gutterBottom>InStock: {myproduct.inventory.available}</Typography>
                            <Typography variant='h5' gutterBottom>SKU: {myproduct.sku}</Typography>
                            <Typography dangerouslySetInnerHTML={{ __html:myproduct.description }} variant='h5' gutterBottom />
                        </div>
                        <CardActions disableSpacing className={classes.cardActions}>
                            <Button className={classes.test} component={ Link } to='/' variant='outlined'>Back</Button>
                            {isMobile ? 
                            <>
                                <Button aria-label='Add to Card' variant='contained' color='primary' onClick={() => onAddToCart(myproduct.id, 1)}>
                                    <AddShoppingCart />
                                </Button>
                            </> :
                            <>
                                <Button aria-label='Add to Card' variant='contained' color='primary' onClick={() => onAddToCart(myproduct.id, 1)}>
                                    Add to Cart
                                </Button>
                            </>
                            }
                            <Button className={classes.test} component={ Link } to={`${myproduct.id}`} variant='outlined'>Gallery</Button>
                        </CardActions>
                        <br />
                </Card>
            ))}
        </Grid>
    )

    const StillLoading = () => (
        <main className={classes.CircleCenter}>
            <div className={classes.spinner}>
                <CircularProgress />
            </div>
        </main>
    )
    
    return (
        <main className={classes.content}>
        <div className={classes.toolbar} />
            <div>
                { isLoading ? <StillLoading/> : <ItemNot/>}
            </div>
        </main>
    )
};

export default MoreInfo;
