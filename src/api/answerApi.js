import axiosClient from './axiosClient';

const answerApi = {
	add(id, values) {
		const url = `/answer/${id}`;
		return axiosClient.post(url, values);
	},
};

export default answerApi;
