import React from 'react';

const Heaters = () => {
	const vatPrice = (nonVatPrice) => {
		let vatCalc = nonVatPrice * 0.2;
		let vatAdded = vatCalc + nonVatPrice;
		console.log(vatAdded.toFixed(2));
	};

	console.log(vatPrice(65.83));
	return (
		<div>
			<p>Heaters</p>
		</div>
	);
};

export default Heaters;
