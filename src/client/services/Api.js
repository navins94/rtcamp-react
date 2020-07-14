import axios from 'axios';

const api = axios.create({
	baseURL: 'https://ilaakainfo.com/'
});

export default api;
