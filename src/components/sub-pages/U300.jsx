import React from 'react';
import { techSpecs } from '../../lib/techSpecs';
import blueTick from '../../assets/icons/blue-tick.svg';
import redX from '../../assets/icons/red-x.svg';
import U300img from '../../assets/images/U300-humidifier.png';

const U300 = () => {
	const humidSpecs = techSpecs.humidifiers[1];
	return (
		<div>
			<div className='technical-spec-container'>
				<h1>Technical specs for the U300 Humidifier</h1>
				<div className='specs-and-img-container'>
					<div className='specs-container'>
						<div className='techspecs-small-container'>
							<img src={redX} alt='tick svg' />
							<h6 className='tech-text'>
								Assembly Needed: {humidSpecs.assemblyNeeded}
							</h6>
						</div>
						<div className='techspecs-small-container'>
							<img src={redX} alt='tick svg' />
							<h6 className='tech-text'>
								Filter Needed: {humidSpecs.filterNeeded}
							</h6>
						</div>
						<div className='techspecs-small-container'>
							<img src={blueTick} alt='tick svg' />
							<h6 className='tech-text'>Material: {humidSpecs.material}</h6>
						</div>
						<div className='techspecs-small-container'>
							<img src={blueTick} alt='tick svg' />
							<h6 className='tech-text'>Power: {humidSpecs.power}</h6>
						</div>
						<div className='techspecs-small-container'>
							<img src={blueTick} alt='tick svg' />
							<h6 className='tech-text'>
								Room Size Max: {humidSpecs.maxRoomSize}
							</h6>
						</div>
						<div className='techspecs-small-container'>
							<img src={blueTick} alt='tick svg' />
							<h6 className='tech-text'>
								Noise Level: {humidSpecs.noiseLevel}
							</h6>
						</div>
						<div className='tech-img-container'>
							<img src={U300img} alt='U300' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default U300;
