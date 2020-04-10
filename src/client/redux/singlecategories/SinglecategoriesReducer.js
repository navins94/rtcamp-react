import {
	FETCH_SINGLE_CATEGORIES_REQUEST,
	FETCH_SINGLE_CATEGORIES_SUCCESS,
	FETCH_SINGLE_CATEGORIES_FAILURE,
} from './SinglecategoriesTypes';

const initialState = {
	singleloading: false,
	singlecategories: [],
	totalpages: 0,
	singleerror: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SINGLE_CATEGORIES_REQUEST:
			return {
				...state,
				singleloading: true,
			};
		case FETCH_SINGLE_CATEGORIES_SUCCESS:
			return {
				singleloading: false,
				singlecategories: action.payload.categories,
				totalpages: action.payload.pages,
				singleerror: '',
			};
		case FETCH_SINGLE_CATEGORIES_FAILURE:
			return {
				singleloading: false,
				singlecategories: [],
				singleerror: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
