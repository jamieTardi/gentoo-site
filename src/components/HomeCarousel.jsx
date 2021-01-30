import React from 'react';
import { Carousel } from 'react-bootstrap';
import hero1 from '../assets/images/hero-1.jpg';
import heater from '../assets/images/heater-room.jpg';
import livingRoom from '../assets/images/living-room.webp';
import { HashLink } from 'react-router-hash-link';
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
							<HashLink smooth to='/middle#middle'>
								<svg
									width='102'
									height='97'
									viewBox='0 0 102 97'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M51 0C79.1478 0 102 21.732 102 48.5C102 75.268 79.1478 97 51 97C22.8522 97 0 75.268 0 48.5C0 21.732 22.8522 0 51 0ZM51 4.04167C76.8018 4.04167 97.75 23.963 97.75 48.5C97.75 73.037 76.8018 92.9583 51 92.9583C25.1982 92.9583 4.25 73.037 4.25 48.5C4.25 23.963 25.1982 4.04167 51 4.04167ZM73.2998 36.375L51 62.4033L28.6322 36.375L25.5 39.1152L51 68.7083L76.5 39.0627L73.2998 36.375Z'
										fill='white'
									/>
								</svg>
							</HashLink>
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
							<HashLink smooth to='/middle#middle'>
								<svg
									width='102'
									height='97'
									viewBox='0 0 102 97'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M51 0C79.1478 0 102 21.732 102 48.5C102 75.268 79.1478 97 51 97C22.8522 97 0 75.268 0 48.5C0 21.732 22.8522 0 51 0ZM51 4.04167C76.8018 4.04167 97.75 23.963 97.75 48.5C97.75 73.037 76.8018 92.9583 51 92.9583C25.1982 92.9583 4.25 73.037 4.25 48.5C4.25 23.963 25.1982 4.04167 51 4.04167ZM73.2998 36.375L51 62.4033L28.6322 36.375L25.5 39.1152L51 68.7083L76.5 39.0627L73.2998 36.375Z'
										fill='white'
									/>
								</svg>
							</HashLink>
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
							<HashLink smooth to='/middle#middle'>
								<svg
									width='102'
									height='97'
									viewBox='0 0 102 97'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M51 0C79.1478 0 102 21.732 102 48.5C102 75.268 79.1478 97 51 97C22.8522 97 0 75.268 0 48.5C0 21.732 22.8522 0 51 0ZM51 4.04167C76.8018 4.04167 97.75 23.963 97.75 48.5C97.75 73.037 76.8018 92.9583 51 92.9583C25.1982 92.9583 4.25 73.037 4.25 48.5C4.25 23.963 25.1982 4.04167 51 4.04167ZM73.2998 36.375L51 62.4033L28.6322 36.375L25.5 39.1152L51 68.7083L76.5 39.0627L73.2998 36.375Z'
										fill='white'
									/>
								</svg>
							</HashLink>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default HomeCarousel;
