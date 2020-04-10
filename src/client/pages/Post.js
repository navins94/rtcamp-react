import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchArticle } from '../redux';
import Loader from '../components/Loader';
import Card from '../components/Card';
import PropTypes from 'prop-types';

const Post = ({ articlesData, fetchArticle, ...props }) => {
	const id = props.id;
	useEffect(() => {
		fetchArticle(id);
	}, [id]);

	return <div>ss</div>;
};

const mapStateToProps = state => {
	return {
		articlesData: state.articles
	};
};

const loadData = (store, id) => {
	return store.dispatch(fetchArticle(id));
};

Post.propTypes = {
	articlesData: PropTypes.objectOf(PropTypes.any),
	fetchArticle: PropTypes.func
};

Post.defaultProps = {
	articlesData: [],
	fetchArticle: null
};

export default {
	component: connect(mapStateToProps, { fetchArticle })(Post),
	loadData
};
