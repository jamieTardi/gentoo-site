import React from 'react';
import { Link } from 'react-router-dom';

const ShopHome = () => {
	const shopInfo = [
		{
			title: 'Purifiers',
			text:
				'Click below to go to our shop for purifiers, in here you will be able to see a selection of our best purifiers and all of the technical specs associated with them.',
			link: '/purifiers',
		},
		{
			title: 'Cooling Fans',
			text:
				'Click below to go to our shop for cooling fans, in here you will be able to see a selection of our best cooling fans and all of the technical specs associated with them.',
			link: '/fans',
		},
		{
			title: 'Humidifiers',
			text:
				'Click below to go to our shop for humidifiers, in here you will be able to see a selection of our best humidifiers and all of the technical specs associated with them.',
			link: '/humidifiers',
		},
		{
			title: 'Heaters Coming soon',
			text:
				'Click below to go to our shop for heaters, in here you will be able to see a selection of our best heaters and all of the technical specs associated with them.',
			link: '/',
		},
	];
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
					<button className='shop-btn tech'>Technical Specs</button>
				</div>
			</div>
			<section className='section'>
				<h2> WINIX Air Purifiers</h2>
				<p>
					Using a WINIX air purifier at home creates a healthier indoor
					environment for you and your family. With WINIX, the indoor air will
					be cleaned much faster and more often. Forget about allergens, fine
					dust (PM2.5), pollen, pet dander, cigarette smoke, mold spores, VOCs,
					and household odors. Our air purifiers use both the highest quality
					True HEPA filters (captures 99.97% of all particles and allergens from
					the air) and the WINIX PlasmaWave® Technology, making them the best
					solution for every home and office environment. The unique WINIX
					PlasmaWave® Technology creates Hydroxyl molecules that naturally
					neutralize viruses, bacteria, and gases, without producing harmful
					ozone. WINIX Air purifiers have been tested and certified by both
					Allergy UK and ECARF (European Center for Allergy Research Foundation)
					to ensure that our products truly improves indoor air quality. WINIX
					was founded in South Korea in 1973 and currently is one of the
					specialists and leaders in the market worlwide. Choose now the winix
					air purifier that best suits your needs!.
				</p>
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
				<p>
					Air Shower Fans If you feel especially good indoors, it could be due
					to the professional air treatment provided by our products from BONECO
					healthy air. That’s because they provide a noticeable improvement of
					the air inside a room as well as a beneficial indoor climate. The
					optimal indoor air not only positively influences your wellbeing, but
					also your health.
				</p>
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
				<h2>Section Three</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eveniet,
					dolor possimus assumenda fugiat commodi sint, dicta quia blanditiis
					suscipit ipsam sequi. Tenetur ad dolore ab ipsum cum minus et rerum
					quaerat odio expedita quae itaque dolor voluptas hic laboriosam, alias
					quo ea repellendus aut laborum, quibusdam ratione voluptatibus
					obcaecati! Tenetur sapiente, pariatur minus quas culpa perferendis
					nesciunt aut corrupti nisi adipisci quod odit ab repudiandae, repellat
					blanditiis a quaerat cupiditate, distinctio hic nostrum molestiae
					laborum tempora at. Maxime recusandae obcaecati, cum optio officiis
					cupiditate earum asperiores beatae ipsum similique libero iste
					aperiam, ut, placeat nobis labore sint dolores culpa.
				</p>
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
