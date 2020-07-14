import axios from 'axios';

const api = axios.create({
	baseURL: 'https://rtcamp.com/'
});

export default api;
