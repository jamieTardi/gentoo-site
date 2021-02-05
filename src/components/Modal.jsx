import React from 'react';
import { Link } from 'react-router-dom';

const Modal = ({ hideModal, setHideModal }) => {
	return (
		<div className={hideModal ? 'hide modal-container' : 'modal-container'}>
			<div className='modal-card'>
				<h3>Item successfully added to cart!</h3>
				<p>
					If you would like to continue shopping press continue, or if you would
					like to head to the checkout Click on head to check out.
				</p>
				<div className='modal-btns'>
					<button
						onClick={() => {
							setHideModal(true);
						}}>
						Continue Shopping
					</button>
					<Link to='/cart'>
						<button
							onClick={() => {
								setHideModal(true);
							}}>
							Go to cart
						</button>
					</Link>
				</div>
				<svg
					onClick={() => {
						setHideModal(true);
					}}
					className='modal-close'
					width='20'
					height='20'
					viewBox='0 0 40 40'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<g clip-path='url(#clip0)'>
						<path
							d='M40 33.6467L26.1417 19.965L39.8083 6.16167L33.6467 0L19.96 13.8633L6.11 0.191667L0 6.30167L13.8683 20.035L0.191667 33.89L6.30167 40L20.03 26.1367L33.8383 39.8083L40 33.6467Z'
							fill='black'
						/>
					</g>
					<defs>
						<clipPath id='clip0'>
							<rect width='40' height='40' fill='white' />
						</clipPath>
					</defs>
				</svg>
			</div>
		</div>
	);
};

export default Modal;
