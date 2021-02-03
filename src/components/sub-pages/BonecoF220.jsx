import React from 'react';
import { techSpecs } from '../../lib/techSpecs';
import blueTick from '../../assets/icons/blue-tick.svg';
import bonecoF220Img from '../../assets/images/boneco-f220.png';

const BonecoF220 = () => {
	const fanDetails = techSpecs.fans[2];
	return (
		<div className='technical-spec-container'>
			<h1>Technical specs for the Boneco F220</h1>
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
					<img src={bonecoF220Img} alt='boneco f220' />
				</div>
			</div>
		</div>
	);
};

export default BonecoF220;
