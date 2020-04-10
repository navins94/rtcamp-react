import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:10010/'
});

export default api;
