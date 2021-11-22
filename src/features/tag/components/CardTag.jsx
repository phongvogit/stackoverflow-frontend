import React from 'react';
import LinkButton from '../../../components/Common/LinkButton/LinkButton';

import './CardTag.css';

const CardTag = ({ label, count }) => {
	return (
		<div className='card-tag'>
			<div>
				<LinkButton type={'btn--tag'} label={label} />
			</div>
			<div className='card-tag__content'>
				<p>
					JavaScript is a lightweight, cross-platform, and interpreted scripting
					language. It is well-known for the development of web pages, many
					non-browser environments also use it. JavaScript can be used for
					Client-side developments as well as Server-side developments.
				</p>
			</div>

			<span>{count} questions</span>
		</div>
	);
};

export default CardTag;
