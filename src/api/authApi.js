import axiosClient from './axiosClient';

const authApi = {
	login() {
		const url = '/authenticate';
		console.log(url);
		return axiosClient.post(url, {
			username: 'ducphong2',
			password: 'hello1',
		});
	},
};

export default authApi;
