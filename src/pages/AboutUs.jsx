import React from 'react';
import Hero from '../assets/images/living-room.webp';

const AboutUs = () => {
	return (
		<div className='about-us-container'>
			<img src={Hero} alt='Living Room Background' />
			<div className='about-us-card'>
				<div className='about-us-title'>
					<h2>About Us</h2>
				</div>
				<div className='about-us-content'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
						voluptas aspernatur! Et dignissimos eius veniam dolore pariatur
						atque corporis ut excepturi cupiditate optio magni, aspernatur
						beatae incidunt maxime eum praesentium quod, impedit suscipit, sint
						ab laudantium laborum nulla tenetur earum. Nulla consectetur
						accusamus dolores animi aspernatur, officiis rem odio ratione vitae,
						nesciunt architecto at ipsam. Aliquid labore ducimus, tempore quidem
						sapiente, sequi exercitationem aperiam nam consectetur dolor tempora
						necessitatibus est architecto fuga, incidunt ratione porro iure illo
						veniam deleniti libero non voluptas consequatur neque. Repellendus
						fugit saepe commodi ex, blanditiis neque, maiores delectus explicabo
						ad soluta odit temporibus natus facilis?
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
