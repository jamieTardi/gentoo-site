import React from 'react';
import Loading from '../../assets/icons/loading.gif';

const Humidifiers = ({ products, handleUpdateCart }) => {
	return (
		<>
			{products.length === 0 ? (
				<div className='loading-screen'>
					<img src={Loading} alt='load screen' />
				</div>
			) : (
				<div className='purifier-shop-container'>
					{products.map((humidifier) => (
						<div key={humidifier.name}>
							{humidifier.categories[0].id === 'cat_aZWNoyvq9580JA' ? (
								<div className='indivdual-item' key={humidifier.name}>
									<img
										src={
											humidifier.media.source
												? humidifier.media.source
												: Loading
										}
										alt={humidifier.name}
									/>
									<div className='indivdual-items-text'>
										<h1>{humidifier.name}</h1>
										<p
											dangerouslySetInnerHTML={{
												__html: humidifier.description,
											}}></p>
										<div className='button-and-price'>
											<button
												onClick={() => {
													handleUpdateCart(humidifier.id, 1);
												}}>
												Add to Basket
											</button>
											<h4>{humidifier.price.formatted_with_symbol} incl VAT</h4>
										</div>
									</div>
								</div>
							) : (
								''
							)}
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default Humidifiers;
