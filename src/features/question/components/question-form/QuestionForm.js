import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import LinkButton from '../../../../components/Common/LinkButton/LinkButton';
import { InputField } from '../../../../components/FormFields/InputField/InputField';
import { TextArea } from '../../../../components/FormFields/TextArea/TextArea';
import * as yup from 'yup';
import './QuestionForm.css';

const schema = yup
	.object({
		title: yup
			.string()
			.required('Title is missing')
			.max(150, 'Title cannot be longer than 150 characters.')
			.min(15, 'Title must be at least 15 characters.'),
		text: yup
			.string()
			.required('Text is missing')
			.max(150, 'Text cannot be longer than 150 characters.')
			.min(15, 'Text must be at least 15 characters.'),
		tags: yup.string().required('Tags is missing'),
		// tags: yup
		// 	.array()
		// 	.required('Please enter at least one tag.')
		// 	.max(5, 'Please enter no more than 5 tags.')
		// 	.of(Yup.string().max(15, 'Tag cannot be longer than 15 characters. ')),
	})
	.required();

const QuestionForm = ({ initialValues, onSubmit }) => {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm({
		defaultValues: initialValues,
		resolver: yupResolver(schema),
	});

	console.log(errors);
	const handleFormSubmit = async formValues => {
		try {
			//Clear previous submission error
			console.log('formValues: ', formValues);
			await onSubmit(formValues);
		} catch (error) {
			console.log(error, 'error');
		}
	};

	return (
		<form className='question-form' onSubmit={handleSubmit(handleFormSubmit)}>
			<div className='question-form__input'>
				<h4>Title</h4>
				<p>
					Be specific and imagine you're asking a question to another person
				</p>
				<InputField
					inputProps={register('title')}
					placeholder='e.g. Is there an R function for finding the index of an element in a vector?'
					error={Boolean(errors.title) ? errors.title : null}
				/>
			</div>
			<div className='question-form__input'>
				<h4>Body</h4>
				<p>
					Include all the information someone would need to answer your question
				</p>
				<TextArea
					inputProps={register('text')}
					placeholder='Enter body with minimum 30 characters'
					error={Boolean(errors.text) ? errors.text : null}
				/>
			</div>
			<div className='question-form__input'>
				<h4>Tag Name</h4>
				<p>
					Be specific and imagine you're asking a question to another person
				</p>
				<InputField
					inputProps={register('tags')}
					placeholder='e.g. (ajax django string)'
					error={Boolean(errors.tags) ? errors.tags : null}
				/>
			</div>
			{}
			<div className='question-form__btn'>
				<LinkButton type={'btn--primary'} label={'Post your question'} />
			</div>
		</form>
	);
};

export default QuestionForm;
