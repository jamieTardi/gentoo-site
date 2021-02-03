import React from 'react';
import Hero from '../assets/images/living-room.webp';

const AboutUs = () => {
	return (
		<div className='about-us-container'>
			<img src={Hero} alt='Living Room Background' />
			<div className='about-us-card'>
				<div className='about-us-title'>
					<h2>About Us</h2>
				</div>
				<div className='about-us-content'>
					<p>
						Gentoo was founded over a socially distanced coffee by Andy and
						Chris. Following a decade plus career in IT and distribution they
						decided that there was a gap in the market for an exciting and
						nimble retailer selling solutions that improve everyday life.
						<br />
						<br /> We focus on clever design-lead products, which are frequently
						funky, and we hope you agree are always interesting. <br />
						<br />
						We hope you enjoy our selection and if you have feedback or a
						challenge that we might be able to find a solution for, we’d love to
						hear from you: sales@gen-too.co.uk
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
