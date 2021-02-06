import React from 'react';
import { techSpecs } from '../../lib/techSpecs';
import blueTick from '../../assets/icons/blue-tick.svg';
import redX from '../../assets/icons/red-x.svg';
import winixProImg from '../../assets/images/Winix-Zero-Pro.png';

const WinixZeroPro = () => {
	const purifierDetails = techSpecs.purifiers[0];
	return (
		<div>
			<div className='technical-spec-container'>
				<h1>Technical specs for the Winix Zero Pro</h1>
				<div className='specs-and-img-container'>
					<div className='specs-container'>
						<div className='techspecs-small-container'>
							<img src={blueTick} alt='tick svg' />
							<h6 className='tech-text'>
								Air Quality Light: {purifierDetails.airQualityLight}
							</h6>
						</div>
						<div className='techspecs-small-container'>
							<img src={blueTick} alt='tick svg' />
							<h6 className='tech-text'>
								Auto mode: {purifierDetails.autoMode}
							</h6>
						</div>
						<div className='techspecs-small-container'>
							<img src={redX} alt='tick svg' />
							<h6 className='tech-text'>
								Bluetooth Speaker: {purifierDetails.bluetoothSpeaker}
							</h6>
						</div>
						<div className='techspecs-small-container'>
							<img src={blueTick} alt='tick svg' />
							<h6 className='tech-text'>
								Dimensions: {purifierDetails.dimensions}
							</h6>
						</div>
						<div className='techspecs-small-container'>
							<img src={blueTick} alt='tick svg' />
							<h6 className='tech-text'>
								Dust Sensor: {purifierDetails.dustSensor}
							</h6>
						</div>
						<div className='techspecs-small-container'>
							<img src={blueTick} alt='tick svg' />
							<h6 className='tech-text'>
								Fan Speeds: {purifierDetails.fanSpeeds}
							</h6>
						</div>
						<div className='techspecs-small-container'>
							<img src={blueTick} alt='tick svg' />
							<h6 className='tech-text'>
								Filter Replacement: {purifierDetails.filterReplacement}
							</h6>
						</div>
						<div className='techspecs-small-container'>
							<img src={blueTick} alt='tick svg' />
							<h6 className='tech-text'>
								Max Air Flow: {purifierDetails.maxAirFlow}
							</h6>
						</div>
						<div className='techspecs-small-container'>
							<img src={blueTick} alt='tick svg' />
							<h6 className='tech-text'>
								Max Room Capacity: {purifierDetails.maxRoomCapacity}
							</h6>
						</div>
						<div className='techspecs-small-container'>
							<img src={blueTick} alt='tick svg' />
							<h6 className='tech-text'>Model No: {purifierDetails.modelNo}</h6>
						</div>
						<div className='techspecs-small-container'>
							<img src={blueTick} alt='tick svg' />
							<h6 className='tech-text'>
								Noise Level: {purifierDetails.noiseLevel}
							</h6>
						</div>
						<div className='techspecs-small-container'>
							<img src={blueTick} alt='tick svg' />
							<h6 className='tech-text'>
								Odour Sensor: {purifierDetails.odourSensor}
							</h6>
						</div>
						<div className='techspecs-small-container'>
							<img src={blueTick} alt='tick svg' />
							<h6 className='tech-text'>
								Plasmawave: {purifierDetails.plasmawave}
							</h6>
						</div>
						<div className='techspecs-small-container'>
							<img src={blueTick} alt='tick svg' />
							<h6 className='tech-text'>
								Power Consumption: {purifierDetails.powerConsumption}
							</h6>
						</div>
						<div className='techspecs-small-container'>
							<img src={blueTick} alt='tick svg' />
							<h6 className='tech-text'>
								Sleep Mode: {purifierDetails.sleepMode}
							</h6>
						</div>
						<div className='techspecs-small-container'>
							<img src={blueTick} alt='tick svg' />
							<h6 className='tech-text'>Timer: {purifierDetails.timer}</h6>
						</div>
						<div className='techspecs-small-container'>
							<img src={blueTick} alt='tick svg' />
							<h6 className='tech-text'>Weight: {purifierDetails.weight}</h6>
						</div>
					</div>
					<div className='tech-img-container'>
						<img src={winixProImg} alt='winix zero' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default WinixZeroPro;
