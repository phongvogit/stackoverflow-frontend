import React from 'react';
import LinkButton from '../../components/Common/LinkButton/LinkButton';
import RightBanner from '../../components/Common/RightBanner/RightBanner';
import './questionContent.css';

const QuestionContent = () => {
	return (
		<div className='row main-content'>
			<div className='col-9'>
				<div
					className='main-content__header'
					style={{ padding: '30px 0px 0px 30px' }}>
					<div className='main-content__header-questions'>
						<h2>All Questions</h2>
						<LinkButton type={'s-btn__primary'} label={'Ask Question'} />
					</div>
					<div className='main-content__header-buttons'>
						<LinkButton
							type={'s-btn__second border-0 border-left'}
							label={'Votes'}
						/>
						<LinkButton type={'s-btn__second border-0'} label={'Views'} />
						<LinkButton type={'s-btn__second border-0'} label={'Newest'} />
						<LinkButton
							type={'s-btn__second border-0 border-right'}
							label={'Oldest'}
						/>
					</div>
				</div>
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
							completions! Tabnine is a free powerful Artificial Intelligence
							assistant designed to help you code faster, reduce mistakes, and
							discover best coding practices - without ever leaving the comfort
							of VS Code.
						</p>
						<div className='main-content__info__right-labels'>
							<LinkButton type={'s-btn__tag'} label={'javascript'} />
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
							<LinkButton type={'s-btn__tag'} label={'javascript'} />
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
			</div>
			<div className='col-3' style={{ paddingTop: '30px', width: '20%' }}>
				<RightBanner />
			</div>
		</div>
	);
};

export default QuestionContent;
