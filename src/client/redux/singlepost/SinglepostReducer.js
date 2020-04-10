import {
	FETCH_SINGLE_POST_REQUEST,
	FETCH_SINGLE_POST_SUCCESS,
	FETCH_SINGLE_POST_FAILURE,
} from './SinglepostTypes';

const initialState = {
	singleloading: false,
	post: [],
	singleerror: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SINGLE_POST_REQUEST:
			return {
				...state,
				singleloading: true,
			};
		case FETCH_SINGLE_POST_SUCCESS:
			return {
				singleloading: false,
				post: action.payload,
				singleerror: '',
			};
		case FETCH_SINGLE_POST_FAILURE:
			return {
				singleloading: false,
				post: [],
				singleerror: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
