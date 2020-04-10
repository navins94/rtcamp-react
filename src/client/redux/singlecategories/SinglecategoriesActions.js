import Api from '../../services/Api';
import {
	FETCH_SINGLE_CATEGORIES_REQUEST,
	FETCH_SINGLE_CATEGORIES_SUCCESS,
	FETCH_SINGLE_CATEGORIES_FAILURE
} from './SinglecategoriesTypes';

export const fetchSingleCategories = (id, page) => {
	return async dispatch => {
		dispatch(fetchCategoriesRequest());
		try {
			const result = await Api.get(
				`/wp-json/wp/v2/posts?_embed&categories=${id}&page=${page}&per_page=10`
			);
			if (result.status == 200) {
				const data = result.data;
				const pages = result.headers['x-wp-totalpages'];
				const categories = { data, pages };
				dispatch(fetchCategoriesSuccess(categories));
			} else {
				dispatch(fetchCategoriesFailure('Something went Wrong'));
			}
		} catch (e) {
			dispatch(fetchCategoriesFailure(e.message));
		}
	};
};

export const fetchCategoriesRequest = () => {
	return {
		type: FETCH_SINGLE_CATEGORIES_REQUEST
	};
};

export const fetchCategoriesSuccess = categories => {
	return {
		type: FETCH_SINGLE_CATEGORIES_SUCCESS,
		payload: {
			categories: categories.data,
			pages: categories.pages
		}
	};
};

export const fetchCategoriesFailure = error => {
	return {
		type: FETCH_SINGLE_CATEGORIES_FAILURE,
		payload: error
	};
};
