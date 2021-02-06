import React from 'react';
import { Link } from 'react-router-dom';

const MiniNav = ({ setHideMiniNav, darkMode }) => {
	return (
		<div>
			<div className='top-mini-nav'>
				{darkMode ? (
					<svg
						width='167'
						height='48'
						viewBox='0 0 167 48'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<g clip-path='url(#clip0)'>
							<path
								d='M26.99 35.8801C24.5439 36.5478 22.0152 36.8643 19.48 36.8201C17.0573 36.8182 14.6516 36.4161 12.36 35.6301C10.0733 34.8757 7.95184 33.6911 6.10999 32.1401C4.24266 30.5589 2.73265 28.5989 1.67999 26.3901C0.509744 23.8889 -0.0652822 21.1507 -8.24267e-06 18.3901C-0.0584696 15.6269 0.526973 12.888 1.70999 10.3901C2.79082 8.19366 4.32043 6.24843 6.19999 4.68008C8.02825 3.14961 10.1234 1.96984 12.38 1.20008C14.6109 0.418648 16.9562 0.0131314 19.32 8.42942e-05C21.5587 -0.0252739 23.7901 0.2608 25.95 0.850085C27.6366 1.28254 29.2435 1.98132 30.71 2.92008L29.11 9.92008C27.9041 9.14671 26.5849 8.56639 25.2 8.20008C23.5754 7.72995 21.8912 7.49754 20.2 7.51008C18.6523 7.49775 17.1148 7.7619 15.66 8.29008C14.2851 8.77618 13.0206 9.53081 11.94 10.5101C10.8653 11.5024 10.0044 12.7036 9.40999 14.0401C8.76761 15.5223 8.45048 17.125 8.47999 18.7401C8.45958 20.2718 8.75931 21.7909 9.35999 23.2001C9.91789 24.503 10.7422 25.6748 11.78 26.6401C12.8316 27.6076 14.0657 28.3555 15.41 28.8401C16.8394 29.3584 18.3495 29.6191 19.87 29.6101C21.5316 29.6925 23.1852 29.33 24.66 28.5601V23.0001H18.55V16.4601H32.47V33.2001C30.8321 34.4366 28.9716 35.3465 26.99 35.8801Z'
								fill='white'
							/>
							<path
								d='M60.36 21.2001C60.3288 21.5142 60.2719 21.8253 60.19 22.1301L56.61 25.7701H44.4C44.5291 26.3204 44.7708 26.8379 45.11 27.2901C45.5223 27.8408 46.0345 28.309 46.62 28.6701C47.3207 29.1116 48.082 29.4485 48.88 29.6701C49.8206 29.9322 50.7936 30.0601 51.77 30.0501C53.0439 30.0512 54.3121 29.8796 55.54 29.5401C56.6379 29.2518 57.6863 28.8 58.65 28.2001L57.88 35.2001C56.7832 35.758 55.6159 36.165 54.41 36.4101C52.9429 36.7129 51.448 36.8604 49.95 36.8501C48.117 36.8502 46.2997 36.5112 44.59 35.8501C42.9699 35.2572 41.4794 34.3574 40.2 33.2001C38.9499 32.0105 37.9562 30.5778 37.28 28.9901C36.5484 27.229 36.1843 25.337 36.21 23.4301C36.175 21.5648 36.5151 19.7115 37.21 17.9801C37.846 16.4286 38.7919 15.0232 39.99 13.8501C41.2031 12.6956 42.6344 11.7946 44.2 11.2001C45.7891 10.5559 47.4853 10.2167 49.2 10.2001C50.7881 10.1748 52.3664 10.4531 53.85 11.0201C55.1503 11.5275 56.3441 12.2737 57.37 13.2201C58.3303 14.118 59.0902 15.2084 59.6 16.4201C60.1257 17.6114 60.4014 18.898 60.41 20.2001C60.41 20.4901 60.39 20.8201 60.36 21.2001ZM51.85 17.4301C51.5202 17.0558 51.1114 16.7594 50.6531 16.5622C50.1949 16.3651 49.6986 16.2721 49.2 16.2901C48.0517 16.2778 46.9411 16.6992 46.09 17.4701C45.2144 18.2197 44.6071 19.2343 44.36 20.3601H52.78C52.7709 20.2804 52.7709 20.1998 52.78 20.1201C52.7904 20.017 52.7904 19.9132 52.78 19.8101C52.7816 18.9248 52.4495 18.0715 51.85 17.4201V17.4301Z'
								fill='white'
							/>
							<path
								d='M79.44 35.9901V20.6901C79.457 20.216 79.372 19.7438 79.1905 19.3055C79.0091 18.8671 78.7356 18.4729 78.3885 18.1495C78.0414 17.8262 77.6289 17.5812 77.1788 17.4311C76.7288 17.2811 76.2517 17.2296 75.78 17.2801C74.729 17.2228 73.6979 17.5821 72.91 18.2801C72.5671 18.5986 72.2954 18.9859 72.1127 19.4168C71.9301 19.8476 71.8405 20.3122 71.85 20.7801V35.9901H63.7V11.0601H71.2V14.4201C71.6976 13.1149 72.6443 12.0299 73.87 11.3601C75.3919 10.5896 77.0856 10.2213 78.79 10.2901C81.1419 10.1523 83.454 10.9421 85.23 12.4901C86.0287 13.2977 86.6481 14.2646 87.0478 15.3278C87.4476 16.3909 87.6187 17.5264 87.55 18.6601V35.9901H79.44Z'
								fill='white'
							/>
							<path
								d='M108.42 17.6701H101.93V26.9101C101.889 27.3343 101.944 27.7624 102.091 28.1623C102.238 28.5623 102.474 28.9239 102.78 29.2201C103.486 29.7424 104.354 29.9976 105.23 29.9401C105.624 29.9447 106.018 29.9246 106.41 29.8801C106.728 29.8503 107.037 29.7586 107.32 29.6101L106.61 35.7201C106.105 35.9314 105.578 36.0889 105.04 36.1901C104.321 36.3204 103.591 36.384 102.86 36.3801C100.477 36.5228 98.1262 35.7782 96.26 34.2901C95.4588 33.5516 94.8309 32.6451 94.4212 31.6354C94.0115 30.6258 93.8301 29.538 93.89 28.4501V17.6701H89.71V11.0601H93.89V5.72006L101.89 2.81006V11.0601H109.89L108.42 17.6701Z'
								fill='white'
							/>
							<path
								d='M138.68 47.2C136.68 47.2 131.82 42.2 131.82 38.01C135.72 37.18 138.68 32.75 138.68 32.75C138.68 32.75 141.68 37.18 145.53 38.01C145.53 42.2 140.69 47.2 138.68 47.2Z'
								fill='#FF5A24'
							/>
							<path
								d='M136.5 18.08C135.824 16.5007 134.83 15.0777 133.58 13.9C132.331 12.7252 130.863 11.8077 129.26 11.2C125.856 9.91999 122.104 9.91999 118.7 11.2C117.098 11.81 115.63 12.7272 114.38 13.9C113.133 15.0803 112.139 16.5026 111.46 18.08C110.732 19.7931 110.367 21.6387 110.39 23.5C110.367 25.3613 110.732 27.2069 111.46 28.92C112.139 30.4974 113.133 31.9197 114.38 33.1C115.63 34.2728 117.098 35.19 118.7 35.8C122.104 37.08 125.856 37.08 129.26 35.8C130.863 35.1923 132.331 34.2749 133.58 33.1C134.83 31.9223 135.824 30.4993 136.5 28.92C137.233 27.2083 137.597 25.3617 137.57 23.5C137.597 21.6383 137.233 19.7917 136.5 18.08ZM129.13 26.2C128.832 26.9319 128.413 27.6081 127.89 28.2C127.384 28.7517 126.776 29.2 126.1 29.52C125.435 29.8248 124.712 29.9817 123.98 29.98C123.232 29.9861 122.491 29.8291 121.81 29.52C121.132 29.2027 120.523 28.7541 120.02 28.2C119.493 27.6165 119.082 26.9377 118.81 26.2C118.507 25.3879 118.358 24.5266 118.37 23.66C118.373 22.9203 118.487 22.1853 118.71 21.48C119.037 21.5613 119.373 21.6016 119.71 21.6C120.859 21.6018 121.964 21.1632 122.8 20.3745C123.635 19.5858 124.136 18.507 124.2 17.36C124.863 17.3779 125.515 17.5275 126.12 17.8C126.796 18.12 127.404 18.5683 127.91 19.12C128.433 19.7119 128.852 20.3881 129.15 21.12C129.763 22.7544 129.763 24.5556 129.15 26.19L129.13 26.2Z'
								fill='white'
							/>
							<path
								d='M165.89 18.08C165.211 16.5026 164.217 15.0803 162.97 13.9C161.72 12.7272 160.252 11.81 158.65 11.2C155.246 9.91999 151.494 9.91999 148.09 11.2C146.484 11.8075 145.012 12.7249 143.76 13.9C142.516 15.0809 141.526 16.5032 140.85 18.08C140.114 19.7909 139.746 21.6376 139.77 23.5C139.746 25.3624 140.114 27.2091 140.85 28.92C141.526 30.4968 142.516 31.9191 143.76 33.1C145.012 34.2751 146.484 35.1925 148.09 35.8C151.494 37.08 155.246 37.08 158.65 35.8C160.252 35.19 161.72 34.2728 162.97 33.1C164.217 31.9197 165.211 30.4974 165.89 28.92C166.618 27.2069 166.982 25.3613 166.96 23.5C166.982 21.6387 166.618 19.7931 165.89 18.08ZM158.51 26.2C158.219 26.9331 157.803 27.6099 157.28 28.2C156.774 28.7517 156.166 29.2 155.49 29.52C154.825 29.8248 154.102 29.9817 153.37 29.98C152.619 29.986 151.875 29.829 151.19 29.52C150.517 29.1998 149.912 28.7514 149.41 28.2C148.887 27.6137 148.477 26.9356 148.2 26.2C147.654 24.7076 147.615 23.0766 148.09 21.56C148.23 21.56 148.37 21.56 148.52 21.56C149.662 21.557 150.76 21.1189 151.59 20.3349C152.421 19.5509 152.921 18.48 152.99 17.34C153.12 17.34 153.24 17.34 153.38 17.34C154.112 17.3383 154.835 17.4952 155.5 17.8C156.176 18.12 156.784 18.5683 157.29 19.12C157.813 19.7101 158.229 20.3869 158.52 21.12C159.147 22.7519 159.147 24.5581 158.52 26.19L158.51 26.2Z'
								fill='white'
							/>
						</g>
						<defs>
							<clipPath id='clip0'>
								<rect width='167' height='48' fill='white' />
							</clipPath>
						</defs>
					</svg>
				) : (
					<svg
						width='167'
						height='48'
						viewBox='0 0 167 48'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<g clipPath='url(#clip0)'>
							<path
								d='M26.99 35.8801C24.5439 36.5478 22.0152 36.8643 19.48 36.8201C17.0573 36.8182 14.6516 36.4161 12.36 35.6301C10.0733 34.8757 7.95184 33.6911 6.10999 32.1401C4.24266 30.5589 2.73265 28.5989 1.67999 26.3901C0.509744 23.8889 -0.0652822 21.1507 -8.24127e-06 18.3901C-0.0584696 15.6269 0.526973 12.888 1.70999 10.3901C2.79082 8.19366 4.32043 6.24843 6.19999 4.68008C8.02825 3.14961 10.1234 1.96984 12.38 1.20008C14.6109 0.418648 16.9562 0.0131314 19.32 8.42911e-05C21.5587 -0.0252739 23.7901 0.2608 25.95 0.850085C27.6366 1.28254 29.2435 1.98132 30.71 2.92008L29.11 9.92008C27.9041 9.14671 26.5849 8.56639 25.2 8.20008C23.5754 7.72995 21.8912 7.49754 20.2 7.51008C18.6523 7.49775 17.1148 7.7619 15.66 8.29008C14.2851 8.77618 13.0206 9.53081 11.94 10.5101C10.8653 11.5024 10.0044 12.7036 9.40999 14.0401C8.76761 15.5223 8.45048 17.125 8.47999 18.7401C8.45958 20.2718 8.75931 21.7909 9.35999 23.2001C9.91789 24.503 10.7422 25.6748 11.78 26.6401C12.8316 27.6076 14.0657 28.3555 15.41 28.8401C16.8394 29.3584 18.3495 29.6191 19.87 29.6101C21.5316 29.6925 23.1852 29.33 24.66 28.5601V23.0001H18.55V16.4601H32.47V33.2001C30.8321 34.4366 28.9716 35.3465 26.99 35.8801Z'
								fill='black'
							/>
							<path
								d='M60.36 21.2001C60.3288 21.5142 60.2719 21.8253 60.19 22.1301L56.61 25.7701H44.4C44.5291 26.3204 44.7708 26.8379 45.11 27.2901C45.5223 27.8408 46.0345 28.309 46.62 28.6701C47.3207 29.1116 48.082 29.4485 48.88 29.6701C49.8206 29.9322 50.7936 30.0601 51.77 30.0501C53.0439 30.0512 54.3121 29.8796 55.54 29.5401C56.6379 29.2518 57.6863 28.8 58.65 28.2001L57.88 35.2001C56.7832 35.758 55.6159 36.165 54.41 36.4101C52.9429 36.7129 51.448 36.8604 49.95 36.8501C48.117 36.8502 46.2997 36.5112 44.59 35.8501C42.9699 35.2572 41.4794 34.3574 40.2 33.2001C38.9499 32.0105 37.9562 30.5778 37.28 28.9901C36.5484 27.229 36.1843 25.337 36.21 23.4301C36.175 21.5648 36.5151 19.7115 37.21 17.9801C37.846 16.4286 38.7919 15.0232 39.99 13.8501C41.2031 12.6956 42.6344 11.7946 44.2 11.2001C45.7891 10.5559 47.4853 10.2167 49.2 10.2001C50.7881 10.1748 52.3664 10.4531 53.85 11.0201C55.1503 11.5275 56.3441 12.2737 57.37 13.2201C58.3303 14.118 59.0902 15.2084 59.6 16.4201C60.1257 17.6114 60.4014 18.898 60.41 20.2001C60.41 20.4901 60.39 20.8201 60.36 21.2001ZM51.85 17.4301C51.5202 17.0558 51.1114 16.7594 50.6531 16.5622C50.1949 16.3651 49.6986 16.2721 49.2 16.2901C48.0517 16.2778 46.9411 16.6992 46.09 17.4701C45.2144 18.2197 44.6071 19.2343 44.36 20.3601H52.78C52.7709 20.2804 52.7709 20.1998 52.78 20.1201C52.7904 20.017 52.7904 19.9132 52.78 19.8101C52.7816 18.9248 52.4495 18.0715 51.85 17.4201V17.4301Z'
								fill='black'
							/>
							<path
								d='M79.44 35.9901V20.6901C79.457 20.216 79.372 19.7438 79.1905 19.3055C79.0091 18.8671 78.7356 18.4729 78.3885 18.1495C78.0414 17.8262 77.6289 17.5812 77.1788 17.4311C76.7288 17.2811 76.2517 17.2296 75.78 17.2801C74.729 17.2228 73.6979 17.5821 72.91 18.2801C72.5671 18.5986 72.2954 18.9859 72.1127 19.4168C71.9301 19.8476 71.8405 20.3122 71.85 20.7801V35.9901H63.7V11.0601H71.2V14.4201C71.6976 13.1149 72.6443 12.0299 73.87 11.3601C75.3919 10.5896 77.0856 10.2213 78.79 10.2901C81.1419 10.1523 83.454 10.9421 85.23 12.4901C86.0287 13.2977 86.6481 14.2646 87.0478 15.3278C87.4476 16.3909 87.6187 17.5264 87.55 18.6601V35.9901H79.44Z'
								fill='black'
							/>
							<path
								d='M108.42 17.6701H101.93V26.9101C101.889 27.3343 101.944 27.7624 102.091 28.1623C102.238 28.5623 102.474 28.9239 102.78 29.2201C103.486 29.7424 104.354 29.9976 105.23 29.9401C105.624 29.9447 106.018 29.9246 106.41 29.8801C106.728 29.8503 107.037 29.7586 107.32 29.6101L106.61 35.7201C106.105 35.9314 105.578 36.0889 105.04 36.1901C104.321 36.3204 103.591 36.384 102.86 36.3801C100.477 36.5228 98.1262 35.7782 96.26 34.2901C95.4588 33.5516 94.8309 32.6451 94.4212 31.6354C94.0115 30.6258 93.8301 29.538 93.89 28.4501V17.6701H89.71V11.0601H93.89V5.72006L101.89 2.81006V11.0601H109.89L108.42 17.6701Z'
								fill='black'
							/>
							<path
								d='M138.68 47.2C136.68 47.2 131.82 42.2 131.82 38.01C135.72 37.18 138.68 32.75 138.68 32.75C138.68 32.75 141.68 37.18 145.53 38.01C145.53 42.2 140.69 47.2 138.68 47.2Z'
								fill='#FF5A24'
							/>
							<path
								d='M136.5 18.08C135.824 16.5007 134.83 15.0777 133.58 13.9C132.331 12.7252 130.863 11.8077 129.26 11.2C125.856 9.91999 122.104 9.91999 118.7 11.2C117.098 11.81 115.63 12.7272 114.38 13.9C113.133 15.0803 112.139 16.5026 111.46 18.08C110.732 19.7931 110.367 21.6387 110.39 23.5C110.367 25.3613 110.732 27.2069 111.46 28.92C112.139 30.4974 113.133 31.9197 114.38 33.1C115.63 34.2728 117.098 35.19 118.7 35.8C122.104 37.08 125.856 37.08 129.26 35.8C130.863 35.1923 132.331 34.2749 133.58 33.1C134.83 31.9223 135.824 30.4993 136.5 28.92C137.233 27.2083 137.597 25.3617 137.57 23.5C137.597 21.6383 137.233 19.7917 136.5 18.08ZM129.13 26.2C128.832 26.9319 128.413 27.6081 127.89 28.2C127.384 28.7517 126.776 29.2 126.1 29.52C125.435 29.8248 124.712 29.9817 123.98 29.98C123.232 29.9861 122.491 29.8291 121.81 29.52C121.132 29.2027 120.523 28.7541 120.02 28.2C119.493 27.6165 119.082 26.9377 118.81 26.2C118.507 25.3879 118.358 24.5266 118.37 23.66C118.373 22.9203 118.487 22.1853 118.71 21.48C119.037 21.5613 119.373 21.6016 119.71 21.6C120.859 21.6018 121.964 21.1632 122.8 20.3745C123.635 19.5858 124.136 18.507 124.2 17.36C124.863 17.3779 125.515 17.5275 126.12 17.8C126.796 18.12 127.404 18.5683 127.91 19.12C128.433 19.7119 128.852 20.3881 129.15 21.12C129.763 22.7544 129.763 24.5556 129.15 26.19L129.13 26.2Z'
								fill='black'
							/>
							<path
								d='M165.89 18.08C165.211 16.5026 164.217 15.0803 162.97 13.9C161.72 12.7272 160.252 11.81 158.65 11.2C155.246 9.91999 151.494 9.91999 148.09 11.2C146.484 11.8075 145.012 12.7249 143.76 13.9C142.516 15.0809 141.526 16.5032 140.85 18.08C140.114 19.7909 139.746 21.6376 139.77 23.5C139.746 25.3624 140.114 27.2091 140.85 28.92C141.526 30.4968 142.516 31.9191 143.76 33.1C145.012 34.2751 146.484 35.1925 148.09 35.8C151.494 37.08 155.246 37.08 158.65 35.8C160.252 35.19 161.72 34.2728 162.97 33.1C164.217 31.9197 165.211 30.4974 165.89 28.92C166.618 27.2069 166.982 25.3613 166.96 23.5C166.982 21.6387 166.618 19.7931 165.89 18.08ZM158.51 26.2C158.219 26.9331 157.803 27.6099 157.28 28.2C156.774 28.7517 156.166 29.2 155.49 29.52C154.825 29.8248 154.102 29.9817 153.37 29.98C152.619 29.986 151.875 29.829 151.19 29.52C150.517 29.1998 149.912 28.7514 149.41 28.2C148.887 27.6137 148.477 26.9356 148.2 26.2C147.654 24.7076 147.615 23.0766 148.09 21.56C148.23 21.56 148.37 21.56 148.52 21.56C149.662 21.557 150.76 21.1189 151.59 20.3349C152.421 19.5509 152.921 18.48 152.99 17.34C153.12 17.34 153.24 17.34 153.38 17.34C154.112 17.3383 154.835 17.4952 155.5 17.8C156.176 18.12 156.784 18.5683 157.29 19.12C157.813 19.7101 158.229 20.3869 158.52 21.12C159.147 22.7519 159.147 24.5581 158.52 26.19L158.51 26.2Z'
								fill='black'
							/>
						</g>
						<defs>
							<clipPath id='clip0'>
								<rect width='167' height='48' fill='white' />
							</clipPath>
						</defs>
					</svg>
				)}
				<svg
					onClick={() => {
						setHideMiniNav(true);
					}}
					id='bars'
					width='40'
					height='40'
					viewBox='0 0 40 40'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<g clipPath='url(#clip0)'>
						<path
							d='M40 33.6467L26.1417 19.965L39.8083 6.16167L33.6467 0L19.96 13.8633L6.11 0.191667L0 6.30167L13.8683 20.035L0.191667 33.89L6.30167 40L20.03 26.1367L33.8383 39.8083L40 33.6467Z'
							fill='black'
						/>
					</g>
					<defs>
						<clipPath id='clip0'>
							<rect width='40' height='40' fill='white' />
						</clipPath>
					</defs>
				</svg>
			</div>
			<div className='mini-nav-items'>
				<ul>
					<Link
						to='/'
						onClick={() => {
							setHideMiniNav(true);
						}}>
						<li>Home</li>
					</Link>
					<Link
						to='/about-us'
						onClick={() => {
							setHideMiniNav(true);
						}}>
						<li>About Us</li>
					</Link>
					<Link
						to='shophome'
						onClick={() => {
							setHideMiniNav(true);
						}}>
						<li>Shop</li>
					</Link>
					<Link
						to='cart'
						onClick={() => {
							setHideMiniNav(true);
						}}>
						<li>Checkout</li>
					</Link>
					<Link
						to='contact-us'
						onClick={() => {
							setHideMiniNav(true);
						}}>
						<li>Contact Us</li>
					</Link>
				</ul>
				<div className='mini-nav-social'>
					<a
						href='https://www.facebook.com/Gentoo-Air-104268575010431'
						target='_blank'
						rel='noopener noreferrer'>
						<svg
							width='30'
							height='30'
							viewBox='0 0 30 30'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<g clipPath='url(#clip0)'>
								<path
									d='M28.3438 0H1.65625C0.74125 0 0 0.74125 0 1.65625V28.345C0 29.2588 0.74125 30 1.65625 30H16.025V18.3825H12.115V13.855H16.025V10.5163C16.025 6.64125 18.3913 4.53125 21.8488 4.53125C23.505 4.53125 24.9275 4.655 25.3425 4.71V8.76L22.945 8.76125C21.065 8.76125 20.7013 9.655 20.7013 10.965V13.8562H25.185L24.6012 18.3837H20.7013V30H28.3463C29.2588 30 30 29.2587 30 28.3438V1.65625C30 0.74125 29.2587 0 28.3438 0V0Z'
									fill='#D3D3D3'
								/>
							</g>
							<defs>
								<clipPath id='clip0'>
									<rect width='30' height='30' fill='white' />
								</clipPath>
							</defs>
						</svg>
					</a>

					<a
						href='https://twitter.com/AirGentoo'
						target='_blank'
						rel='noopener noreferrer'>
						<svg
							width='30'
							height='30'
							viewBox='0 0 30 30'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M23.75 0H6.25C2.79875 0 0 2.79875 0 6.25V23.75C0 27.2013 2.79875 30 6.25 30H23.75C27.2025 30 30 27.2013 30 23.75V6.25C30 2.79875 27.2025 0 23.75 0ZM23.5763 11.5463C23.8375 17.3175 19.5338 23.7525 11.9137 23.7525C9.59625 23.7525 7.44 23.0738 5.62375 21.9088C7.80125 22.165 9.97375 21.5612 11.6988 20.21C9.9025 20.1762 8.3875 18.99 7.86625 17.36C8.51 17.4825 9.1425 17.4462 9.71875 17.29C7.745 16.8937 6.38375 15.1162 6.4275 13.215C6.98 13.5225 7.61375 13.7075 8.285 13.7288C6.45875 12.5075 5.94125 10.095 7.015 8.25C9.03875 10.7325 12.0625 12.3663 15.4725 12.5375C14.8738 9.97125 16.8225 7.5 19.4712 7.5C20.65 7.5 21.7175 7.9975 22.465 8.79625C23.4 8.6125 24.2788 8.27125 25.0725 7.80125C24.765 8.76 24.115 9.56375 23.2687 10.0712C24.0987 9.97125 24.89 9.75125 25.625 9.425C25.0763 10.245 24.38 10.9675 23.5763 11.5463Z'
								fill='#D3D3D3'
							/>
						</svg>
					</a>

					<a
						href='https://www.instagram.com/gentooair/?hl=en'
						target='_blank'
						rel='noopener noreferrer'>
						<svg
							width='30'
							height='30'
							viewBox='0 0 30 30'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M19.0413 6.86C17.9875 6.8125 17.67 6.8025 15 6.8025C12.33 6.8025 12.0137 6.8125 10.96 6.86C8.2475 6.98375 6.98375 8.26875 6.86125 10.9587C6.8125 12.0138 6.80125 12.33 6.80125 15C6.80125 17.67 6.8125 17.9862 6.86 19.0413C6.98375 21.7262 8.2425 23.0162 10.9587 23.14C12.0125 23.1875 12.33 23.1987 15 23.1987C17.6712 23.1987 17.9875 23.1888 19.0413 23.1413C21.7537 23.0175 23.0162 21.73 23.14 19.0425C23.1875 17.9875 23.1975 17.6712 23.1975 15.0013C23.1975 12.3313 23.1875 12.015 23.14 10.9613C23.0162 8.27 21.7513 6.98375 19.0413 6.86ZM15 20.135C12.1637 20.135 9.865 17.8363 9.865 15C9.865 12.1637 12.165 9.865 15 9.865C17.835 9.865 20.135 12.1637 20.135 15C20.135 17.8363 17.8363 20.135 15 20.135ZM20.3387 10.8625C19.6762 10.8625 19.1388 10.325 19.1388 9.6625C19.1388 9 19.6762 8.4625 20.3387 8.4625C21.0012 8.4625 21.5388 9 21.5388 9.6625C21.5388 10.325 21.0012 10.8625 20.3387 10.8625ZM18.3337 15C18.3337 16.8412 16.8412 18.3337 15 18.3337C13.1587 18.3337 11.6663 16.8412 11.6663 15C11.6663 13.1587 13.1587 11.6663 15 11.6663C16.8412 11.6663 18.3337 13.1587 18.3337 15ZM23.75 0H6.25C2.79875 0 0 2.79875 0 6.25V23.75C0 27.2013 2.79875 30 6.25 30H23.75C27.2025 30 30 27.2013 30 23.75V6.25C30 2.79875 27.2025 0 23.75 0ZM24.94 19.1225C24.775 22.7588 22.7512 24.7737 19.1237 24.94C18.0562 24.9887 17.7162 25 15 25C12.2837 25 11.945 24.9887 10.8775 24.94C7.2425 24.7737 5.2275 22.755 5.06 19.1225C5.01125 18.0563 5 17.7162 5 15C5 12.285 5.01125 11.9437 5.06 10.8775C5.2275 7.2425 7.245 5.22625 10.8775 5.06125C11.945 5.01125 12.2837 5 15 5C17.7162 5 18.0562 5.01125 19.1237 5.06C22.7587 5.22625 24.7775 7.24875 24.94 10.8763C24.9887 11.9438 25 12.285 25 15C25 17.7162 24.9887 18.0563 24.94 19.1225Z'
								fill='#D3D3D3'
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
};

export default MiniNav;
