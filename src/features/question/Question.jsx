import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import GroupButtons from '../../components/Common/GroupButtons/GroupButtons';
import LinkButton from '../../components/Common/LinkButton/LinkButton';
import PaginationCustom from '../../components/Common/Pagination/Pagination';
import { selectIsLoggedIn } from '../auth/authSlice';
import QuestionContent from './components/question-content/QuestionContent';
import './Question.css';
import {
	questionActions,
	selectQuestionFilter,
	selectQuestionList,
	selectQuestionPagination,
} from './questionSlice';

const Question = () => {
	const dispatch = useAppDispatch();
	const questionList = useAppSelector(selectQuestionList);
	const pagination = useAppSelector(selectQuestionPagination);
	const filter = useAppSelector(selectQuestionFilter);
	const isLoggedIn = useAppSelector(selectIsLoggedIn);
	const history = useHistory();

	useEffect(() => {
		dispatch(questionActions.fetchQuestionList(filter));
	}, [dispatch, filter]);

	const handlePageChange = ({ selected }) => {
		dispatch(
			questionActions.setFilter({
				...filter,
				_page: selected + 1,
			}),
		);
	};

	const handleAddQuestion = () => {
		if (isLoggedIn) {
			history.push('/addQuestion');
		} else {
			history.push('/login', { from: window.location.pathname });
		}
	};

	return (
		<div className='question'>
			<div className='question__header'>
				<div className='question__header__title'>
					<h2>All Questions</h2>
					<LinkButton
						type={'btn--primary'}
						label={'Ask Question'}
						handleClick={handleAddQuestion}
					/>
				</div>
				<div className='question__header__buttons'>
					<GroupButtons labels={['Votes', 'Views', 'Newest', 'Oldest']} />
				</div>
			</div>

			<hr />
			{questionList.map(question => (
				<>
					<QuestionContent question={question} />
					<hr />
				</>
			))}
			<hr />
			<PaginationCustom
				pageCount={Math.ceil(pagination._totalRows / pagination._limit)}
				page={pagination._page - 1}
				changePage={handlePageChange}
			/>
		</div>
	);
};

export default Question;
