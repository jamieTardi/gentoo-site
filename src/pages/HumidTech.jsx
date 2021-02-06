import React, { useEffect } from 'react';
import { U300, AtmosSpeaker } from '../components/sub-pages/index';

const HumidTech = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<AtmosSpeaker />
			<U300 />
		</div>
	);
};

export default HumidTech;
