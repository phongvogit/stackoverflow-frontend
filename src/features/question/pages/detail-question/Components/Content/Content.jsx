import React from 'react';
import Arrow from '../../../../../../components/Common/Arrow/Arrow';
import LinkButton from '../../../../../../components/Common/LinkButton/LinkButton';
import Comment from '../Comment/Comment';
import './Content.css';

const Content = () => {
	return (
		<div className='content'>
			<div className='content__vote'>
				<button
					className='content__vote-up'
					title='This answer is useful (click again to undo)'>
					<Arrow type='up' active />
				</button>
				<div className='content__vote-count'>0</div>
				<button
					className='content__vote-down'
					title='This answer is not useful (click again to undo)'>
					<Arrow type='down' />
				</button>
			</div>
			<div className='content__info'>
				<div className='content__info__wrapper'>
					<h5 href='#'>Is there a unique Android device Id?</h5>
					<p>
						Increase your coding productivity with Tabnine’s AI code
						completions! Tabnine is a free powerful Artificial Intelligence
						assistant designed to help you code faster, reduce mistakes, and
						discover best coding practices - without ever leaving the comfort of
						VS Code.
					</p>
					<div className='content__info__labels'>
						<div className='content__info__labels-inner'>
							<LinkButton type={'btn--tag'} label={'javascript'} />
						</div>
						<div>
							<LinkButton type={'btn--tag'} label={'html'} />
						</div>
					</div>
					<div className='content__info__author__wrapper'>
						<p className='delete'>Delete</p>
						<div className='content__info__author'>
							<p>asked 3 hours ago</p>
							<div className='content__info__author__avatar'>
								<img src='https://secure.gravatar.com/avatar/5f4cded9bced9500173faf1a?s=32&d=identicon' />
								<span>Phong Vo</span>
							</div>
						</div>
					</div>
				</div>

				<hr />
				<Comment />
				<hr />
				<Comment />
				<hr />
				<Comment />
				<hr />
				<div>
					<LinkButton type={'btn--primary mt-1'} label={'Add comment'} />
				</div>
			</div>
		</div>
	);
};

export default Content;
