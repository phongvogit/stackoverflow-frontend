import { formatDistanceToNowStrict } from 'date-fns';
import React from 'react';
import Arrow from '../../../../../../components/Common/Arrow/Arrow';
import LinkButton from '../../../../../../components/Common/LinkButton/LinkButton';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';
import QuestionVote from '../QuestionVote/QuestionVote';
import './Content.css';

const Content = ({ data, questionId, answerId, setQuestion }) => {
	const { score, comments, tags, author, text, votes } = data;

	return (
		<div className='content'>
			<QuestionVote
				score={score}
				votes={votes}
				questionId={questionId}
				answerId={answerId}
				setQuestion={setQuestion}
			/>
			<div className='content__info'>
				<div className='content__info__wrapper'>
					<p>
						{`${text}`}A tag is a keyword or label that categorizes your
						question with other, similar questions. Using the right tags makes
						it easier for others to find and answer your question
					</p>

					<div className='content__info__labels'>
						{Boolean(tags) &&
							tags.map(tag => (
								<div className='content__info__labels-inner'>
									<LinkButton type={'btn--tag'} label={tag} />
								</div>
							))}
					</div>
					<div className='content__info__author__wrapper'>
						<p className='delete'>Delete</p>
						<div className='content__info__author'>
							<p>
								Asked{' '}
								{Boolean(author) &&
									formatDistanceToNowStrict(new Date(author.created), {
										addSuffix: true,
									})}
							</p>
							<div className='content__info__author__avatar'>
								<img
									src={Boolean(author) && author.profilePhoto}
									alt='avatar'
								/>
								<span>{Boolean(author) && author.username}</span>
							</div>
						</div>
					</div>
				</div>

				{Boolean(comments) &&
					comments.map(comment => (
						<>
							<hr />
							<Comment key={comment} data={comment} />
						</>
					))}
				<hr />
				<div>
					<CommentForm
						questionId={questionId}
						setQuestion={setQuestion}
						answerId={answerId}
					/>
					{/* <LinkButton type={'btn--primary mt-1'} label={'Add comment'} /> */}
				</div>
			</div>
		</div>
	);
};

export default Content;
