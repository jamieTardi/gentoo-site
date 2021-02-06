import React, { useState } from 'react';
import leaf from '../assets/icons/leaf.svg';
import energy from '../assets/icons/energy.svg';
import virus from '../assets/icons/virus.svg';
import purifier from '../assets/images/purifier.png';

import { HomePurifier } from '../components/sub-pages/index';

const MiddleOfHome = () => {
	const [toggleOverlay, setToggleOverlay] = useState(true);
	const [purifierMain, setPurifierMain] = useState(true);
	return (
		<div className='middle-container'>
			<HomePurifier />
			<div className='purifier-container'>
				<img src={purifier} alt='purifier' />
			</div>
			<div className='image-thumbnails thumbnail'>
				<div
					onMouseEnter={() => {
						setToggleOverlay(false);
					}}
					className='thumbnail-image'></div>
				<div
					onMouseLeave={() => setToggleOverlay(true)}
					className={toggleOverlay ? 'hide' : 'overlay'}>
					<button>Cooling</button>
				</div>
				<div className='thumbnail-image'></div>
				<div className='overlay2'>
					<button>Cooling</button>
				</div>
				<div className='thumbnail-image'></div>
				<div className='overlay3'>
					<button>Cooling</button>
				</div>
			</div>
		</div>
	);
};

export default MiddleOfHome;
