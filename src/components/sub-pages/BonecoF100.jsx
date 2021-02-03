import React from 'react';
import { techSpecs } from '../../lib/techSpecs';
import blueTick from '../../assets/icons/blue-tick.svg';
import bonecoF100Img from '../../assets/images/boneco-f100.png';

const BonecoF100 = () => {
	const fanDetails = techSpecs.fans[0];
	return (
		<div className='technical-spec-container'>
			<h1>Technical specs for the Boneco F100</h1>
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
					<img src={bonecoF100Img} alt='boneco f100' />
				</div>
			</div>
		</div>
	);
};

export default BonecoF100;
