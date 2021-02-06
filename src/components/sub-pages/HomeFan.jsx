import React from 'react';
import leaf from '../../assets/icons/leaf.svg';
import energy from '../../assets/icons/energy.svg';
import virus from '../../assets/icons/virus.svg';
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import fans from '../../assets/images/boneco-f220.png';

const HomeFan = () => {
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
						<h3>Air Shower Fans</h3>
					</NavHashLink>
					<p className='middle-text'>
						If you feel especially good indoors, it could be due to the
						professional air treatment provided by our products from BONECO
						healthy air. That’s because they provide a noticeable improvement of
						the air inside a room as well as a beneficial indoor climate. The
						optimal indoor air not only positively influences your wellbeing,
						but also your health.
					</p>
					<Link to='/fans'>
						<button className='learn-more'>Learn More</button>
					</Link>
				</div>
			</div>
			<div className='purifier-container'>
				<img src={fans} alt='fan' />
			</div>
		</div>
	);
};

export default HomeFan;
