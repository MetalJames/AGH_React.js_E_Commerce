import React, { useState, useEffect } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CssBaseline } from '@material-ui/core';
import { Divider, Button, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { commerce } from '../../../lib/commerce';
import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const steps = ['Shipping address', 'Payment detailes'];

const Checkout = ( { cart, onCaptureCheckout, order, error, handleEmptyCart }) => {
    const isMobile = window.innerWidth <= 500;
    const [activeStep, setActiveStep ] = useState(0);
    const [checkoutToken, setCheckoutToken ] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const [isFinished, setIsFinished] = useState(false);
    const classes = useStyles();
    // const navigate = useNavigate();

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});
                setCheckoutToken(token);
            } catch (error) {
                alert(error)
                // navigate('./');
            }
        }
        generateToken();
    }, [cart]);

    const Form = () => activeStep === 0  
        ? <AddressForm checkoutToken={checkoutToken} next={next} />
        : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} nextStep={nextStep} onCaptureCheckout={onCaptureCheckout} timeout={timeout}/>

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep+1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep-1);

    const next = (data) => {
        setShippingData(data);
        nextStep();
    }

    const timeout = () => {
        setTimeout(() => {
            setIsFinished(true);
        }, 3000)
    }

    let Confirmation = () => order.customer ? (
        <>
            <div>
                <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
                <Divider className={classes.divider} />
                <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
            </div>
            <br />
            <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
        </>
    ) : isFinished ? (
        <>
            <div>
                <Typography variant="h5" style={{textAlign: 'center'}}>Thank you for your purchase!</Typography>
                <Divider className={classes.divider} />
            </div>
            <br />
            <Button component={Link} variant="outlined" type="button" to="/" onClick={handleEmptyCart}>Back to home</Button>
        </>
    ) : (
        <div className={classes.spinner}>
        <CircularProgress />
        </div>
    );

    // if (error) {
    //     Confirmation = () => (
    //     <>
    //         <Typography variant="h5">Error: {error}</Typography>
    //         <br />
    //         <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
    //     </>
    //     );
    // }
    
    return (
        <>
        <CssBaseline />
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant='h4' aligh='center'>Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> :checkoutToken && <Form />}
                </Paper>
            </main>
            {isMobile ? 
            <>
                <div className={classes.toolbar} />
            </> :
            <></>
            }
        </>
    )
};

export default Checkout;
