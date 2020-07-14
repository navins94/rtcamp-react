import axios from 'axios';

const api = axios.create({
	baseURL: 'https://gharinfo.com/'
});

export default api;
