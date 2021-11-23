import axiosClient from './axiosClient';

const commentApi = {
	addToAnswer(questionId, answerId, values) {
		const url = `/comment/${questionId}/${answerId}`;
		return axiosClient.post(url, values);
	},
	addToQuestion(questionId, values) {
		const url = `/comment/${questionId}`;
		return axiosClient.post(url, values);
	},
};

export default commentApi;
