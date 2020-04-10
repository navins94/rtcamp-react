import Api from '../../services/Api';
import {
	FETCH_SINGLE_POST_REQUEST,
	FETCH_SINGLE_POST_SUCCESS,
	FETCH_SINGLE_POST_FAILURE
} from './SinglepostTypes';

export const fetchSinglePost = id => {
	return async dispatch => {
		dispatch(fetchSinglePostRequest());
		try {
			const result = await Api.get(`wp-json/wp/v2/posts/${id}?_embed`);
			if (result.status == 200) {
				const posts = result.data;
				dispatch(fetchSinglePostSuccess(posts));
			} else {
				dispatch(fetchSinglePostFailure('Something went Wrong'));
			}
		} catch (e) {
			dispatch(fetchSinglePostFailure(e.message));
		}
	};
};

export const fetchSinglePostRequest = () => {
	return {
		type: FETCH_SINGLE_POST_REQUEST
	};
};

export const fetchSinglePostSuccess = post => {
	return {
		type: FETCH_SINGLE_POST_SUCCESS,
		payload: post
	};
};

export const fetchSinglePostFailure = error => {
	return {
		type: FETCH_SINGLE_POST_FAILURE,
		payload: error
	};
};
