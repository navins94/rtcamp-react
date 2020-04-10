import HomePage from './pages/HomePage';
import Page from './pages/Page';
import Categories from './pages/Categories';
import SingleCategory from './pages/SingleCategory';
import NotFoundPage from './pages/NotFoundPage';
import Singlepost from './pages/Singlepost';
import App from './App';

export default [
	{
		...App,
		routes: [
			{
				...HomePage,
				path: '/',
				exact: true
			},
			{
				...Page,
				path: '/page/:id?',
				exact: true
			},
			{
				...Categories,
				path: '/categories',
				exact: true
			},
			{
				...SingleCategory,
				path: '/category/:id/page/:page',
				exact: true
			},
			{
				...Singlepost,
				path: '/post/:id',
				exact: true
			},
			{
				...NotFoundPage
			}
		]
	}
];
