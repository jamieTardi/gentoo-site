import React, { useState, useEffect } from 'react';
import './styles/styles.css';
import {
	Purifier,
	Heaters,
	Fans,
	Humidifiers,
} from './components/shop-pages/index';
import {
	Homepage,
	ShopHome,
	AboutUs,
	Contact,
	PurifierTech,
	FanTech,
	HumidTech,
	Terms,
} from './pages/index';
import { Navbar, Footer, MiddleOfHome, Modal } from './components/index';
import {
	Cart,
	Checkout,
	Conformation,
} from './components/checkout-components/index';
//technical spec imports
import {
	WinixZero,
	WinixZeroN,
	WinixZeroPro,
	WinixZeroCompact,
	BonecoF100,
	BonecoF120,
	BonecoF220,
	BonecoF230,
	AtmosSpeaker,
	U300,
} from './components/sub-pages/index';
import { Switch, Route } from 'react-router-dom';
import { commerce } from './lib/commerce';
import createHistory from 'history/createBrowserHistory';

function App() {
	const [hideModal, setHideModal] = useState(true);
	const [darkMode, setDarkMode] = useState(false);
	const [hideMiniNav, setHideMiniNav] = useState(true);
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState({});
	const [checkoutToken, setCheckoutToken] = useState({});
	const [order, setOrder] = useState({});
	const [shippingCost, setShippingCost] = useState('');

	//browser history
	const history = createHistory();
	history.listen((location, action) => {
		window.scrollTo(0, 0);
	});

	//Get the initial shop products save them to state
	const fetchProducts = async () => {
		const { data } = await commerce.products.list();
		setProducts(data);
	};

	//Get the cart, save to state

	const fetchCart = async () => {
		setCart(await commerce.cart.retrieve());
	};

	//update the cart

	const handleUpdateCart = async (productId, quantity) => {
		try {
			const { cart } = await commerce.cart.add(productId, quantity);
			setCart(cart);
			setHideModal(false);
		} catch (err) {
			console.log(err);
		}
	};

	//Function to add more of the same items to cart.

	const handleUpdateCartQty = async (productId, quantity) => {
		try {
			const { cart } = await commerce.cart.update(productId, { quantity });
			setCart(cart);
		} catch (err) {
			console.log(err);
		}
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

	const refreshCart = async () => {
		const newCart = await commerce.cart.refresh();
		setCart(newCart);
	};

	//Capturing the checkout

	const handleCaptureCheckout = async (tokenId, newOrder) => {
		try {
			const incomingOrder = await commerce.checkout.capture(tokenId, newOrder);
			setOrder(incomingOrder);
			refreshCart();
		} catch (e) {
			console.log(e);
		}
	};

	//vat calculation

	const vatPrice = (nonVatPrice) => {
		let vatCalc = nonVatPrice * 0.2;
		let vatAdded = vatCalc + nonVatPrice;
		return vatAdded.toFixed(2);
	};

	useEffect(() => {
		fetchProducts();
		fetchCart();
	}, []);
	return (
		<div className={darkMode ? 'app dark' : 'app'}>
			<Modal hideModal={hideModal} setHideModal={setHideModal} />
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
						vatPrice={vatPrice}
					/>
				</Route>
				<Route exact path='/humidifiers'>
					<Humidifiers
						products={products}
						cart={cart}
						handleUpdateCart={handleUpdateCart}
						vatPrice={vatPrice}
					/>
				</Route>
				<Route exact path='/fans'>
					<Fans
						products={products}
						cart={cart}
						handleUpdateCart={handleUpdateCart}
						vatPrice={vatPrice}
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
					<Cart
						cart={cart}
						handleEmptyCart={handleEmptyCart}
						handleUpdateCartQty={handleUpdateCartQty}
						vatPrice={vatPrice}
					/>
				</Route>
				<Route exact path='/checkout'>
					<Checkout
						cart={cart}
						setCheckoutToken={setCheckoutToken}
						handleCaptureCheckout={handleCaptureCheckout}
						checkoutToken={checkoutToken}
						refreshCart={refreshCart}
						order={order}
						shippingCost={shippingCost}
						setShippingCost={setShippingCost}
						vatPrice={vatPrice}
					/>
				</Route>
				<Route exact path='/conformation'>
					<Conformation />
				</Route>
				<Route exact path='/terms-and-conditions'>
					<Terms />
				</Route>
				{/* subpages */}
				<Route exact path='/winix-zero-compact'>
					<WinixZeroCompact />
				</Route>
				<Route exact path='/winix-zero'>
					<WinixZero />
				</Route>
				<Route exact path='/winix-zero-n'>
					<WinixZeroN />
				</Route>
				<Route exact path='/winix-zero-pro'>
					<WinixZeroPro />
				</Route>
				<Route exact path='/purifier-technical-spec'>
					<PurifierTech />
				</Route>
				<Route exact path='/boneco-f100'>
					<BonecoF100 />
				</Route>
				<Route exact path='/boneco-f120'>
					<BonecoF120 />
				</Route>
				<Route exact path='/boneco-f220'>
					<BonecoF220 />
				</Route>
				<Route exact path='/boneco-f230'>
					<BonecoF230 />
				</Route>
				<Route exact path='/fan-technical-spec'>
					<FanTech />
				</Route>
				<Route exact path='/atmos-speaker'>
					<AtmosSpeaker />
				</Route>
				<Route exact path='/u300'>
					<U300 />
				</Route>
				<Route exact path='/humidifiers-technical-specs'>
					<HumidTech />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
