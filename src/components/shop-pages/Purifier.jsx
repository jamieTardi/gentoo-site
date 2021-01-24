import React from 'react';
import PurifierImg from '../../assets/images/purifier.png';

const Purifier = () => {
	const technicalSpecs = [
		{
			title: 'Winix 100',
			vat: '£249.99',
			price: '£299.99',
			description:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, tempore fugit? Beatae doloremque provident tenetur esse veritatis aliquid impedit! Debitis consequatur consectetur dolores, error quae molestiae hic non facilis optio consequuntur deleniti dicta nemo repellat iusto nesciunt unde ipsa neque laboriosam eligendi accusantium quibusdam obcaecati dolor? Nihil, enim eos. Ratione.',
			img: PurifierImg,
			airFlow: '1.2 litres',
			airSpeed: '3.4 mph',
			filter: 'filter 1',
		},
		{
			title: 'Winix 100',
			vat: '£249.99',
			price: '£299.99',
			description:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, tempore fugit? Beatae doloremque provident tenetur esse veritatis aliquid impedit! Debitis consequatur consectetur dolores, error quae molestiae hic non facilis optio consequuntur deleniti dicta nemo repellat iusto nesciunt unde ipsa neque laboriosam eligendi accusantium quibusdam obcaecati dolor? Nihil, enim eos. Ratione.',
			img: PurifierImg,
			airFlow: '1.2 litres',
			airSpeed: '3.4 mph',
			filter: 'filter 1',
		},
	];
	return (
		<div className='purifier-shop-container'>
			{technicalSpecs.map((item) => (
				<div className='indivdual-item' key={item.title}>
					<img src={item.img} alt={item.title} />
					<div className='indivdual-items-text'>
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<div className='button-and-price'>
							<button>Add to Basket</button>
							<h4>{item.price} incl VAT</h4>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Purifier;
