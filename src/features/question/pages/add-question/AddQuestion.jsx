import React from 'react';
import QuestionForm from '../../components/question-form/QuestionForm';
import questionApi from '../../../../api/questionApi';
import './AddQuestion.css';
import { useHistory } from 'react-router';

const AddQuestion = () => {
	const history = useHistory();

	const handleQuestionFormSubmit = async formValues => {
		await questionApi.add(formValues);

		history.push('/');
	};

	const initialValues = {
		title: '',
		text: '',
		tags: [],
	};

	return (
		<div className='add-question'>
			<h2>Ask a public question</h2>
			<QuestionForm
				initialValues={initialValues}
				onSubmit={handleQuestionFormSubmit}
			/>
		</div>
	);
};

export default AddQuestion;
