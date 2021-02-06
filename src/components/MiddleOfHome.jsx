import React, { useState } from 'react';

import {
	HomePurifier,
	HomeFan,
	HomeHumid,
} from '../components/sub-pages/index';

const MiddleOfHome = () => {
	const [toggleOverlay, setToggleOverlay] = useState(true);
	const [purifierMain, setPurifierMain] = useState(true);
	const [fanMain, setFanMain] = useState(false);
	const [humidMain, setHumidMain] = useState(false);

	const fanToggle = () => {
		setPurifierMain(false);
		setFanMain(true);
	};
	return (
		<div className='middle-container'>
			{purifierMain ? (
				<HomePurifier purifierMain={purifierMain} />
			) : fanMain ? (
				<HomeFan />
			) : humidMain ? (
				<HomeHumid />
			) : (
				''
			)}

			<div className='image-thumbnails thumbnail'>
				<div
					onMouseEnter={() => {
						setToggleOverlay(false);
					}}
					className='thumbnail-image'></div>
				<div
					onMouseLeave={() => setToggleOverlay(true)}
					className={toggleOverlay ? 'hide' : 'overlay'}>
					<button
						onClick={() => {
							fanToggle();
						}}>
						Cooling
					</button>
				</div>
				<div className='thumbnail-image'></div>
				<div className='overlay2'>
					<button>Humidifiers</button>
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
