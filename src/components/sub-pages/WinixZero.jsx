import React from 'react';
import { techSpecs } from '../../lib/techSpecs';
import blueTick from '../../assets/icons/blue-tick.svg';
import redX from '../../assets/icons/red-x.svg';

const WinixZero = () => {
	const winixZeroDetails = techSpecs.purifiers[2];
	console.log(winixZeroDetails);
	return (
		<div className='technical-spec-container'>
			<h1>Technical specs for the Winix Zero</h1>
			<div className='specs-and-img-container'>
				<div className='specs-container'>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>
							Air Quality Light: {winixZeroDetails.airQualityLight}
						</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>
							Auto mode: {winixZeroDetails.autoMode}
						</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={redX} alt='tick svg' />
						<h6 className='tech-text'>
							Bluetooth Speaker: {winixZeroDetails.bluetoothSpeaker}
						</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>
							Dimensions: {winixZeroDetails.dimensions}
						</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>
							Dust Sensor: {winixZeroDetails.dustSensor}
						</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>
							Fan Speeds: {winixZeroDetails.fanSpeeds}
						</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>
							Filter Replacement: {winixZeroDetails.filterReplacement}
						</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>
							Max Air Flow: {winixZeroDetails.maxAirFlow}
						</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>
							Max Room Capacity: {winixZeroDetails.maxRoomCapacity}
						</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>Model No: {winixZeroDetails.modelNo}</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>
							Noise Level: {winixZeroDetails.noiseLevel}
						</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={redX} alt='tick svg' />
						<h6 className='tech-text'>
							Odour Sensor: {winixZeroDetails.odourSensor}
						</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>
							Plasmawave: {winixZeroDetails.plasmawave}
						</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>
							Power Consumption: {winixZeroDetails.powerConsumption}
						</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>
							Sleep Mode: {winixZeroDetails.sleepMode}
						</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>Timer: {winixZeroDetails.timer}</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>Weight: {winixZeroDetails.weight}</h6>
					</div>
				</div>
				<div className='tech-img-container'>
					<img src={winixZeroDetails.img} alt='winix zero' />
				</div>
			</div>
		</div>
	);
};

export default WinixZero;
