import axiosClient from './axiosClient';

const questionApi = {
	getAll(params) {
		const url = '/questions';
		return axiosClient.get(url, { params });
	},
};

export default questionApi;
