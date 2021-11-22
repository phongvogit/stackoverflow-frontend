import axiosClient from './axiosClient';

const questionApi = {
	getAll(params) {
		const url = '/questions';
		return axiosClient.get(url, { params });
	},
	getAllByTags(payload) {
		const url = '/questions/tags/search';
		const tags = payload.tags;
		const params = payload.newFilter;
		return axiosClient.post(url, { tags }, { params });
	},
	add(body) {
		const url = '/questions';
		return axiosClient.post(url, body);
	},
};

export default questionApi;
