import React, { useEffect, useState } from 'react';
import { commerce } from '../../lib/commerce';
import { AddressForm, PaymentForm } from './index';

const Checkout = ({ cart, setCheckoutToken, handleCaptureCheckout }) => {
	const [activeStep, setActiveStep] = useState(0);
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

	useEffect(() => {
		generateCheckoutToken();
	}, [cart]);

	return <div>{activeStep === 0 ? <AddressForm /> : <PaymentForm />}</div>;
};

export default Checkout;
