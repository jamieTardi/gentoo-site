import React from 'react';
import { Link } from 'react-router-dom';

const ShopHome2 = () => {
	const shopInfo = [
		{
			title: 'Purifiers',
			text:
				'Click below to go to our shop for purifiers, in here you will be able to see a selection of our best purifiers and all of the technical specs associated with them.',
			link: '/purifiers',
		},
		{
			title: 'Cooling Fans',
			text:
				'Click below to go to our shop for cooling fans, in here you will be able to see a selection of our best cooling fans and all of the technical specs associated with them.',
			link: '/fans',
		},
		{
			title: 'Humidifiers',
			text:
				'Click below to go to our shop for humidifiers, in here you will be able to see a selection of our best humidifiers and all of the technical specs associated with them.',
			link: '/humidifiers',
		},
		{
			title: 'Heaters Coming soon',
			text:
				'Click below to go to our shop for heaters, in here you will be able to see a selection of our best heaters and all of the technical specs associated with them.',
			link: '/',
		},
	];
	return (
		<>
			<div className='pimg1'>
				<div className='ptext'>
					<span className='border'>Purifiers</span>
					<h5>
						Click below to go to our shop for purifiers, in here you will be
						able to see a selection of our best purifiers and all of the
						technical specs associated with them.
					</h5>
					<Link>
						<button className='shop-btn'>Shop Now</button>
					</Link>
				</div>
			</div>
			<section className='section'>
				<h2>Section one</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eveniet,
					dolor possimus assumenda fugiat commodi sint, dicta quia blanditiis
					suscipit ipsam sequi. Tenetur ad dolore ab ipsum cum minus et rerum
					quaerat odio expedita quae itaque dolor voluptas hic laboriosam, alias
					quo ea repellendus aut laborum, quibusdam ratione voluptatibus
					obcaecati! Tenetur sapiente, pariatur minus quas culpa perferendis
					nesciunt aut corrupti nisi adipisci quod odit ab repudiandae, repellat
					blanditiis a quaerat cupiditate, distinctio hic nostrum molestiae
					laborum tempora at. Maxime recusandae obcaecati, cum optio officiis
					cupiditate earum asperiores beatae ipsum similique libero iste
					aperiam, ut, placeat nobis labore sint dolores culpa.
				</p>
			</section>

			<div className='pimg2'>
				<div className='ptext'>
					<span className='border'>Image 2 Text</span>
				</div>
			</div>

			<section className='section'>
				<h2>Section Two</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eveniet,
					dolor possimus assumenda fugiat commodi sint, dicta quia blanditiis
					suscipit ipsam sequi. Tenetur ad dolore ab ipsum cum minus et rerum
					quaerat odio expedita quae itaque dolor voluptas hic laboriosam, alias
					quo ea repellendus aut laborum, quibusdam ratione voluptatibus
					obcaecati! Tenetur sapiente, pariatur minus quas culpa perferendis
					nesciunt aut corrupti nisi adipisci quod odit ab repudiandae, repellat
					blanditiis a quaerat cupiditate, distinctio hic nostrum molestiae
					laborum tempora at. Maxime recusandae obcaecati, cum optio officiis
					cupiditate earum asperiores beatae ipsum similique libero iste
					aperiam, ut, placeat nobis labore sint dolores culpa.
				</p>
			</section>

			<div className='pimg3'>
				<div className='ptext'>
					<span className='border'>Image 3 Text</span>
				</div>
			</div>

			<section className='section'>
				<h2>Section Three</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eveniet,
					dolor possimus assumenda fugiat commodi sint, dicta quia blanditiis
					suscipit ipsam sequi. Tenetur ad dolore ab ipsum cum minus et rerum
					quaerat odio expedita quae itaque dolor voluptas hic laboriosam, alias
					quo ea repellendus aut laborum, quibusdam ratione voluptatibus
					obcaecati! Tenetur sapiente, pariatur minus quas culpa perferendis
					nesciunt aut corrupti nisi adipisci quod odit ab repudiandae, repellat
					blanditiis a quaerat cupiditate, distinctio hic nostrum molestiae
					laborum tempora at. Maxime recusandae obcaecati, cum optio officiis
					cupiditate earum asperiores beatae ipsum similique libero iste
					aperiam, ut, placeat nobis labore sint dolores culpa.
				</p>
			</section>

			<div className='pimg4'>
				<div className='ptext'>
					<span className='border'>Our Products</span>
				</div>
			</div>
		</>
	);
};

export default ShopHome2;
