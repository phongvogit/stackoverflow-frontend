import React from 'react';
import InputCustom from '../../components/Common/InputCustom/InputCustom';
import RightBanner from '../../components/Common/RightBanner/RightBanner';
import CardTag from './components/CardTag';
import './tagContent.css';

const TagContent = () => {
	return (
		<div className='tag-content'>
			<div className='col-9 tag-content__info'>
				<h2 className='headline'>Tags</h2>
				<p className='body'>
					A tag is a keyword or label that categorizes your question with other,
					similar questions. Using the right tags makes it easier for others to
					find and answer your question
				</p>
				<h4 className='quantity'>7 tags</h4>
				<div className='search-form'>
					<InputCustom icon='search' placeholder='Search here...' />
				</div>

				<div className='tag-content__info-tags grid-layout-tags'>
					<CardTag />
					<CardTag />
					<CardTag />
					<CardTag />
					<CardTag />
					<CardTag />
				</div>
			</div>
			<div className='col-3' style={{ paddingTop: '30px', width: '20%' }}>
				<RightBanner />
			</div>
		</div>
	);
};

export default TagContent;
