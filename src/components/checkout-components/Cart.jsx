import React from 'react';
import { EmptyCart, CartItems } from '../page-components/';

const Cart = ({ cart, handleEmptyCart, handleUpdateCartQty }) => {
	return (
		<>
			{cart.total_items === 0 ? (
				<EmptyCart />
			) : (
				<CartItems
					cart={cart}
					handleEmptyCart={handleEmptyCart}
					handleUpdateCartQty={handleUpdateCartQty}
				/>
			)}
		</>
	);
};

export default Cart;
