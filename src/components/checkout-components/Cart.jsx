import React from 'react';
import { EmptyCart, CartItems } from '../page-components/';

const Cart = ({ cart, handleEmptyCart, handleUpdateCartQty, vatPrice }) => {
	return (
		<>
			{cart.total_items === 0 ? (
				<EmptyCart />
			) : (
				<CartItems
					cart={cart}
					handleEmptyCart={handleEmptyCart}
					handleUpdateCartQty={handleUpdateCartQty}
					vatPrice={vatPrice}
				/>
			)}
		</>
	);
};

export default Cart;
