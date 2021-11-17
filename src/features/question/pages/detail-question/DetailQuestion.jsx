import React from 'react';
import GroupButtons from '../../../../components/Common/GroupButtons/GroupButtons';
import Content from './Components/Content/Content';
import './DetailQuestion.css';

const DetailQuestion = () => {
	return (
		<div className='detail-question'>
			<h2 className='detail-question__title'>
				LocalDate and LocalDateTime in a server which runs in EST vs UTC
			</h2>
			<p className='detail-question__createdDate'>Asked 5 days ago</p>
			<hr />
			<Content />
			{/* Answer */}
			<div className='detail-question__answer__header'>
				<h2>Answers</h2>
				<div className='detail-question__answer__header__buttons'>
					<GroupButtons labels={['Votes', 'Views', 'Newest', 'Oldest']} />
				</div>
			</div>
			<Content />
		</div>
	);
};

export default DetailQuestion;
