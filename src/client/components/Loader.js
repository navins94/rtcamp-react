import React from 'react';
import { Link } from 'react-router-dom';

const Loader = () => {
	return (
		<div className="container h-100">
			<div className="row justify-content-center align-self-center h-100">
				<div className="spinner-border text-primary"></div>
			</div>
		</div>
	);
};

export default Loader;
