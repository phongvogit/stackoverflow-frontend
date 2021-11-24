import axiosClient from './axiosClient';

const authApi = {
	login(body) {
		const url = '/authenticate';
		console.log(body, 'body');
		return axiosClient.post(url, body);
	},

	signup(body) {
		const url = '/signup';
		console.log(url);
		return axiosClient.post(url, body);
	},
};

export default authApi;
