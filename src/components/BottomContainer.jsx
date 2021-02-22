import React from 'react';
import purifier1 from '../assets/images/purifier-room.jpg';
import purifier2 from '../assets/images/purifier-room2.jpg';
import livingRoom from '../assets/images/living-room.webp';
import bedroom from '../assets/images/bedroom.jpg';
import fanVideo from '../assets/videos/fan-video.mp4';
import virusInfo from '../assets/images/virus-info.jpg';

const BottomContainer = () => {
	return (
		<>
			<div className='small-thumbnail-gallery'>
				<div className='grey-half'></div>
				<div className='bottom-image-container'>
					<img src={bedroom} alt='bedroom' />
					<img src={purifier1} alt='purifier' />
					<img src={purifier2} alt='purifier' />
					<img src={livingRoom} alt='Living Room' />
				</div>
				<div className='bottom-text'>
					<h3>Why choose us?</h3>
					<p className='bottom-text-p'>
						Our products are helping shape the future of clean sustainble
						living. Take a look around to see how we can shape the future of
						your office space.
					</p>
				</div>
			</div>
			<div className='virus-info-img'>
				<img src={virusInfo} alt='virus info' />
			</div>
			<div className='fan-container'>
				<video autoPlay muted loop className='fan-video'>
					<source src={fanVideo} type='video/mp4' />
				</video>
			</div>
		</>
	);
};

export default BottomContainer;
