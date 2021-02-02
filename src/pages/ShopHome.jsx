import React from 'react';
import { Link } from 'react-router-dom';

const ShopHome = () => {
	return (
		<>
			<div className='main-and-text1'>
				<div className='pimg1'></div>
				<div className='ptext'>
					<span className='border'>Purifiers</span>
					<h5>
						Click below to go to our shop for purifiers, in here you will be
						able to see a selection of our best purifiers and all of the
						technical specs associated with them.
					</h5>
					<Link to='/purifiers'>
						<button className='shop-btn'>Shop Now</button>
					</Link>
					<Link to='/purifier-technical-spec'>
						<button className='shop-btn tech'>Technical Specs</button>
					</Link>
				</div>
			</div>
			<section className='section'>
				<h2> WINIX Air Purifiers</h2>
			</section>

			<div className='main-and-text2'>
				<div className='pimg2'></div>
				<div className='ptext2'>
					<span className='border'>Cooling</span>
					<h5>
						Click below to go to our shop for cooling fans, in here you will be
						able to see a selection of our best air circulation systems and all
						of the technical specs associated with them.
					</h5>
					<Link to='/fans'>
						<button className='shop-btn'>Shop Now</button>
					</Link>
					<button className='shop-btn tech'>Technical Specs</button>
				</div>
			</div>
			<section className='section'>
				<h2>Air Shower Fans</h2>
			</section>

			<div className='main-and-text2'>
				<div className='pimg3'></div>
				<div className='ptext3'>
					<span className='border'>Humidifiers</span>
					<h5>
						Click below to go to our shop for humidifiers, in here you will be
						able to see a selection of our best humidifiers and all of the
						technical specs associated with them.
					</h5>
					<Link to='/humidifiers'>
						<button className='shop-btn'>Shop Now</button>
					</Link>
					<button className='shop-btn tech'>Technical Specs</button>
				</div>
			</div>

			<section className='section'>
				<h2>Humidifiers</h2>
			</section>

			<div className='main-and-text2'>
				<div className='pimg4'></div>
				<div className='ptext4'>
					<span className='border'>Heaters</span>
					<h5>
						Our selection of heaters will be coming soon! Check back here
						shortly for further details.
					</h5>
					<Link to='/'>
						<button className='shop-btn'>Shop Now</button>
					</Link>
					<button className='shop-btn tech'>Technical Specs</button>
				</div>
			</div>
		</>
	);
};

export default ShopHome;
