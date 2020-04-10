import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = props => {
	let NavLinks;
	const { currentPage, totalPages, url } = props;
	let next = parseInt(currentPage) + 1;
	let previous = parseInt(currentPage) - 1;
	let parentPath = url.slice(0, url.length - 1);
	if (currentPage > 1 && currentPage < totalPages) {
		NavLinks = (
			<div className="nav-links text-center">
				<Link
					to={parentPath + previous}
					className="page-numbers btn btn-primary mr-2"
				>
					Previous
				</Link>
				<span className="page-numbers current ">
					<span className="meta-nav screen-reader-text">Page </span>
					{currentPage}
				</span>
				<Link
					to={parentPath + next}
					className="page-numbers btn btn-primary ml-2"
				>
					Next
				</Link>
			</div>
		);
	} else if (currentPage == 1 && currentPage < totalPages) {
		NavLinks = (
			<div className="nav-links text-center">
				<span className="page-numbers ">
					<span className="meta-nav screen-reader-text">Page </span>
					{currentPage}
				</span>
				<Link
					to={parentPath + next}
					className="page-numbers btn btn-primary ml-2"
				>
					Next
				</Link>
			</div>
		);
	} else if (currentPage > 1 && currentPage == totalPages) {
		NavLinks = (
			<div className="nav-links text-center">
				<Link
					to={parentPath + previous}
					className="page-numbers btn btn-primary mr-2"
				>
					Previous
				</Link>
				<span className="page-numbers ">
					<span className="meta-nav screen-reader-text">Page </span>
					{currentPage}
				</span>
			</div>
		);
	}

	return <div className="col-md-12">{NavLinks}</div>;
};

export default Pagination;
