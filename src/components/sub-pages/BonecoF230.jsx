import React from 'react';
import { techSpecs } from '../../lib/techSpecs';
import blueTick from '../../assets/icons/blue-tick.svg';
import bonecoF230Img from '../../assets/images/boneco-f230.png';

const BonecoF230 = () => {
	const fanDetails = techSpecs.fans[3];
	return (
		<div className='technical-spec-container'>
			<h1>Technical specs for the Boneco F230</h1>
			<div className='specs-and-img-container'>
				<div className='specs-container'>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>Air Speed: {fanDetails.airspeed}</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>Air Flow: {fanDetails.airflow}</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>Blade: {fanDetails.blade}</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>Dimensions: {fanDetails.dimensions}</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>Noise Level: {fanDetails.noiseLevel}</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>
							Power Consumption: {fanDetails.powerConsumption}
						</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>Voltage: {fanDetails.voltage}</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>Weight: {fanDetails.weight}</h6>
					</div>
				</div>
				<div className='tech-img-container'>
					<img src={bonecoF230Img} alt='boneco f230' />
				</div>
			</div>
		</div>
	);
};

export default BonecoF230;
