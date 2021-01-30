import React, { useEffect, useState } from 'react';
import { commerce } from '../../lib/commerce';
import { AddressForm, PaymentForm, Conformation } from './index';
import {
	Paper,
	Stepper,
	Step,
	StepLabel,
	Typography,
	CircularProgress,
	Divider,
	Button,
} from '@material-ui/core';
import useStyles from './styles';

const Checkout = ({
	cart,
	setCheckoutToken,
	handleCaptureCheckout,
	checkoutToken,
	refreshCart,
	order,
	shippingCost,
	setShippingCost,
}) => {
	const [activeStep, setActiveStep] = useState(0);
	const [shippingData, setShippingData] = useState({});
	const classes = useStyles();
	//Step selection
	const steps = ['Shipping Address', 'Payment Details'];

	const generateCheckoutToken = async () => {
		try {
			const token = await commerce.checkout.generateToken(cart.id, {
				type: 'cart',
			});
			setCheckoutToken(token);
		} catch (e) {
			console.log(e);
		}
	};

	const Form = () =>
		activeStep === 0 ? (
			<AddressForm checkoutToken={checkoutToken} next={next} />
		) : (
			<PaymentForm
				shippingData={shippingData}
				token={checkoutToken}
				backStep={backStep}
				onCaptureCheckout={handleCaptureCheckout}
				nextStep={nextStep}
				shippingCost={shippingCost}
				setShippingCost={setShippingCost}
			/>
		);

	const nextStep = () => setActiveStep((prev) => ++prev);
	const backStep = () => setActiveStep((prev) => --prev);

	const next = (data) => {
		setShippingData(data);
		nextStep();
	};

	useEffect(() => {
		generateCheckoutToken();
	}, [cart]);

	return (
		<>
			<div className={classes.toolbar} />
			<main className={classes.layout}>
				<Paper className={classes.paper}>
					<Typography variant='h4' align='center'>
						Checkout
					</Typography>
					<Stepper activeStep={activeStep} className={classes.stepper}>
						{steps.map((step) => (
							<Step key={step}>
								<StepLabel>{step}</StepLabel>
							</Step>
						))}
					</Stepper>
					{activeStep === steps.length ? (
						<Conformation refreshCart={refreshCart} />
					) : (
						checkoutToken && <Form />
					)}
				</Paper>
			</main>
		</>
	);
};

export default Checkout;
