import React from 'react';

const Conformation = () => {
	return (
		<div className='conformation-container'>
			<h1>Thank you for you order</h1>
			<div className='review-cards-container'>
				<div className='conformation-card'>
					<h3>What happens now?</h3>
					<p>
						You will get a email with the full cost of your order, this will
						also have your itemised bill. The email sometimes gets sent to a
						promotions folder or occasionally spam. If you can not find the
						email please contact us and we can re send you a recipt and/or
						manually send your payment reference number.
					</p>
				</div>
				<div className='conformation-card'>
					<h3>Shipping</h3>
					<p>
						We aim to ship all items within 3 working days, once we have shipped
						the item we wil send you another email which will let you know the
						item as shipped and will have a tracking number from our courier
						service.
					</p>
				</div>
				<div className='conformation-card'>
					<h3>Further Questions</h3>
					<p>
						If you have any queries please feel free to send us a message via
						our contact form and we will get back to as soon as possible. You
						can also contact us via our facebook page, please make sure you have
						your order refrence number ready for us when you do.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Conformation;
