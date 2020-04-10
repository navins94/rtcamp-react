import React from 'react';
import PropTypes from 'prop-types';

const NotFoundPage = ({ staticContext = {} }) => {
	staticContext.notFound = true;
	return (
		<div className="container">
			<div className="row justify-content-center flex-column">
				<h1>Page Not Found!!!</h1>
				<p>Please try again!</p>
			</div>
		</div>
	);
};

export default {
	component: NotFoundPage
};
