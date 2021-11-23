import { format } from 'date-fns';
import React from 'react';
import LinkButton from '../../../../../../components/Common/LinkButton/LinkButton';

import './Comment.css';

const Comment = ({ data }) => {
	const { body, author, created } = data;
	return (
		<div className='comment'>
			<p>
				{body} {' – '}
				<LinkButton
					type={'btn--tag'}
					label={Boolean(author) ? author.username : ''}
				/>{' '}
				<span className='comment__time'>
					{format(new Date(created), "MMM dd'`'yy 'at' k':'mm")}
				</span>
			</p>
		</div>
	);
};

export default Comment;
