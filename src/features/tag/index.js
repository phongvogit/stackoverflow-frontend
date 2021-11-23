import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import PaginationCustom from '../../components/Common/Pagination/Pagination';
import { InputField } from '../../components/FormFields/InputField/InputField';
import CardTag from './components/CardTag';
import './Tag.css';
import {
	selectTagFilter,
	selectTagList,
	selectTagPagination,
	tagActions,
} from './tagSlice';

const Tag = () => {
	const dispatch = useDispatch();
	const pagination = useAppSelector(selectTagPagination);
	const filter = useAppSelector(selectTagFilter);
	const tagList = useAppSelector(selectTagList);

	useEffect(() => {
		dispatch(
			tagActions.fetchTagList({
				_limit: 7,
				_page: 1,
			}),
		);
	}, [dispatch]);

	const handlePageChange = ({ selected }) => {
		dispatch(
			tagActions.setFilter({
				...filter,
				_page: selected + 1,
			}),
		);
	};

	const handleSearchChange = e => {
		const tagName = e.target.value;
		const newFilter = {
			...filter,
			_page: 1,
		};
		dispatch(tagActions.setFilterWithDebounce({ newFilter, tagName }));
	};

	return (
		<div className='tag-content'>
			<h2>Tags</h2>
			<p>
				A tag is a keyword or label that categorizes your question with other,
				similar questions. Using the right tags makes it easier for others to
				find and answer your question
			</p>
			<h4>{tagList.length} tags</h4>
			<div className='tag-content__search'>
				<InputField
					icon='search'
					placeholder='Search here...'
					onChange={handleSearchChange}
				/>
			</div>

			<div className='tag-content__tags'>
				{tagList.map(tag => (
					<CardTag key={tag._id} label={tag._id} count={tag.count} />
				))}
			</div>

			<PaginationCustom
				pageCount={Math.ceil(pagination._totalRows / pagination._limit)}
				page={pagination._page - 1}
				changePage={handlePageChange}
			/>
		</div>
	);
};

export default Tag;
