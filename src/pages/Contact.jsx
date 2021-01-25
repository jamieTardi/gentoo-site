import React from 'react';
import { Form } from '../components/page-components';
import fanVideo from '../assets/videos/fan-video.mp4';

const Contact = () => {
	return (
		<div className='contact-container'>
			<video autoPlay muted loop className='fan-video'>
				<source src={fanVideo} type='video/mp4' />
			</video>
			<div className='form'>
				<Form />
			</div>
		</div>
	);
};

export default Contact;
