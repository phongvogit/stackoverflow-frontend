import { formatDistanceToNowStrict } from 'date-fns';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import answerApi from '../../../../../../api/answerApi';
import commentApi from '../../../../../../api/commentApi';
import questionApi from '../../../../../../api/questionApi';
import { useAppSelector } from '../../../../../../app/hooks';
import Arrow from '../../../../../../components/Common/Arrow/Arrow';
import LinkButton from '../../../../../../components/Common/LinkButton/LinkButton';
import {
	selectCurrentUser,
	selectIsLoggedIn,
} from '../../../../../auth/authSlice';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';
import QuestionVote from '../QuestionVote/QuestionVote';
import { toast } from 'react-toastify';

import './Content.css';

const Content = ({ data, questionId, answerId, setQuestion }) => {
	const { score, comments, tags, author, text, votes } = data;
	const [visibleComments, setVisibleComments] = useState([]);
	const [difference, setDifference] = useState(null);
	const [showAddComment, setShowAddComment] = useState(false);
	const currentUser = useAppSelector(selectCurrentUser);
	const history = useHistory();
	const isAuthenticated = useAppSelector(selectIsLoggedIn);

	useEffect(() => {
		setVisibleComments(comments?.splice(0, 3));
	}, [comments]);

	useEffect(() => {
		setDifference(comments?.length - visibleComments?.length);
	}, [visibleComments]);

	const handleDeleteQuestion = async () => {
		const res = window.confirm(
			`Are you sure delete your ${answerId ? 'answer' : 'question'}?`,
		);
		if (res) {
			try {
				if (answerId) {
					const data = await answerApi.removeAnswer(questionId, answerId);
					toast.success('Remove successfully');
					setQuestion(data);
				} else {
					await questionApi.removeQuestion(questionId);
					history.push('/');
				}
			} catch (error) {
				toast.error('Delete Failed!');
			}
		}
	};

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
					<div className='content__info__text'>
						<p>{`${text}`}</p>
					</div>

					<div className='content__info__labels'>
						{Boolean(tags) &&
							tags.map(tag => (
								<div className='content__info__labels-inner'>
									<LinkButton type={'btn--tag'} label={tag} />
								</div>
							))}
					</div>
					<div className='content__info__author__wrapper'>
						{(currentUser?.username === author?.username ||
							currentUser?.role === 'admin') && (
							<div className='content__info__author__wrapper__delete'>
								<a className='delete' onClick={() => handleDeleteQuestion()}>
									Delete
								</a>
							</div>
						)}
						<div className='content__info__author'>
							<p>
								Asked{' '}
								{Boolean(author) &&
									formatDistanceToNowStrict(new Date(author.created), {
										addSuffix: true,
									})}
							</p>
							<Link
								to={`/users/${author?.username}`}
								className='content__info__author__avatar'>
								<img
									src={Boolean(author) && author.profilePhoto}
									alt='avatar'
								/>

								<span>{Boolean(author) && author.username}</span>
							</Link>
						</div>
					</div>
				</div>

				{Boolean(visibleComments) &&
					visibleComments.map(comment => (
						<>
							<hr />
							<Comment
								setQuestion={setQuestion}
								key={comment}
								data={comment}
								answerId={answerId}
								questionId={questionId}
								commentId={comment._id}
							/>
						</>
					))}

				<hr />
				{difference > 0 ? (
					<a
						className='content__show-more'
						onClick={() => setVisibleComments(comments)}>
						show <b>{difference}</b> more comments
					</a>
				) : (
					!showAddComment && (
						<a
							className='content__add-comment'
							onClick={() =>
								isAuthenticated
									? setShowAddComment(true)
									: history.push('/login')
							}>
							Add comment
						</a>
					)
				)}

				{showAddComment && (
					<div>
						<CommentForm
							questionId={questionId}
							setQuestion={setQuestion}
							answerId={answerId}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Content;
