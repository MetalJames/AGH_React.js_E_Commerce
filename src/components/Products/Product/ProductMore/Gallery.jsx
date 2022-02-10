import React, { useState, useEffect } from 'react';
import { commerce } from '../../../../lib/commerce';
import { useParams } from 'react-router-dom';
import { Grid, Card, CardMedia, Button, CircularProgress } from '@material-ui/core';
import useStyles from './styles';
import { Link,useNavigate } from 'react-router-dom';

const Gallery = () => {
    const navigate = useNavigate();
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
    // console.log(params.id);

    useEffect(()=> {
        setIsLoading(true)
        fetchProducts(params)
                .then(() => {  
                    setIsLoading(false)
                })
        }, [params])

    const ItemNot = () => (
        <Grid className={classes.fullWidth}>
            <div className={classes.cardActions}>
            {isMobile ? 
            <>
                <Button style={{letterSpacing: '0'}} variant="outlined" type="button" onClick={() => navigate(-1)}>Back to Product</Button>
                <Button component={Link} style={{letterSpacing: '0'}} variant="outlined" type="button" to="/">Back to Home</Button>
            </> : <>
                <Button style={{letterSpacing: '0.02857em'}} variant="outlined" type="button" onClick={() => navigate(-1)}>Back to Product</Button>
                <Button component={Link} style={{letterSpacing: '0.02857em'}} variant="outlined" type="button" to="/">Back to Home</Button>
            </>
            }
            </div>
            <br />
            <br />
            {products.filter(product => product.id === params.id).map(myproduct=>(
                <Card className={classes.root} key={myproduct.id}>
                            {myproduct.assets.map(asset=>
                                <div key={asset.id}>
                                    <CardMedia className={classes.media} key={asset.id} image={asset.url} />
                                    <br />
                                </div>
                            )}
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

export default Gallery;
