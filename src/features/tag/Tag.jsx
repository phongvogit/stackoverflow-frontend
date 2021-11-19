import React from 'react';
import InputCustom from '../../components/Common/InputCustom/InputCustom';
import RightBanner from '../../components/Common/RightBanner/RightBanner';
import CardTag from './components/CardTag';
import './Tag.css';

const Tag = () => {
	return (
		<div className='tag-content'>
			<h2>Tags</h2>
			<p>
				A tag is a keyword or label that categorizes your question with other,
				similar questions. Using the right tags makes it easier for others to
				find and answer your question
			</p>
			<h4>7 tags</h4>
			<div className='tag-content__search'>
				<InputCustom icon='search' placeholder='Search here...' />
			</div>

			<div className='tag-content__tags'>
				<CardTag />
				<CardTag />
				<CardTag />
				<CardTag />
				<CardTag />
				<CardTag />
			</div>
		</div>
	);
};

export default Tag;
