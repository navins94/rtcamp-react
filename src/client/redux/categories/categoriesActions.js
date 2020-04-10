import Api from '../../services/Api';
import {
	FETCH_CATEGORIES_REQUEST,
	FETCH_CATEGORIES_SUCCESS,
	FETCH_CATEGORIES_FAILURE
} from './categoriesTypes';

export const fetchCategories = () => {
	return async dispatch => {
		dispatch(fetchCategoriesRequest());
		try {
			const result = await Api.get(
				`/wp-json/wp/v2/categories?_embed&page=${1}&per_page=10`
			);
			if (result.status == 200) {
				const categories = result.data;
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
		type: FETCH_CATEGORIES_REQUEST
	};
};

export const fetchCategoriesSuccess = categories => {
	return {
		type: FETCH_CATEGORIES_SUCCESS,
		payload: categories
	};
};

export const fetchCategoriesFailure = error => {
	return {
		type: FETCH_CATEGORIES_FAILURE,
		payload: error
	};
};
