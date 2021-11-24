import { formatDistanceToNowStrict } from 'date-fns';
import React from 'react';
import { useHistory } from 'react-router';
import answerApi from '../../../../../../api/answerApi';
import commentApi from '../../../../../../api/commentApi';
import questionApi from '../../../../../../api/questionApi';
import { useAppSelector } from '../../../../../../app/hooks';
import Arrow from '../../../../../../components/Common/Arrow/Arrow';
import LinkButton from '../../../../../../components/Common/LinkButton/LinkButton';
import { selectCurrentUser } from '../../../../../auth/authSlice';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';
import QuestionVote from '../QuestionVote/QuestionVote';
import './Content.css';

const Content = ({ data, questionId, answerId, setQuestion }) => {
	const { score, comments, tags, author, text, votes } = data;
	const currentUser = useAppSelector(selectCurrentUser);
	const history = useHistory();

	const handleDeleteQuestion = async () => {
		const res = window.confirm(
			`Are you sure delete your ${answerId ? 'answer' : 'question'}?`,
		);
		if (res) {
			try {
				if (answerId) {
					const data = await answerApi.removeAnswer(questionId, answerId);
					setQuestion(data);
				} else {
					await questionApi.removeQuestion(questionId);
					history.push('/');
				}
			} catch (error) {
				console.log('Delete Failed!');
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
					<p>{`${text}`}</p>

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
				<div>
					<CommentForm
						questionId={questionId}
						setQuestion={setQuestion}
						answerId={answerId}
					/>
				</div>
			</div>
		</div>
	);
};

export default Content;
