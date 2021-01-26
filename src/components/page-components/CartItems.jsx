import React from 'react';

const CartItems = ({ cart, handleEmptyCart }) => {
	console.log(cart);
	const productArr = cart.line_items;
	return (
		<div className='cart-items-container'>
			<div className='cart-banner'>
				<h1>Your Cart</h1>
			</div>
			<div className='cart-items'></div>
			<div className='summary'>
				<h1>Summary</h1>
				<ul>
					{productArr.map((product) => (
						<div key={product.name}>
							<li className='cart-list-item'>
								Product: <span>{product.name}</span>
							</li>
							<li className='cart-list-item'>
								Item Cost: <span>{product.price.formatted_with_symbol}</span>
							</li>
						</div>
					))}
					<li id='cart-subtotal'>
						Subtotal: <span>{cart.subtotal.formatted_with_symbol}</span>
					</li>
				</ul>
				<div className='checkout-btn-container'>
					<button className='checkout-btn'>Checkout</button>
				</div>
			</div>
			{productArr.map((product) => (
				<div className='main-cart-items-container' key={product.name}>
					<img src={product.media.source} alt={product.name} />
					<div className='product-text-container'>
						<div className='product-text'>
							<h6>
								Product Name: <span>{product.name}</span>
							</h6>
							<h6>
								Product Price:{' '}
								<span>{product.price.formatted_with_symbol}</span>
							</h6>
						</div>
						<button>Technical specs</button>
						<button className='remove-btn'>Remove Item</button>
						<div className='add-remove-items'>
							<button className='add-remove-btn remove'>-</button>
							<span>{product.quantity}</span>
							<button className='add-remove-btn add'>+</button>
						</div>
					</div>
				</div>
			))}
			<button
				onClick={() => {
					handleEmptyCart();
				}}>
				Empty Cart
			</button>
		</div>
	);
};

export default CartItems;
