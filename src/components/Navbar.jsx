import React from 'react';
import logo from '../assets/icons/logo-gentoo.svg';
import logoLight from '../assets/icons/logo-gentoo-light.svg';
import { ShoppingCart } from '@material-ui/icons';
import { IconButton, Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { MiniNav } from '../components/page-components';
import Bars from '../assets/icons/bars.svg';

const Navbar = ({
	darkMode,
	setDarkMode,
	hideMiniNav,
	setHideMiniNav,
	cart,
}) => {
	return (
		<>
			<nav>
				<ul className='navbar'>
					<Link to='/'>
						<li className='nav-link'>Home</li>
					</Link>
					<Link to='/about-us'>
						<li className='nav-link'>About Us</li>
					</Link>

					<Link className='logo-container-small' to='/'>
						<img src={darkMode ? logoLight : logo} alt='Gentoo Logo' />
					</Link>

					<Link to='/shophome'>
						<li className='nav-link'>Shop</li>
					</Link>
					<Link to='/contact-us'>
						<li className='nav-link'>Contact us</li>
					</Link>
				</ul>
				<div className='trolley'>
					<Link to='/cart'>
						<IconButton aria-label='Show Cart Items' color='secondary'>
							<Badge
								badgeContent={cart ? cart.total_items : ''}
								color='secondary'></Badge>
							<ShoppingCart />
						</IconButton>
					</Link>
					<div className='darkmode-button'>
						<label className='switch'>
							<input
								type='checkbox'
								onClick={() => {
									setDarkMode((prev) => !prev);
								}}
							/>
							<span className='slider round'></span>
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
					<MiniNav setHideMiniNav={setHideMiniNav} darkMode={darkMode} />
				</div>
			</div>
		</>
	);
};

export default Navbar;
