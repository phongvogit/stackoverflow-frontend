import axiosClient from './axiosClient';

const voteApi = {
	upVoteForAnswer(questionId, answerId) {
		const url = `/votes/upvote/${questionId}/${answerId}`;
		return axiosClient.post(url);
	},
	upVoteForQuestion(questionId) {
		const url = `/votes/upvote/${questionId}`;
		return axiosClient.post(url);
	},

	downVoteForAnswer(questionId, answerId) {
		const url = `/votes/downVote/${questionId}/${answerId}`;
		return axiosClient.post(url);
	},
	downVoteForQuestion(questionId) {
		const url = `/votes/downVote/${questionId}`;
		return axiosClient.post(url);
	},

	unVoteForAnswer(questionId, answerId) {
		const url = `/votes/unVote/${questionId}/${answerId}`;
		return axiosClient.post(url);
	},
	unVoteForQuestion(questionId) {
		const url = `/votes/unVote/${questionId}`;
		return axiosClient.post(url);
	},
};

export default voteApi;
