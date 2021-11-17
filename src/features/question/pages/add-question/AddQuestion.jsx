import React from 'react';
import LinkButton from '../../../../components/Common/LinkButton/LinkButton';
import RightBanner from '../../../../components/Common/RightBanner/RightBanner';

import './AddQuestion.css';

const AddQuestion = () => {
	return (
		<div className='add-question'>
			<div className='col-9 add-question__main'>
				<h2>Ask a public question</h2>
				<div className='add-question__main-form'>
					<form>
						<div className='form-input'>
							<h4>Title</h4>
							<p>
								Be specific and imagine you're asking a question to another
								person
							</p>
							<input
								type='text'
								placeholder='e.g. Is there an R function for finding the index of an element in a vector?'
							/>
						</div>
						<div className='form-input'>
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
						<div className='form-input'>
							<h4>Tag Name</h4>
							<p>
								Be specific and imagine you're asking a question to another
								person
							</p>
							<input type='text' placeholder='e.g. (ajax django string)' />
						</div>
						<LinkButton type={'btn--primary'} label={'Post your question'} />
					</form>
				</div>
			</div>
			<div className='col-3' style={{ paddingTop: '30px', width: '20%' }}>
				<RightBanner />
			</div>
		</div>
	);
};

export default AddQuestion;
