import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<nav className="navbar navbar-light bg-light navbar-expand-lg">
				<div className="container">
					<Link className="navbar-brand" to="/">
						rTcamp
					</Link>
					<ul
						className="navbar-nav my-navbar-nav mr-auto"
						style={{ flexDirection: 'row' }}
					>
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/categories" className="nav-link">
								Category
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
