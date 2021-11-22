import React from 'react';
import { Link } from 'react-router-dom';
import LinkButton from '../../../../components/Common/LinkButton/LinkButton';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';

import './QuestionContent.css';

const QuestionContent = ({ question }) => {
	const { score, title, comments, tags, views, answers, author_doc, created } =
		question;
	return (
		<div className='question-content'>
			<div className='question-content__left'>
				<div className='question-content__left__quantity'>
					<p>{score}</p>
					<span>votes</span>
				</div>
				<div className='question-content__left__quantity border-green'>
					<p>{answers.length}</p>
					<span>answers</span>
				</div>
				<div className='question-content__left__quantity'>
					<p>{comments.length}</p>
					<span>comments</span>
				</div>
				<div className='main-content__info__left__views'>{views} views</div>
			</div>
			<div className='question-content__right'>
				<Link to='/questions/asdsadj213asdsda'>{title}</Link>
				<p>{title}</p>
				<div className='question-content__right__labels'>
					{tags.map(tag => (
						<LinkButton type={'btn--tag'} label={tag} />
					))}
				</div>
				<div className='question-content__right__author'>
					<div>
						<p>
							asked{' '}
							{formatDistanceToNowStrict(new Date(created), {
								addSuffix: true,
							})}
						</p>
						<div className='question-content__right__author__avatar'>
							<img src={author_doc[0].profilePhoto} />
							<span>{author_doc[0].username}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuestionContent;
