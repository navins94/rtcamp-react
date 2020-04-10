import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { fetchArticle } from '../redux';
import Loader from '../components/Loader';
import Card from '../components/Card';
import Pagination from '../components/Pagination';

const Page = ({ articlesData, fetchArticle }) => {
	let { id } = useParams();
	useEffect(() => {
		fetchArticle(id);
	}, [id]);

	return articlesData.loading ? (
		<Loader />
	) : articlesData.error ? (
		<div className="alert alert-danger">{articlesData.error}</div>
	) : (
		<div className="container mt-4 mb-4">
			<div className="row">
				{articlesData.articles.data.map((item, i) => (
					<div className="col-md-6 mb-3" key={i}>
						<Card data={item} />
					</div>
				))}
				<Pagination
					currentPage={id}
					totalPages={parseInt(articlesData.articles.pages)}
					url="/page/1"
				/>
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	let { id } = ownProps.match.params;
	return {
		articlesData: state.articles,
		id
	};
};

const loadData = (store, id) => {
	return store.dispatch(fetchArticle(id));
};

export default {
	component: connect(mapStateToProps, { fetchArticle })(Page),
	loadData
};
