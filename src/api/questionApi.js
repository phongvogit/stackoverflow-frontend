import axiosClient from './axiosClient';

const questionApi = {
	getAll(params) {
		const url = '/questions';
		return axiosClient.get(url, { params });
	},
	add(body) {
		const url = '/questions';
		return axiosClient.post(url, body);
	},
};

export default questionApi;
