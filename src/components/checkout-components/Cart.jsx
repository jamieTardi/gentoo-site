import React from 'react';
import { EmptyCart, CartItems } from '../page-components/';

const Cart = ({ cart, handleEmptyCart }) => {
	return (
		<>
			{cart.total_items === 0 ? (
				<EmptyCart />
			) : (
				<CartItems cart={cart} handleEmptyCart={handleEmptyCart} />
			)}
		</>
	);
};

export default Cart;
