import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import LinkButton from '../../../../../../components/Common/LinkButton/LinkButton';
import { InputField } from '../../../../../../components/FormFields/InputField/InputField';
import * as yup from 'yup';
import commentApi from '../../../../../../api/commentApi';
import { useHistory } from 'react-router';
import { useAppSelector } from '../../../../../../app/hooks';
import { selectIsLoggedIn } from '../../../../../auth/authSlice';

const schema = yup
	.object({
		body: yup
			.string()
			.required('Comment is missing.')
			.min(5, 'Comment must be at least 5 characters.')
			.max(1000, 'Comment cannot be longer than 1000 characters.'),
	})
	.required();

const CommentForm = ({ questionId, answerId, setQuestion }) => {
	const {
		handleSubmit,
		register,
		reset,
		formState: { isSubmitting, errors },
	} = useForm({ defaultValues: { body: '' }, resolver: yupResolver(schema) });

	const handleFormSubmit = async formValues => {
		if (answerId) {
			const data = await commentApi.addToAnswer(
				questionId,
				answerId,
				formValues,
			);
			setQuestion(data);
		} else {
			const data = await commentApi.addToQuestion(questionId, formValues);
			setQuestion(data);
		}
		reset({ body: '' });
	};

	return (
		<div>
			<form onSubmit={handleSubmit(handleFormSubmit)}>
				<InputField
					placeholder='Write your comment in here.'
					inputProps={register('body')}
					error={Boolean(errors.body) ? errors.body : null}
				/>
				<LinkButton type={'btn--primary mt-1'} label={'Add comment'} />
			</form>
		</div>
	);
};

export default CommentForm;
