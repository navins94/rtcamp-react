import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router';
import { connect } from 'react-redux';
import { fetchSingleCategories } from '../redux';
import Card from '../components/Card';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';
import PropTypes from 'prop-types';

const SingleCategory = ({ SingleCategoriesData, fetchSingleCategories }) => {
	let { id, page } = useParams();
	let { pathname } = useLocation();
	useEffect(() => {
		fetchSingleCategories(id, page);
	}, [page]);

	return SingleCategoriesData.singleloading ? (
		<Loader />
	) : SingleCategoriesData.singleerror ? (
		<div className="alert alert-danger">{SingleCategoriesData.singleerror}</div>
	) : (
		<div className="container mb-4 mt-4">
			{SingleCategoriesData.singlecategories.length > 0 ? (
				<div className="row">
					{SingleCategoriesData.singlecategories.map((item, i) => (
						<div className="col-md-6 mb-3" key={i}>
							<Card data={item} />
						</div>
					))}
					<Pagination
						currentPage={page}
						totalPages={SingleCategoriesData.totalpages}
						url={pathname}
					/>
				</div>
			) : (
				<div className="row justify-content-center">
					<h2>No Posts Found</h2>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	let { id } = ownProps.match.params;
	let { page } = ownProps.match.params;
	return {
		SingleCategoriesData: state.singlecategories,
		id,
		page
	};
};

const loadData = (store, id, page) => {
	console.log(store);
	return store.dispatch(fetchSingleCategories(id, page));
};

SingleCategory.propTypes = {
	SingleCategoriesData: PropTypes.objectOf(PropTypes.any),
	fetchSingleCategories: PropTypes.func
};

SingleCategory.defaultProps = {
	SingleCategoriesData: [],
	fetchSingleCategories: null
};

export default {
	component: connect(mapStateToProps, { fetchSingleCategories })(
		SingleCategory
	),
	loadData
};
