import React from 'react';
import './styles/styles.css';
import {
	Purifier,
	Heaters,
	HairDryers,
	Toasters,
} from './components/shop-pages/index';
import { Homepage, ShopHome } from './pages/index';
import { Navbar, Footer, MiddleOfHome } from './components/index';
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className='app'>
			<Navbar />
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
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
