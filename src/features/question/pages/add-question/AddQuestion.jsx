import React from 'react';
import LinkButton from '../../../../components/Common/LinkButton/LinkButton';
import RightBanner from '../../../../components/Common/RightBanner/RightBanner';
import InputCustom from '../../../../components/Common/InputCustom/InputCustom';

import './AddQuestion.css';

const AddQuestion = () => {
	return (
		<div className='add-question'>
			<h2>Ask a public question</h2>
			<form className='add-question__form'>
				<div className='add-question__form__input'>
					<h4>Title</h4>
					<p>
						Be specific and imagine you're asking a question to another person
					</p>
					<InputCustom placeholder='e.g. Is there an R function for finding the index of an element in a vector?' />
				</div>
				<div className='add-question__form__input'>
					<h4>Body</h4>
					<p>
						Include all the information someone would need to answer your
						question
					</p>
					<textarea
						className='text-area'
						rows='10'
						placeholder='Enter body with minimum 30 characters'></textarea>
				</div>
				<div className='add-question__form__input'>
					<h4>Tag Name</h4>
					<p>
						Be specific and imagine you're asking a question to another person
					</p>
					<InputCustom placeholder='e.g. (ajax django string)' />
				</div>
				<div className='add-question__form__btn'>
					<LinkButton type={'btn--primary'} label={'Post your question'} />
				</div>
			</form>
		</div>
	);
};

export default AddQuestion;
