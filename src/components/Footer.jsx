import React from 'react';
import amex from '../assets/icons/amex.svg';
import facebook from '../assets/icons/facebook.svg';
import mastercard from '../assets/icons/mastercard.svg';
import twitter from '../assets/icons/twitter.svg';
import visa from '../assets/icons/visa.svg';
import instagram from '../assets/icons/instagram.svg';

const Footer = () => {
	return (
		<div className='footer-container'>
			<div className='social-icons'>
				<img src={facebook} alt='facebook' />
				<img src={twitter} alt='twitter' />
				<img src={instagram} alt='instagram' />
			</div>
			<div className='footer-text'>
				<h4>#cleanair</h4>
				<h6>
					Website design by Tardi Digital Media
					<br /> <a href='https://www.jamietardi.co.uk'>www.jamietardi.co.uk</a>
					<br /> All website content is copyright of Gentoo Ltd.
					<br /> 130 Old street
					<br /> London , <br />
					EC1V 9BD
				</h6>
			</div>
			<div className='payment-icons'>
				<img src={visa} alt='visa' />
				<img src={mastercard} alt='mastercard' />
				<img src={amex} alt='amex' />
			</div>
		</div>
	);
};

export default Footer;
