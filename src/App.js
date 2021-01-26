import React, { useState, useEffect } from 'react';
import './styles/styles.css';
import {
	Purifier,
	Heaters,
	Fans,
	Humidifiers,
} from './components/shop-pages/index';
import { Homepage, ShopHome, AboutUs, Contact } from './pages/index';
import { Navbar, Footer, MiddleOfHome } from './components/index';
import { Cart } from './components/checkout-components/index';
import { Switch, Route } from 'react-router-dom';
import { commerce } from './lib/commerce';

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const [hideMiniNav, setHideMiniNav] = useState(true);
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState({});

	//Get the initial shop products save them to state
	const fetchProducts = async () => {
		const { data } = await commerce.products.list();
		setProducts(data);
	};

	//Get the cart, save to state

	const fetchCart = async () => {
		setCart(await commerce.cart.retrieve());
	};

	//update the cart and add items to it

	const handleUpdateCart = async (productId, quantity) => {
		const { cart } = await commerce.cart.add(productId, quantity);
		setCart(cart);
	};

	//Empty the cart (remove all items)

	const handleEmptyCart = async () => {
		try {
			await commerce.cart.delete();
		} catch (err) {
			console.log(err);
		}
		fetchCart();
	};

	useEffect(() => {
		fetchProducts();
		fetchCart();
	}, []);
	return (
		<div className={darkMode ? 'app dark' : 'app'}>
			<Navbar
				setDarkMode={setDarkMode}
				darkMode={darkMode}
				hideMiniNav={hideMiniNav}
				setHideMiniNav={setHideMiniNav}
				cart={cart}
			/>
			<Switch>
				<Route path='/' exact>
					<Homepage />
				</Route>
				<Route path='/shophome' exact>
					<ShopHome />
				</Route>
				<Route exact path='/purifiers'>
					<Purifier
						products={products}
						cart={cart}
						handleUpdateCart={handleUpdateCart}
					/>
				</Route>
				<Route exact path='/humidifiers'>
					<Humidifiers
						products={products}
						cart={cart}
						handleUpdateCart={handleUpdateCart}
					/>
				</Route>
				<Route exact path='/fans'>
					<Fans
						products={products}
						cart={cart}
						handleUpdateCart={handleUpdateCart}
					/>
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
				<Route exact path='/cart'>
					<Cart cart={cart} handleEmptyCart={handleEmptyCart} />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
