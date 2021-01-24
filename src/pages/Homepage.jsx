import React from 'react';
import {
	HomeCarousel,
	MiddleOfHome,
	BottomContainer,
} from '../components/index';
const Homepage = () => {
	return (
		<div className='homepage-container'>
			<HomeCarousel />
			<MiddleOfHome />
			<BottomContainer />
		</div>
	);
};

export default Homepage;
