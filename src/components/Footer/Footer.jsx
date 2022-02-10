import React from 'react';
import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.appBar}>
            <div className={classes.title}>© 2022 AGH inc</div>
        </div>
    )
};

export default Footer;
