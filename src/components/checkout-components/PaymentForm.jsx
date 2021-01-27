import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
	Elements,
	CardElement,
	ElementsConsumer,
} from '@stripe/react-stripe-js';
import { Typography, Button, Divider } from '@material-ui/core';
import { Review } from './index';

const PaymentForm = ({
	token,
	backStep,
	onCaptureCheckout,
	nextStep,
	shippingData,
}) => {
	const stripePromise = loadStripe(
		'pk_test_51IDW3cLRAZiErI19PadbgR3AMY12Fs894LWQSpkFcTVscpBAkugqM8mfhz203XFodgA74Gt1ux9BKLi9w63NTc9000303zPPJu',
	);
	//

	//
	const handleSubmit = async (event, elements, stripe) => {
		event.preventDefault();

		if (!stripe || !elements) return;

		const cardElement = elements.getElement(cardElement);

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: cardElement,
		});

		if (error) {
			console.log(error);
		} else {
			const orderData = {
				line_items: token.live.line_items,
				customer: {
					firstname: shippingData.firstName,
					lastname: shippingData.lastName,
					email: shippingData.email,
				},
				shipping: {
					name: 'Primary',
					street: shippingData.address1,
					town_city: shippingData.city,
					country_state: shippingData.shippingSubDivision,
					postal_zip_code: shippingData.zip,
					country: shippingData.shippingCountry,
				},
				fulfillment: {
					shipping_method: shippingData.shippingOption,
				},
				payment: {
					gateway: 'stripe',
					stripe: {
						payment_method_id: paymentMethod.id,
					},
				},
			};
			onCaptureCheckout(token.id, orderData);
			nextStep();
		}
	};
	return (
		<>
			<Review token={token} />
			<Divider />
			<Typography variant='h6' gutterBottom style={{ margin: '20px 0' }}>
				Payment Method
			</Typography>
			<Elements stripe={stripePromise}>
				<ElementsConsumer>
					{({ elements, stripe }) => (
						<form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
							<CardElement />
							<br />
							<br />
							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<Button variant='outlined' onClick={backStep}>
									Back
								</Button>
								<Button
									type='submit'
									variant='contained'
									disabled={!stripe}
									color='primary'>
									pay {token.live.subtotal.formatted_with_symbol}
								</Button>
							</div>
						</form>
					)}
				</ElementsConsumer>
			</Elements>
		</>
	);
};

export default PaymentForm;
