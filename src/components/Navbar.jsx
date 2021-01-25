import React from 'react';
import logo from '../assets/icons/logo-gentoo.svg';
import logoLight from '../assets/icons/logo-gentoo-light.svg';
import { ShoppingCart } from '@material-ui/icons';
import { IconButton, Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { MiniNav } from '../components/page-components';
import Bars from '../assets/icons/bars.svg';

const Navbar = ({ darkMode, setDarkMode, hideMiniNav, setHideMiniNav }) => {
	return (
		<>
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
					<Link to='/contact-us'>
						<li>Contact us</li>
					</Link>
				</ul>
				<div className='trolley'>
					<IconButton aria-label='Show Cart Items' color='secondary'>
						<Badge badgeContent='1' color='secondary'></Badge>
						<ShoppingCart />
					</IconButton>
					<div className='darkmode-button'>
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
						<img
							src={Bars}
							alt='Bars'
							className='bars'
							onClick={() => {
								setHideMiniNav(false);
							}}
						/>
					</div>
				</div>
			</nav>
			<div className={hideMiniNav ? 'hide mobile-overlay' : 'mobile-overlay'}>
				<div className='mini-nav'>
					<MiniNav setHideMiniNav={setHideMiniNav} />
				</div>
			</div>
		</>
	);
};

export default Navbar;
