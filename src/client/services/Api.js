import axios from 'axios';

const api = axios.create({
	baseURL: 'https://govtyojanas.com/'
});

export default api;
