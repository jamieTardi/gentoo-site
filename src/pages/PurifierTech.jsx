import React, { useEffect } from 'react';
import {
	WinixZero,
	WinixZeroN,
	WinixZeroPro,
} from '../components/sub-pages/index';

const PurifierTech = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<WinixZero />
			<WinixZeroN />
			<WinixZeroPro />
		</div>
	);
};

export default PurifierTech;
