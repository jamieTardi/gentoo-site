import React, { useState } from 'react';

import {
	HomePurifier,
	HomeFan,
	HomeHumid,
} from '../components/sub-pages/index';

const MiddleOfHome = () => {
	const [toggleOverlay, setToggleOverlay] = useState(true);
	const [toggleHumidOverlay, setToggleHumidOverlay] = useState(true);
	const [togglePurifierOverlay, setTogglePurifierOverlay] = useState(true);
	const [purifierMain, setPurifierMain] = useState(true);
	const [fanMain, setFanMain] = useState(false);
	const [humidMain, setHumidMain] = useState(false);

	//Toggle functions for the on click event on thumbnails
	const fanToggle = () => {
		setPurifierMain(false);
		setFanMain(true);
		setHumidMain(false);
	};

	const humidToggle = () => {
		setPurifierMain(false);
		setFanMain(false);
		setHumidMain(true);
	};

	const purifierToggle = () => {
		setPurifierMain(true);
		setFanMain(false);
		setHumidMain(false);
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
				<div
					className='thumbnail-image thumbnail2'
					onMouseEnter={() => {
						setToggleHumidOverlay(false);
					}}></div>
				<div
					className={toggleHumidOverlay ? 'hide' : 'overlay2'}
					onMouseLeave={() => {
						setToggleHumidOverlay(true);
					}}>
					<button
						onClick={() => {
							humidToggle();
						}}>
						Humidifiers
					</button>
				</div>
				<div
					className='thumbnail-image thumbnail3'
					onMouseEnter={() => {
						setTogglePurifierOverlay(false);
					}}></div>
				<div
					className={togglePurifierOverlay ? 'hide' : 'overlay3'}
					onMouseLeave={() => {
						setTogglePurifierOverlay(true);
					}}>
					<button onClick={purifierToggle}>Purifiers</button>
				</div>
			</div>
		</div>
	);
};

export default MiddleOfHome;
