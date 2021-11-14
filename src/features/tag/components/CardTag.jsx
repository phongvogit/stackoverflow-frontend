import React from 'react';
import LinkButton from '../../../components/Common/LinkButton/LinkButton';

import './cardTag.css';

const CardTag = () => {
	return (
		<div className='card-tag'>
			<LinkButton type={'s-btn__tag'} label={'javascript'} />
			<p className='description'>
				JavaScript is a lightweight, cross-platform, and interpreted scripting
				language. It is well-known for the development of web pages, many
				non-browser environments also use it. JavaScript can be used for
				Client-side developments as well as Server-side developments.
			</p>
			<p className='caption'>2 questions</p>
		</div>
	);
};

export default CardTag;
