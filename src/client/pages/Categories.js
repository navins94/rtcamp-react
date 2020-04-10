import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../redux';
import Loader from '../components/Loader';
import PropTypes from 'prop-types';

const Categories = ({ categoriesData, fetchCategories }) => {
	useEffect(() => {
		fetchCategories();
	}, []);

	return categoriesData.loading ? (
		<Loader />
	) : categoriesData.error ? (
		<div className="alert alert-danger">{categoriesData.error}</div>
	) : (
		<div className="container mb-4 mt-4">
			<div className="row flex-column">
				<h2>Categories</h2>
				<ul className="list-group">
					{categoriesData.categories.map((item, i) => (
						<li key={i} className="list-group-item">
							<Link to={'/category/' + item.id + '/page/1'}>{item.name}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		categoriesData: state.categories
	};
};

const loadData = store => {
	return store.dispatch(fetchCategories());
};

Categories.propTypes = {
	categoriesData: PropTypes.objectOf(PropTypes.any),
	fetchCategories: PropTypes.func
};

Categories.defaultProps = {
	categoriesData: [],
	fetchCategories: null
};

export default {
	component: connect(mapStateToProps, { fetchCategories })(Categories),
	loadData
};
