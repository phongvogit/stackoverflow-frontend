import React from 'react';
import LinkButton from '../LinkButton/LinkButton';
import './rightBanner.css';

const RightBanner = () => {
	return (
		<>
			<div className='tags-title'>Popular Tags</div>
			<div className='tags-items'>
				<div className='tags-item'>
					<LinkButton type={'s-btn__tag'} label={'javascript'} />
					<span>x 20</span>
				</div>
				<div className='tags-item'>
					<LinkButton type={'s-btn__tag'} label={'html'} />
					<span>x 3</span>
				</div>
				<div className='tags-item'>
					<LinkButton type={'s-btn__tag'} label={'css'} />
					<span>x 2</span>
				</div>
				<div className='tags-item'>
					<LinkButton type={'s-btn__tag'} label={'Python'} />
					<span>x 5</span>
				</div>
			</div>
		</>
	);
};

export default RightBanner;
