import React from 'react';
import { Carousel } from 'react-bootstrap';
import hero1 from '../assets/images/purifier-room.jpg';
import heater from '../assets/images/heater-room.jpg';
import livingRoom from '../assets/images/living-room.webp';
import { Link } from 'react-router-dom';

const HomeCarousel = () => {
	return (
		<div className='carousel-container'>
			<Carousel controls={false} indicators={false} pause={false}>
				<Carousel.Item interval={5000}>
					<img className='d-block w-100' src={hero1} alt='First slide' />
					<Carousel.Caption>
						<div className='first-slide-text'>
							<h1>
								<span id='breathe'>Breathe </span>the future of Clean Air. A
								fresh breath every time with a brand you can trust.
							</h1>
							<Link to='/shopHome'>
								<button>Shop Now</button>
							</Link>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={5000}>
					<img className='d-block w-100' src={heater} alt='Third slide' />
					<Carousel.Caption>
						<div className='first-slide-text'>
							<h1>
								<span id='warm'>Warm </span>your living space with the one of
								the most stylish and functional heaters on the market
							</h1>
							<Link to='/shopHome'>
								<button>Shop Now</button>
							</Link>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={5000}>
					<img className='d-block w-100' src={livingRoom} alt='Third slide' />
					<Carousel.Caption>
						<div className='first-slide-text'>
							<h1>
								<span id='clean'>Clean </span>air for all of the family, proven
								to prevent airbourne viruses, so you can have peace of mind.
							</h1>
							<Link to='/shopHome'>
								<button>Shop Now</button>
							</Link>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default HomeCarousel;
