import axios from 'axios';

const api = axios.create({
	baseURL: 'http://4b22c1e2.ngrok.io/'
});

export default api;
