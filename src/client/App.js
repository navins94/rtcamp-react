import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import Footer from './components/Footer';

const App = ({ route }) => {
	return (
		<div>
			<Header />
			<div className="container">{renderRoutes(route.routes)}</div>
			<Footer />
		</div>
	);
};

export default {
	component: App
};
