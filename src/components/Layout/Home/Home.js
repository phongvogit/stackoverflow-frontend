import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { questionActions } from '../../../features/question/questionSlice';
import {
	selectPopularTagList,
	selectTagFilter,
	selectTagList,
	tagActions,
} from '../../../features/tag/tagSlice';
import Header from '../../Common/Header/Header';
import RightBanner from '../../Common/RightBanner/RightBanner';
import Routes from '../../Common/Routes';
import Sidebar from '../../Common/Sidebar/Sidebar';

import './Home.css';

const Home = props => {
	const history = useHistory();
	const dispatch = useAppDispatch();
	const tagPopularList = useAppSelector(selectPopularTagList);
	const filter = useAppSelector(selectTagFilter);

	useEffect(() => {
		dispatch(
			tagActions.fetchPopularTagList({
				_limit: 7,
			}),
		);
	}, [dispatch]);

	const handleSelectedTag = async selectedTag => {
		const tags = [selectedTag];
		const newFilter = {
			...filter,
			_page: 1,
		};
		await dispatch(questionActions.fetchQuestionListByTag({ newFilter, tags }));
		history.push(`/questions/tags/${selectedTag}`);
	};

	return (
		<div className='home'>
			<div className='home__header'>
				<Header {...props} />
			</div>
			<div className='home__main'>
				<div className='home__main__sidebar'>
					<Sidebar {...props} />
				</div>
				<div className='home__main__content'>
					<Routes />
				</div>
				<div className='home__main__tags'>
					<RightBanner
						tags={tagPopularList}
						setSelectedTag={handleSelectedTag}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
