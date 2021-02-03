import React from 'react';
import leaf from '../assets/icons/leaf.svg';
import energy from '../assets/icons/energy.svg';
import virus from '../assets/icons/virus.svg';
import purifier from '../assets/images/purifier.png';
import fan from '../assets/images/fan.webp';
import hairDryer from '../assets/images/hairdryer-stock.jpg';
import humidfier from '../assets/images/humidfiers.webp';
import { NavHashLink } from 'react-router-hash-link';

const MiddleOfHome = () => {
	return (
		<div className='middle-container'>
			<div className='top-middle'>
				<div className='icons-container-middle'>
					<div className='icons-and-text'>
						<div className='icons-middle'>
							<img src={leaf} alt='leaf' />
							<p>Eco friendly made from recycled materials</p>
						</div>
						<div className='icons-middle'>
							<img src={virus} alt='virus' />
							<p>Stops over 90% of airborne viruses dead in their tracks</p>
						</div>
						<div className='icons-middle'>
							<img src={energy} alt='energy' />
							<p>Energy and cost effective</p>
						</div>
					</div>
					<NavHashLink to='/middle#middle'>
						<h3>Air Purifiers for a safer future</h3>
					</NavHashLink>
					<p className='middle-text'>
						WINIX air purifiers clean the indoor air quickly and effectively
						from: viruses, bacteria, dust, particulate matter (PM2.5), pollen,
						mold, pet dander, cooking smells, and cigarette smoke, helping
						against respiratory diseases and allergies. WINIX air purifiers hold
						the most important certifications in Europe and help to improve the
						quality of life of people, all around the world. As a South-Korean
						manufacturer, WINIX is worldwide known for its High Quality, and
						High-Performance Air Purifiers, and is also recognized for the
						development of PlasmaWave® Technology, which creates hydroxyls to
						neutralize viruses and gases WITHOUT emitting harmful ozone.
					</p>
					<button className='learn-more'>Learn More</button>
				</div>
			</div>
			<div className='purifier-container'>
				<img src={purifier} alt='purifier' />
			</div>
			<div className='image-thumbnails thumbnail'>
				<img src={fan} alt='fan' />
				<img src={hairDryer} alt='hair dryer' />
				<img src={humidfier} alt='humidfier' />
			</div>
		</div>
	);
};

export default MiddleOfHome;
