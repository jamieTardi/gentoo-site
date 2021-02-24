import React from 'react';
import Loading from '../../assets/icons/loading.gif';
import { Link } from 'react-router-dom';

const Humidifiers = ({ products, handleUpdateCart, vatPrice }) => {
	return (
		<>
			{products.length === 0 ? (
				<div className='loading-screen'>
					<img src={Loading} alt='load screen' />
				</div>
			) : (
				<div className='purifier-shop-container'>
					{products
						.sort((a, b) => a.price.raw > b.price.raw)
						.map((humidifier) => (
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
												{humidifier.id === 'prod_O3bR5XJJAwnzdj' ? (
													<Link to='/atmos-speaker'>
														<button>Tech Specs</button>
													</Link>
												) : humidifier.id === 'prod_RyWOwmJbKonEa2' ? (
													<Link to='/u300'>
														<button>Tech Specs</button>
													</Link>
												) : (
													''
												)}
												<h4>£{vatPrice(humidifier.price.raw)} incl VAT</h4>
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
