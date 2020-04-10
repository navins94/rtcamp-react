import { combineReducers } from 'redux';
import articleReducer from './article/articleReducer';
import SinglepostReducer from './singlepost/SinglepostReducer';
import categoriesReducer from './categories/categoriesReducer';
import SingleCategoriesReducer from './singlecategories/SinglecategoriesReducer';

const rootReducer = combineReducers({
	articles: articleReducer,
	post: SinglepostReducer,
	categories: categoriesReducer,
	singlecategories: SingleCategoriesReducer
});

export default rootReducer;
