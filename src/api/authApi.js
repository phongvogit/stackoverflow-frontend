import axiosClient from './axiosClient';

const authApi = {
	login() {
		const url = '/authenticate';
		return axiosClient.post(url, {
			username: 'ducphong5',
			password: 'hello1',
		});
	},
};

export default authApi;
