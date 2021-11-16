import React from 'react';
import { Link } from 'react-router-dom';
import LinkButton from '../../components/Common/LinkButton/LinkButton';
import RightBanner from '../../components/Common/RightBanner/RightBanner';
import './questionContent.css';

const QuestionContent = () => {
	return (
		<div className='main-content'>
			<div
				className='main-content__header'
				style={{ padding: '30px 0px 0px 30px' }}>
				<div className='main-content__header-questions'>
					<h2>All Questions</h2>
					<LinkButton
						type={'btn--primary'}
						label={'Ask Question'}
						href='addQuestion'
					/>
				</div>
				<div className='main-content__header-buttons'>
					<LinkButton
						type={'btn--second border-r-0 border-r-left'}
						label={'Votes'}
					/>
					<LinkButton
						type={'btn--second border-r-0 border-left-none'}
						label={'Views'}
					/>
					<LinkButton
						type={'btn--second border-r-0 border-left-none'}
						label={'Newest'}
					/>
					<LinkButton
						type={'btn--second border-r-0 border-r-right border-left-none'}
						label={'Oldest'}
					/>
				</div>
			</div>
			<div className='border' />
			<div className='main-content__info -bottom'>
				<div className='main-content__info__left'>
					<div className='main-content__info__left-commons'>
						<p>2</p>
						<span>votes</span>
					</div>
					<div className='main-content__info__left-commons answer'>
						<p>1</p>
						<span>answers</span>
					</div>
					<div className='main-content__info__left-commons'>
						<p>1</p>
						<span>comments</span>
					</div>
					<div className='main-content__info__left-views'>
						0<span>views</span>
					</div>
				</div>
				<div className='main-content__info__right'>
					<Link to='/questions/asdsadj213asdsda'>
						Is there a unique Android device Id?
					</Link>
					<p>
						Increase your coding productivity with Tabnine’s AI code
						completions! Tabnine is a free powerful Artificial Intelligence
						assistant designed to help you code faster, reduce mistakes, and
						discover best coding practices - without ever leaving the comfort of
						VS Code.
					</p>
					<div className='main-content__info__right-labels'>
						<LinkButton type={'btn--tag'} label={'javascript'} />
					</div>
					<div className='main-content__info__right-author'>
						<p>asked 3 hours ago</p>
						<div className='main-content__info__right-avatar'>
							<img src='https://secure.gravatar.com/avatar/5f4cded9bced9500173faf1a?s=32&d=identicon' />
							<span>Phong Vo</span>
						</div>
					</div>
				</div>
			</div>
			<div className='border' />
			<div className='main-content__info'>
				<div className='main-content__info__left'>
					<div className='main-content__info__left-commons'>
						<p>2</p>
						<span>votes</span>
					</div>
					<div className='main-content__info__left-commons answer'>
						<p>1</p>
						<span>answers</span>
					</div>
					<div className='main-content__info__left-commons'>
						<p>1</p>
						<span>comments</span>
					</div>
					<div className='main-content__info__left-views'>
						0<span>views</span>
					</div>
				</div>
				<div className='main-content__info__right'>
					<a href='#'>Is there a unique Android device Id?</a>
					<p>
						Increase your coding productivity with Tabnine’s AI code
						completions!
					</p>
					<div className='main-content__info__right-labels'>
						<LinkButton type={'btn--tag'} label={'javascript'} />
					</div>
					<div className='main-content__info__right-author'>
						<p>asked 3 hours ago</p>
						<div className='main-content__info__right-avatar'>
							<img src='https://secure.gravatar.com/avatar/5f4cded9bced9500173faf1a?s=32&d=identicon' />
							<span>Phong Vo</span>
						</div>
					</div>
				</div>
			</div>
			<div className='border' />
		</div>
	);
};

export default QuestionContent;
