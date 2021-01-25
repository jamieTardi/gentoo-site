import React, { useState } from 'react';
import './styles/styles.css';
import {
	Purifier,
	Heaters,
	HairDryers,
	Toasters,
} from './components/shop-pages/index';
import { Homepage, ShopHome, AboutUs, Contact } from './pages/index';
import { Navbar, Footer, MiddleOfHome } from './components/index';
import { Switch, Route } from 'react-router-dom';

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const [hideMiniNav, setHideMiniNav] = useState(true);
	return (
		<div className={darkMode ? 'app dark' : 'app'}>
			<Navbar
				setDarkMode={setDarkMode}
				darkMode={darkMode}
				hideMiniNav={hideMiniNav}
				setHideMiniNav={setHideMiniNav}
			/>
			<Switch>
				<Route path='/' exact>
					<Homepage />
				</Route>
				<Route path='/shophome' exact>
					<ShopHome />
				</Route>
				<Route exact path='/purifiers'>
					<Purifier />
				</Route>
				<Route exact path='/toasters'>
					<Toasters />
				</Route>
				<Route exact path='/hair-dryers'>
					<HairDryers />
				</Route>
				<Route exact path='/heaters'>
					<Heaters />
				</Route>
				<Route exact path='/middle'>
					<MiddleOfHome />
				</Route>
				<Route exact path='/about-us'>
					<AboutUs />
				</Route>
				<Route exact path='/contact-us'>
					<Contact />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
