import { formatDistanceToNowStrict } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import questionApi from '../../../../api/questionApi';
import GroupButtons from '../../../../components/Common/GroupButtons/GroupButtons';
import AnswerForm from './Components/AnswerForm/AnswerForm';
import Content from './Components/Content/Content';
import './DetailQuestion.css';

const DetailQuestion = () => {
	const [question, setQuestion] = useState({});
	const [answerSortType, setAnswersSortType] = useState('Votes');

	const { questionId } = useParams();

	useEffect(() => {
		if (!questionId) return;

		(async () => {
			try {
				const data = await questionApi.getById(questionId);
				setQuestion(data);
			} catch (error) {
				console.log('Failed to fetch question details', error);
			}
		})();
	}, []);

	const handleSorting = () => {
		switch (answerSortType) {
			case 'Votes':
				return (a, b) => b.score - a.score;
			case 'Newest':
				return (a, b) => new Date(b.created) - new Date(a.created);
			case 'Oldest':
				return (a, b) => new Date(a.created) - new Date(b.created);
			default:
				break;
		}
	};

	return (
		<div className='detail-question'>
			<h2>
				{question.title}
				{
					'A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question'
				}
			</h2>
			<p>
				Asked{' '}
				{question.created !== undefined &&
					formatDistanceToNowStrict(new Date(question.created), {
						addSuffix: true,
					})}
			</p>
			<hr />
			<Content
				data={question}
				questionId={questionId}
				setQuestion={setQuestion}
			/>
			{/* Answer */}
			<div className='detail-question__answer__header'>
				<h2>Answers</h2>
				<div className='detail-question__answer__header__buttons'>
					<GroupButtons
						labels={['Votes', 'Newest', 'Oldest']}
						setSelected={setAnswersSortType}
					/>
				</div>
			</div>
			{Boolean(question.answers) &&
				question.answers.sort(handleSorting()).map(answer => (
					<div key={answer._id} className='detail-question__answer__list'>
						<Content
							data={answer}
							questionId={questionId}
							answerId={answer._id}
							setQuestion={setQuestion}
						/>
						<hr style={{ marginTop: '80px' }} />
					</div>
				))}

			{/*Add Answer */}
			<h2>Your Answer</h2>
			<AnswerForm id={questionId} setQuestion={setQuestion} />
		</div>
	);
};

export default DetailQuestion;
