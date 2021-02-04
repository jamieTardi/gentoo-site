import React from 'react';
import { techSpecs } from '../../lib/techSpecs';
import blueTick from '../../assets/icons/blue-tick.svg';
import redX from '../../assets/icons/red-x.svg';
import atmosSpeaker from '../../assets/images/atmos-speaker.png';

const AtmosSpeaker = () => {
	const humidSpecs = techSpecs.humidifiers[0];
	return (
		<div className='technical-spec-container'>
			<h1>Technical specs for the Atoms Speaker</h1>
			<div className='specs-and-img-container'>
				<div className='specs-container'>
					<div className='techspecs-small-container'>
						<img src={redX} alt='tick svg' />
						<h6 className='tech-text'>
							Assembly Needed: {humidSpecs.assemblyNeeded}
						</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>
							Auto Shut Off: {humidSpecs.autoShutOff}
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
						<h6 className='tech-text'>Portable: {humidSpecs.portable}</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>Power: {humidSpecs.power}</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={redX} alt='tick svg' />
						<h6 className='tech-text'>
							Remote Control: {humidSpecs.remoteControl}
						</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>Room Size Max: {humidSpecs.roomSize}</h6>
					</div>
					<div className='techspecs-small-container'>
						<img src={blueTick} alt='tick svg' />
						<h6 className='tech-text'>Timer: {humidSpecs.timer}</h6>
					</div>
				</div>
				<div className='tech-img-container'>
					<img src={atmosSpeaker} alt='atmos Speaker' />
				</div>
			</div>
		</div>
	);
};

export default AtmosSpeaker;
