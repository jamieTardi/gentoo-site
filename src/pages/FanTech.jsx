import React, { useEffect } from 'react';
import {
	BonecoF100,
	BonecoF120,
	BonecoF220,
	BonecoF230,
} from '../components/sub-pages/index';

const FanTech = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<BonecoF100 />
			<BonecoF120 />
			<BonecoF220 />
			<BonecoF230 />
		</div>
	);
};

export default FanTech;
