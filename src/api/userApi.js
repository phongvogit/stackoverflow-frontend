import axiosClient from './axiosClient';

const userApi = {
	getAll(params) {
		const url = '/users';
		return axiosClient.get(url, { params });
	},
	getUserByName(payload) {
		const username = payload.username;
		const params = payload.newFilter;
		const url = `/users/${username}`;
		return axiosClient.get(url, { params });
	},
};

export default userApi;
