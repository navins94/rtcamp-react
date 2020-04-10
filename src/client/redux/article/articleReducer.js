import {
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE
} from './articleTypes';

const initialState = {
  loading: false,
  articles: [],
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_ARTICLE_SUCCESS:
      return {
        loading: false,
        articles: action.payload,
        error: ''
      };
    case FETCH_ARTICLE_FAILURE:
      return {
        loading: false,
        articles: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
