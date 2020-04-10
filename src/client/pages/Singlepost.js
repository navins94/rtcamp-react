import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import Loader from '../components/Loader';
import { fetchSinglePost } from '../redux';
import PropTypes from 'prop-types';

const Singlepost = ({ postData, fetchSinglePost }) => {
	let { id } = useParams();
	useEffect(() => {
		window.scrollTo(0, 0);
		fetchSinglePost(id);
	}, []);
	if (postData.post != '') {
		let indiaTime = new Date(postData.post.date).toLocaleString('en-US', {
			timeZone: 'Asia/Kolkata'
		});
		indiaTime = new Date(indiaTime);
		return postData.singleloading ? (
			<Loader />
		) : postData.singleerror ? (
			<div className="alert alert-danger">{postData.singleerror}</div>
		) : (
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h1 className="mt-4">{postData.post.title.rendered}</h1>
						<p>Posted on {indiaTime.toLocaleString()}</p>
						<img
							className="img-fluid mx-auto d-block"
							src={
								postData.post._embedded['wp:featuredmedia']
									? postData.post._embedded['wp:featuredmedia']['0'].source_url
									: 'https://via.placeholder.com/1000x600'
							}
							alt=""
						/>

						<div
							className="lead"
							dangerouslySetInnerHTML={{
								__html: postData.post.content.rendered
							}}
						></div>
					</div>
				</div>
			</div>
		);
	} else {
		return <Loader />;
	}
};

const mapStateToProps = (state, ownProps) => {
	let { id } = ownProps.match.params;
	return {
		postData: state.post,
		id
	};
};

const loadData = (store, id) => {
	return store.dispatch(fetchSinglePost(id));
};

Singlepost.propTypes = {
	postData: PropTypes.objectOf(PropTypes.any),
	fetchSinglePost: PropTypes.func
};

Singlepost.defaultProps = {
	postData: [],
	fetchSinglePost: null
};

export default {
	component: connect(mapStateToProps, { fetchSinglePost })(Singlepost),
	loadData
};
