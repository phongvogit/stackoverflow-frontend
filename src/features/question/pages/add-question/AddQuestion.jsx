import React from 'react';
import QuestionForm from '../../components/question-form/QuestionForm';
import questionApi from '../../../../api/questionApi';
import './AddQuestion.css';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

const AddQuestion = () => {
	const history = useHistory();

	const handleQuestionFormSubmit = async formValues => {
		await questionApi.add(formValues);
		// Toast success
		toast.success('Create question successfully!');

		history.push('/');
	};

	const initialValues = {
		title: '',
		text: '',
		tags: [],
	};

	return (
		<div className='add-question'>
			<div className='add-question__header'>
				<h2>Ask a public question</h2>
			</div>

			<QuestionForm
				initialValues={initialValues}
				onSubmit={handleQuestionFormSubmit}
			/>
		</div>
	);
};

export default AddQuestion;
