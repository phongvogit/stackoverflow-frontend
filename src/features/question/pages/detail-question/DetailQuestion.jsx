import React from 'react';
import LinkButton from '../../../../components/Common/LinkButton/LinkButton';
import { ReactComponent as UpVote } from '../../../../assets/images/ArrowUpLg.svg';
import { ReactComponent as DownVote } from '../../../../assets/images/ArrowDownLg.svg';
import RightBanner from '../../../../components/Common/RightBanner/RightBanner';
import Comment from './Comment/Comment';

import './detailQuestion.css';
import Arrow from '../../../../components/Common/Arrow/Arrow';

const DetailQuestion = () => {
	return (
		<div className='detail-question'>
			<div className='col-9 detail-question__main'>
				<h2>
					LocalDate and LocalDateTime in a server which runs in EST vs UTC
				</h2>
				<p className='caption'>Asked 5 days ago</p>

				<div className='border' />
				<div className='main-content__info'>
					<div className='main-content__info__vote'>
						<button
							className='vote-up'
							title='This answer is useful (click again to undo)'>
							<Arrow type='up' active />
						</button>
						<div className='vote-count'>0</div>
						<button
							className='vote-down'
							title='This answer is not useful (click again to undo)'>
							<Arrow type='down' />
						</button>
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
						<div className='main-content__info__right-author-container'>
							<p className='danger'>Delete</p>
							<div className='main-content__info__right-user'>
								<p>asked 3 hours ago</p>
								<div className='main-content__info__right-avatar'>
									<img src='https://secure.gravatar.com/avatar/5f4cded9bced9500173faf1a?s=32&d=identicon' />
									<span>Phong Vo</span>
								</div>
							</div>
						</div>
						<div className='border' />
						<Comment />
						<div className='border' />
						<Comment />
						<div className='border' />
						<Comment />
						<div className='border' />
						<div>
							<LinkButton type={'s-btn__primary mt-1'} label={'Add comment'} />
						</div>
					</div>
				</div>

				{/* Answer */}
				<div className='detail-question__answer__header'>
					<h2>Answers</h2>
					<div className='detail-question__answer__header-buttons'>
						<LinkButton
							type={'s-btn__second border-r-0 border-r-left'}
							label={'Votes'}
						/>
						<LinkButton
							type={'s-btn__second border-r-0 border-left-none'}
							label={'Views'}
						/>
						<LinkButton
							type={'s-btn__second border-r-0 border-left-none'}
							label={'Newest'}
						/>
						<LinkButton
							type={'s-btn__second border-r-0 border-r-right border-left-none'}
							label={'Oldest'}
						/>
					</div>
				</div>

				<div className='main-content__info'>
					<div className='main-content__info__vote'>
						<button
							className='vote-up'
							title='This answer is useful (click again to undo)'>
							<Arrow type='up' active />
						</button>
						<div className='vote-count'>0</div>
						<button
							className='vote-down'
							title='This answer is not useful (click again to undo)'>
							<Arrow type='down' />
						</button>
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
						<div className='main-content__info__right-author-container'>
							<p className='danger'>Delete</p>
							<div className='main-content__info__right-user'>
								<p>asked 3 hours ago</p>
								<div className='main-content__info__right-avatar'>
									<img src='https://secure.gravatar.com/avatar/5f4cded9bced9500173faf1a?s=32&d=identicon' />
									<span>Phong Vo</span>
								</div>
							</div>
						</div>
						<div className='border' />
						<Comment />
						<div className='border' />
						<Comment />
						<div className='border' />
						<Comment />
						<div className='border' />
						<div>
							<LinkButton type={'s-btn__primary mt-1'} label={'Add comment'} />
						</div>
					</div>
				</div>
				<div className='border' />
			</div>
			<div className='col-3' style={{ paddingTop: '30px', width: '20%' }}>
				<RightBanner />
			</div>
		</div>
	);
};

export default DetailQuestion;
