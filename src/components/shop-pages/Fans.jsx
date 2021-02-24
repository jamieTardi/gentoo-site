import React from 'react';
import Loading from '../../assets/icons/loading.gif';
import { Link } from 'react-router-dom';

const Fans = ({ products, handleUpdateCart, vatPrice }) => {
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
						.map((fan) => (
							<div key={fan.name}>
								{fan.categories[0].id === 'cat_ZRjywMpabl7Y8G' ? (
									<div className='indivdual-item' key={fan.name}>
										<img
											src={fan.media.source ? fan.media.source : Loading}
											alt={fan.name}
										/>
										<div className='indivdual-items-text'>
											<h1>{fan.name}</h1>
											<p
												dangerouslySetInnerHTML={{
													__html: fan.description,
												}}></p>
											<div className='button-and-price'>
												<button onClick={() => handleUpdateCart(fan.id, 1)}>
													Add to Basket
												</button>
												{fan.id === 'prod_ZM8X5nJe85pv4q' ? (
													<Link to='/boneco-f100'>
														<button>Tech Specs</button>
													</Link>
												) : fan.id === 'prod_gvRjwOPpRo4mNL' ? (
													<Link to='/boneco-f120'>
														<button>Tech Specs</button>
													</Link>
												) : fan.id === 'prod_N7GKwbJ6vw3EX4' ? (
													<Link to='/boneco-f220'>
														<button>Tech Specs </button>
													</Link>
												) : (
													<Link to='/boneco-f230'>
														<button>Tech Specs</button>
													</Link>
												)}
												<h4>£{vatPrice(fan.price.raw)} incl VAT</h4>
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

export default Fans;
