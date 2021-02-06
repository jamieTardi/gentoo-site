import React from 'react';
import leaf from '../../assets/icons/leaf.svg';
import energy from '../../assets/icons/energy.svg';
import virus from '../../assets/icons/virus.svg';
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import humidPic from '../../assets/images/U300-humidifier.png';

const HomeHumid = () => {
	return (
		<div>
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
						<h3>Humidifiers</h3>
					</NavHashLink>
					<p className='middle-text'>
						Experience the ease and user-friendliness of the U300 Humidifier.
						You can fill the appliance with water in place from the top. The
						control knob lets you configure the desired output level and
						immediately experience how refreshing humidified air feels. In
						addition, you can create your individual comfortable climate thanks
						to the fragrance container. Using the tank window and the low water
						level indicator, you can immediately tell when the water needs to be
						refilled. The U300 can be cleaned easily and integrated accessories
						help keep the water fresh.
					</p>
					<Link to='/humidifiers'>
						<button className='learn-more'>Learn More</button>
					</Link>
				</div>
			</div>
			<div className='purifier-container'>
				<img src={humidPic} alt='humidifier' />
			</div>
		</div>
	);
};

export default HomeHumid;
