import React from 'react';
import { Link } from 'react-router-dom';
import GroupButtons from '../../components/Common/GroupButtons/GroupButtons';
import LinkButton from '../../components/Common/LinkButton/LinkButton';
import RightBanner from '../../components/Common/RightBanner/RightBanner';
import './Question.css';

const Question = () => {
	return (
		<div className='question'>
			<div className='question__header'>
				<div className='question__header__title'>
					<h2>All Questions</h2>
					<LinkButton
						type={'btn--primary'}
						label={'Ask Question'}
						href='addQuestion'
					/>
				</div>
				<div className='question__header__buttons'>
					<GroupButtons labels={['Votes', 'Views', 'Newest', 'Oldest']} />
				</div>
			</div>

			<hr />
			<div className='question__content'>
				<div className='question__content__left'>
					<div className='question__content__left__quantity'>
						<p>2</p>
						<span>votes</span>
					</div>
					<div className='question__content__left__quantity border-green'>
						<p>1</p>
						<span>answers</span>
					</div>
					<div className='question__content__left__quantity'>
						<p>1</p>
						<span>comments</span>
					</div>
					<div className='main-content__info__left__views'>0 views</div>
				</div>
				<div className='question__content__right'>
					<Link to='/questions/asdsadj213asdsda'>
						Is there a unique Android device Id?
					</Link>
					<p>
						Increase your coding productivity with Tabnine’s AI code
						completions! Tabnine is a free powerful Artificial Intelligence
						assistant designed to help you code faster, reduce mistakes, and
						discover best coding practices - without ever leaving the comfort of
						VS Code. Increase your coding productivity with Tabnine’s AI code
						completions! Tabnine is a free powerful Artificial Intelligence
						assistant designed to help you code faster, reduce mistakes, and
						discover best coding practices - without ever leaving the comfort of
						VS Code. Increase your coding productivity with Tabnine’s AI code
						completions! Tabnine is a free powerful Artificial Intelligence
						assistant designed to help you code faster, reduce mistakes, and
						discover best coding practices - without ever leaving the comfort of
						VS Code.
					</p>
					<div className='question__content__right__labels'>
						<LinkButton type={'btn--tag'} label={'javascript'} />
					</div>
					<div className='question__content__right__author'>
						<div>
							<p>asked 3 hours ago</p>
							<div className='question__content__right__author__avatar'>
								<img src='https://secure.gravatar.com/avatar/5f4cded9bced9500173faf1a?s=32&d=identicon' />
								<span>Phong Vo</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr />

			<div className='question__content'>
				<div className='question__content__left'>
					<div className='question__content__left__quantity'>
						<p>2</p>
						<span>votes</span>
					</div>
					<div className='question__content__left__quantity border-green'>
						<p>1</p>
						<span>answers</span>
					</div>
					<div className='question__content__left__quantity'>
						<p>1</p>
						<span>comments</span>
					</div>
					<div className='main-content__info__left__views'>0 views</div>
				</div>
				<div className='question__content__right'>
					<Link to='/questions/asdsadj213asdsda'>
						Is there a unique Android device Id?
					</Link>
					<p>
						Increase your coding productivity with Tabnine’s AI code
						completions! Tabnine is a free powerful Artificial Intelligence
						assistant designed to help you code faster, reduce mistakes, and
						discover best coding practices - without ever leaving the comfort of
						VS Code. Increase your coding productivity with Tabnine’s AI code
						completions! Tabnine is a free powerful Artificial Intelligence
						assistant designed to help you code faster, reduce mistakes, and
						discover best coding practices - without ever leaving the comfort of
						VS Code. Increase your coding productivity with Tabnine’s AI code
						completions! Tabnine is a free powerful Artificial Intelligence
						assistant designed to help you code faster, reduce mistakes, and
						discover best coding practices - without ever leaving the comfort of
						VS Code.
					</p>
					<div className='question__content__right__labels'>
						<LinkButton type={'btn--tag'} label={'javascript'} />
					</div>
					<div className='question__content__right__author'>
						<div>
							<p>asked 3 hours ago</p>
							<div className='question__content__right__author__avatar'>
								<img src='https://secure.gravatar.com/avatar/5f4cded9bced9500173faf1a?s=32&d=identicon' />
								<span>Phong Vo</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr />
			<div className='border' />
		</div>
	);
};

export default Question;
