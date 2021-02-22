import React from 'react';
import amex from '../assets/icons/amex.svg';
import facebook from '../assets/icons/facebook.svg';
import mastercard from '../assets/icons/mastercard.svg';
import twitter from '../assets/icons/twitter.svg';
import visa from '../assets/icons/visa.svg';
import instagram from '../assets/icons/instagram.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='footer-container'>
			<div className='social-icons'>
				<a
					href='https://www.facebook.com/Gentooair'
					target='_blank'
					rel='noopener noreferrer'>
					<img src={facebook} alt='facebook' />
				</a>
				<a
					href='https://twitter.com/AirGentoo'
					target='_blank'
					rel='noopener noreferrer'>
					<img src={twitter} alt='twitter' />
				</a>
				<a
					href='https://www.instagram.com/gentooair/?hl=en'
					target='_blank'
					rel='noopener noreferrer'>
					<img src={instagram} alt='instagram' />
				</a>
			</div>
			<div className='footer-text'>
				<h4>#cleanair</h4>
				<h6>Website design by Tardi Digital Media</h6>
				<h6>
					<a href='https://www.jamietardi.co.uk'>www.jamietardi.co.uk</a>
				</h6>
				<h6>All website content is copyright of Gentoo Ltd </h6>
				<h6>130 Old street London</h6>
				<h6>EC1V 9BD</h6>
				<h6>Phone no: 01189 423 012</h6>
				<Link to='terms-and-conditions'>
					<p>Terms and Conditions</p>
				</Link>
				<a href='https://pdfhost.io/v/xMlfuJqL7_Privacy_policy_gentooairpdf.pdf'>
					Privacy Policy
				</a>
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
