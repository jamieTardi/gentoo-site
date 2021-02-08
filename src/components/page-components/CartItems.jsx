import React from 'react';
import { Link } from 'react-router-dom';

const CartItems = ({
	cart,
	handleEmptyCart,
	handleUpdateCartQty,
	vatPrice,
}) => {
	const productArr = cart.line_items;

	return (
		<>
			{productArr && (
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
										Item Cost:
										<span>£{vatPrice(product.price.raw)}</span>
									</li>
								</div>
							))}
							<li id='no-vat-price'>
								Price without VAT: <span>£{cart.subtotal.raw}</span>
							</li>
							<li id='cart-subtotal'>
								Subtotal incl VAT: <span>£{vatPrice(cart.subtotal.raw)}</span>
							</li>
						</ul>
						<div className='checkout-btn-container'>
							<button
								className='empty-btn'
								onClick={() => {
									handleEmptyCart();
								}}>
								Empty Cart
							</button>
							<Link to='/checkout'>
								<button className='checkout-btn'>Checkout</button>
							</Link>
						</div>
						<p className='shipping-small-text'>
							*Shipping is priced at £4.95 per item
							<br />
							For bulk purchases please contact us direct for the best price.
							<br />
							By making a purchase you are agreeing to our{' '}
							<Link to='/terms-and-conditions'>terms and conditions.</Link>
							<br />
							<a href='https://pdfhost.io/v/xMlfuJqL7_Privacy_policy_gentooairpdf.pdf'>
								Your privacy is import read our policy here
							</a>
						</p>
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
										Product Price:
										<span>£{vatPrice(product.price.raw)}</span>
									</h6>
								</div>

								<div className='add-remove-items'>
									<svg
										onClick={() => {
											handleUpdateCartQty(product.id, product.quantity - 1);
										}}
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'>
										<path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z' />
									</svg>
									<span className='product-quantity-update'>
										{product.quantity}
									</span>
									<svg
										onClick={() =>
											handleUpdateCartQty(product.id, product.quantity + 1)
										}
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'>
										<path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z' />
									</svg>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default CartItems;
