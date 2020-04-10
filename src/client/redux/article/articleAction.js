import Api from '../../services/Api';
import {
	FETCH_ARTICLE_REQUEST,
	FETCH_ARTICLE_SUCCESS,
	FETCH_ARTICLE_FAILURE
} from './articleTypes';

export const fetchArticle = id => {
	if (id) {
		var url = `wp-json/wp/v2/posts?_embed&page=${id}&per_page=10`;
	} else {
		var url = 'wp-json/wp/v2/posts?_embed&page=1&per_page=10';
	}
	return async dispatch => {
		dispatch(fetchArticleRequest());
		try {
			const result = await Api.get(url);
			if (result.status == 200) {
				const data = result.data;
				const pages = result.headers['x-wp-totalpages'];
				const article = { data, pages };
				dispatch(fetchArticleSuccess(article));
			} else {
				dispatch(fetchArticleFailure('Something went Wrong'));
			}
		} catch (e) {
			dispatch(fetchArticleFailure(e.message));
		}
	};
};

export const fetchArticleRequest = () => {
	return {
		type: FETCH_ARTICLE_REQUEST
	};
};

export const fetchArticleSuccess = article => {
	return {
		type: FETCH_ARTICLE_SUCCESS,
		payload: article
	};
};

export const fetchArticleFailure = error => {
	return {
		type: FETCH_ARTICLE_FAILURE,
		payload: error
	};
};
