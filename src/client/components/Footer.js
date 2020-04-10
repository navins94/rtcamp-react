import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="page-footer font-small bg-light">
			<div className="container text-center text-md-left">
				<div className="row">
					<div className="col-md-3 mx-auto">
						<Link className="navbar-brand" to="/">
							rTcamp
						</Link>
					</div>
					<div className="col-md-3 mx-auto">
						<h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
					</div>
					<div className="col-md-3 mx-auto">
						<h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
					</div>
					<div className="col-md-3 mx-auto">
						<h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
					</div>
				</div>
			</div>
			<div className="footer-copyright text-center py-3 bg-dark text-light">
				© 2020 Copyright
			</div>
		</footer>
	);
};

export default Footer;
