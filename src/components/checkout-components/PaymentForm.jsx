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
	setShippingCost,
	shippingCost,
}) => {
	const stripePromise = loadStripe(
		'pk_live_51IDW3cLRAZiErI19KJmqjlQJQf0G0dG7vgpM17afcNyozxXBzUUSCl6WpRkINYeQPwc55w2J9sDpzSIkwpFryIRE00eRo7nEtd',
	);

	const handleSubmit = async (event, elements, stripe) => {
		event.preventDefault();

		if (!stripe || !elements) return;

		const cardElement = elements.getElement(CardElement);

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
			<Review
				token={token}
				shippingCost={shippingCost}
				setShippingCost={setShippingCost}
			/>
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
									pay £{+token.live.subtotal.formatted + +shippingCost}
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
