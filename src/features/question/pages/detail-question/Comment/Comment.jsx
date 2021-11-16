import React from 'react';
import LinkButton from '../../../../../components/Common/LinkButton/LinkButton';

import './comment.css';

const Comment = () => {
	return (
		<div className='comment'>
			I need more information -{' '}
			<LinkButton type={'btn--tag'} label={'jaidev'} />{' '}
			<span className='time'>5 days ago</span>
		</div>
	);
};

export default Comment;
