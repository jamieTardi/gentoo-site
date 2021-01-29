import React from 'react';
import Loading from '../../assets/icons/loading.gif';

const Purifier = ({ products, handleUpdateCart, vatPrice }) => {
	return (
		<>
			{products.length === 0 ? (
				<div className='loading-screen'>
					<img src={Loading} alt='load screen' />
				</div>
			) : (
				<div className='purifier-shop-container'>
					{products.map((purifier) => (
						<div key={purifier.name}>
							{purifier.categories[0].id === 'cat_N7GKwbBGvw3EX4' ? (
								<div className='indivdual-item' key={purifier.name}>
									{console.log(purifier)}
									<img
										src={
											purifier.media.source ? purifier.media.source : Loading
										}
										alt={purifier.name}
									/>
									<div className='indivdual-items-text'>
										<h1>{purifier.name}</h1>
										<p
											dangerouslySetInnerHTML={{
												__html: purifier.description,
											}}></p>
										<div className='button-and-price'>
											<button
												onClick={() => {
													handleUpdateCart(purifier.id, 1);
												}}>
												Add to Basket
											</button>
											<h4>£{vatPrice(purifier.price.raw)} incl VAT</h4>
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

export default Purifier;
