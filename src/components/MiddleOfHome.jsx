import React from 'react';
import leaf from '../assets/icons/leaf.svg';
import energy from '../assets/icons/energy.svg';
import virus from '../assets/icons/virus.svg';
import purifier from '../assets/images/purifier.png';
import fan from '../assets/images/fan.webp';
import hairDryer from '../assets/images/hairdryer-stock.jpg';
import humidfier from '../assets/images/humidfiers.webp';

const MiddleOfHome = () => {
	return (
		<div className='middle-container'>
			<div className='top-middle'>
				<div className='icons-container-middle'>
					<div className='icons-and-text'>
						<div className='icons-middle'>
							<img src={leaf} alt='leaf' />
							<p>Eco friendly made from recycled materials</p>
						</div>
						<div className='icons-middle'>
							<img src={virus} alt='virus' />
							<p>Stops over 90% of airborne viruses dead in their tracks</p>
						</div>
						<div className='icons-middle'>
							<img src={energy} alt='energy' />
							<p>Energy and cost effective</p>
						</div>
					</div>
					<h3>Air Purifiers for a safer future</h3>
					<p className='middle-text'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
						commodi impedit omnis officia autem aliquam possimus nobis saepe
						veritatis nam est inventore tenetur ipsa vitae quibusdam ut voluptas
						incidunt quas, eligendi reiciendis. Eveniet beatae repudiandae
						inventore quaerat excepturi? Porro incidunt nisi voluptas aut rem
						odio quia labore voluptatibus neque, adipisci, eos, quaerat eaque
						autem nobis vel molestiae consequuntur magni? Aliquam sit aperiam
						omnis nulla iste eos, quas architecto saepe rerum ex ducimus error
						hic provident, natus debitis itaque delectus cum?
					</p>
					<button className='learn-more'>Learn More</button>
				</div>
			</div>
			<div className='purifier-container'>
				<img src={purifier} alt='purifier' />
			</div>
			<div className='image-thumbnails thumbnail'>
				<img src={fan} alt='fan' />
				<img src={hairDryer} alt='hair dryer' />
				<img src={humidfier} alt='humidfier' />
			</div>
		</div>
	);
};

export default MiddleOfHome;
