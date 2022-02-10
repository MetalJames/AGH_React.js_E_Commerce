import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/AGH_Favicon.png';
import useStyles from './styles';


const NavBar = ({ totalItems }) => {
    const classes = useStyles();
    const location=useLocation();
    const isMobile = window.innerWidth <= 500;

    return <div>
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
                    {isMobile ?
                    <>
                        <img src={logo} alt="AGH inc." height='50px' />
                    </>
                        :
                    <> 
                        <img src={logo} alt="AGH inc." height='25px' className={classes.image} /> <>Advanced Gaming Hardware</>
                    </>
                    }
                </Typography>
                <div className={classes.grow} />
                {(location.pathname !== '/cart' && location.pathname !== '/checkout') && (
                <div className={classes.button}>
                    <IconButton component={Link} to='/cart' aria-label="Show cart items" color='inherit'>
                        <Badge className={classes.appCart} badgeContent={totalItems} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>)}
            </Toolbar>
        </AppBar>
    </div>;
};

export default NavBar;
