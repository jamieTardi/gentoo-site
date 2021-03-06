import React, { useEffect } from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const Review = ({
	token,
	shippingCost,
	setShippingCost,
	vatPrice,
	totalCost,
	setTotalCost,
	cart,
}) => {
	const handleShippingCost = async () => {
		const shippingMethodsPrice = await token.shipping_methods[0].price.raw;
		let totalShippingCost = shippingMethodsPrice;
		let numberOfItems = cart.total_items;

		setShippingCost(totalShippingCost * numberOfItems);
		setTotalCost(+shippingCost + +totalCost);
	};
	useEffect(() => {
		handleShippingCost();
	}, []);

	return (
		<>
			<Typography variant='h6' gutterBottom>
				Order Summary
			</Typography>
			<List disablePadding>
				{token.live.line_items.map((product) => (
					<ListItem style={{ padding: '10px 0' }} key={product.name}>
						<ListItemText
							primary={product.name}
							secondary={`Quantity: ${product.quantity}`}
						/>
						<Typography variant='body2'>
							£{product.line_total.formatted}
						</Typography>
					</ListItem>
				))}

				<ListItem style={{ padding: '10px 0' }}>
					<div className='flex-list'>
						<div className='shipping-list'>
							<ListItemText primary='Shipping Cost' />
							<Typography variant='subtitle1' style={{ fontWeight: 700 }}>
								£{shippingCost}
							</Typography>
						</div>
						<div className='small-flex-list'>
							<div className='total-and-subtotal'>
								<ListItemText primary='Total without VAT' />
								<Typography variant='subtitle1' style={{ fontWeight: 700 }}>
									£{cart.subtotal.raw}
								</Typography>
							</div>
							<div className='total-and-subtotal'>
								<ListItemText primary='Total incl VAT' />
								<Typography variant='subtitle1' style={{ fontWeight: 700 }}>
									£{totalCost}
								</Typography>
							</div>
						</div>
					</div>
				</ListItem>
			</List>
		</>
	);
};

export default Review;
