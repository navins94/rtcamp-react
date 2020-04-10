import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchArticle } from '../redux';
import Loader from '../components/Loader';
import Card from '../components/Card';

const HomePage = ({ articlesData, fetchArticle }) => {
	const id = 1;
	useEffect(() => {
		fetchArticle(parseInt(id));
	}, []);

	return articlesData.loading ? (
		<Loader />
	) : articlesData.error ? (
		<div className="alert alert-danger">{articlesData.error}</div>
	) : (
		<div className="container mt-4">
			<div className="row">
				{articlesData.articles.data.map((item, i) => (
					<div className="col-md-6 mb-3" key={i}>
						<Card data={item} />
					</div>
				))}
				<Link
					to="/page/1"
					className="btn btn-primary mb-4"
					style={{ margin: '0 auto' }}
				>
					Check All Articles
				</Link>
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	const id = 1;
	return {
		articlesData: state.articles,
		id
	};
};

const loadData = (store, id) => {
	return store.dispatch(fetchArticle(parseInt(id)));
};

export default {
	component: connect(mapStateToProps, { fetchArticle })(HomePage),
	loadData
};
