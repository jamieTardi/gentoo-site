import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
	<React.StrictMode>
		<ScrollToTop>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ScrollToTop>
	</React.StrictMode>,
	document.getElementById('root'),
);
