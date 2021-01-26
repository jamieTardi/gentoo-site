import React from 'react';
import Loading from '../../assets/icons/loading.gif';

const Fans = ({ products }) => {
	return (
		<>
			{products.length === 0 ? (
				<div className='loading-screen'>
					<img src={Loading} alt='load screen' />
				</div>
			) : (
				<div className='purifier-shop-container'>
					{products.map((fan) => (
						<>
							{fan.categories[0].id === 'cat_ZRjywMpabl7Y8G' ? (
								<div className='indivdual-item' key={fan.name}>
									<img src={fan.media.source} alt={fan.name} />
									<div className='indivdual-items-text'>
										<h1>{fan.name}</h1>
										<p
											dangerouslySetInnerHTML={{ __html: fan.description }}></p>
										<div className='button-and-price'>
											<button>Add to Basket</button>
											<h4>{fan.price.formatted_with_symbol} incl VAT</h4>
										</div>
									</div>
								</div>
							) : (
								''
							)}
						</>
					))}
				</div>
			)}
		</>
	);
};

export default Fans;
