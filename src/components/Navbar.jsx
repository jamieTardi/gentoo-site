import React from 'react';
import logo from '../assets/icons/logo-gentoo.svg';
import { ShoppingCart } from '@material-ui/icons';
import { IconButton, Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<ul className='navbar'>
				<Link to='/'>
					<li>Home</li>
				</Link>
				<li>About Us</li>
				<img src={logo} alt='Gentoo Logo' />
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
			</div>
		</nav>
	);
};

export default Navbar;
