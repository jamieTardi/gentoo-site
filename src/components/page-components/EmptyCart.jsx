import React from 'react';
import EmptyCartImg from '../../assets/images/empty-cart.gif';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
	return (
		<div className='empty-cart-container'>
			<h2>Oh no! Looks like Your Cart is empty!</h2>
			<img src={EmptyCartImg} alt='Empty Cart' />
			<h4>Click below to continue shopping!</h4>
			<Link to='/shopHome'>
				<button>Back to the shop</button>
			</Link>
		</div>
	);
};

export default EmptyCart;
