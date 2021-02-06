import React, { useState } from 'react';

import { HomePurifier, HomeFan } from '../components/sub-pages/index';

const MiddleOfHome = () => {
	const [toggleOverlay, setToggleOverlay] = useState(true);
	const [purifierMain, setPurifierMain] = useState(true);
	return (
		<div className='middle-container'>
			{purifierMain ? (
				<HomePurifier purifierMain={purifierMain} />
			) : (
				<HomeFan purifierMain={purifierMain} />
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
							setPurifierMain(false);
						}}>
						Cooling
					</button>
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
