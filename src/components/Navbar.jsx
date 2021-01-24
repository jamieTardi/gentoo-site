import React from 'react';
import logo from '../assets/icons/logo-gentoo.svg';
import logoLight from '../assets/icons/logo-gentoo-light.svg';
import { ShoppingCart } from '@material-ui/icons';
import { IconButton, Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, setDarkMode }) => {
	return (
		<nav>
			<ul className='navbar'>
				<Link to='/'>
					<li>Home</li>
				</Link>
				<Link to='/about-us'>
					<li>About Us</li>
				</Link>
				<img src={darkMode ? logoLight : logo} alt='Gentoo Logo' />
				<Link to='/shophome'>
					<li>Shop</li>
				</Link>
				<li>Contact us</li>
			</ul>
			<div className='trolley'>
				<IconButton aria-label='Show Cart Items' color='secondary'>
					<Badge badgeContent='1' color='secondary'></Badge>
					<ShoppingCart />
				</IconButton>
				<label class='switch'>
					<input
						type='checkbox'
						onClick={() => {
							setDarkMode((prev) => !prev);
						}}
					/>
					<span class='slider round'></span>
				</label>
				{darkMode ? '🌙' : '☀️'}
			</div>
		</nav>
	);
};

export default Navbar;
