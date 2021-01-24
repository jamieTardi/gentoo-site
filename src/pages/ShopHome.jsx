import React from 'react';
import purifier1 from '../assets/images/purifier-room.jpg';
import hairDryers from '../assets/images/hairdryer-stock.jpg';
import purifier2 from '../assets/images/purifier-room2.jpg';
import heater from '../assets/images/heater-room.jpg';
import { Link } from 'react-router-dom';

const ShopHome = () => {
	const shopInfo = [
		{
			img: purifier1,
			title: 'Purifiers',
			text:
				'Click below to go to our shop for purifiers, in here you will be able to see a selection of our best purifiers and all of the technical specs associated with them.',
			link: '/purifiers',
		},
		{
			img: hairDryers,
			title: 'Hair Dryers',
			text:
				'Click below to go to our shop for hair dryers, in here you will be able to see a selection of our best hair dryers and all of the technical specs associated with them.',
			link: '/hair-dryers',
		},
		{
			img: purifier2,
			title: 'Toasters',
			text:
				'Click below to go to our shop for toasters, in here you will be able to see a selection of our best toasters and all of the technical specs associated with them.',
			link: '/toasters',
		},
		{
			img: heater,
			title: 'Heaters',
			text:
				'Click below to go to our shop for heaters, in here you will be able to see a selection of our best heaters and all of the technical specs associated with them.',
			link: '/heaters',
		},
	];
	return (
		<div className='shop-home-container'>
			{shopInfo.map((shopItem, index) => (
				<div className='shop-items-container' key={shopItem.text}>
					{index === 1 || index === 3 ? (
						<div className='shop-item' key={shopItem.text}>
							<img src={shopItem.img} alt={shopItem.title} />
							<div className='shop-item-text'>
								<h2>{shopItem.title}</h2>
								<h6>{shopItem.text}</h6>
								<Link to={shopItem.link}>
									<button>Shop Now</button>
								</Link>
							</div>
						</div>
					) : (
						<div className='shop-item-odd' key={shopItem.text}>
							<div className='shop-item-odd-text'>
								<h2>{shopItem.title}</h2>
								<h6>{shopItem.text}</h6>
								<Link to={shopItem.link}>
									<button>Shop Now</button>
								</Link>
							</div>
							<img src={shopItem.img} alt={shopItem.text} />
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default ShopHome;
