import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import InputCustom from '../../components/Common/InputCustom/InputCustom';
import PaginationCustom from '../../components/Common/Pagination/Pagination';
import { InputField } from '../../components/FormFields/InputField/InputField';
import CardUser from './components/CardUser';
import './User.css';
import {
	selectUserFilter,
	selectUserList,
	selectUserPagination,
	userActions,
} from './userSlice';

const User = () => {
	const dispatch = useDispatch();
	const pagination = useAppSelector(selectUserPagination);
	const filter = useAppSelector(selectUserFilter);
	const userList = useAppSelector(selectUserList);

	useEffect(() => {
		dispatch(userActions.fetchUserList(filter));
	}, [dispatch, filter]);

	const handlePageChange = ({ selected }) => {
		dispatch(
			userActions.setFilter({
				...filter,
				_page: selected + 1,
			}),
		);
	};

	const handleSearchChange = e => {
		const username = e.target.value;
		const newFilter = {
			...filter,
			_page: 1,
		};
		dispatch(userActions.setFilterWithDebounce({ newFilter, username }));
	};

	return (
		<div className='user'>
			<h2>Users</h2>
			<h4>7 users</h4>
			<div className='user__search'>
				<InputField
					icon='search'
					placeholder='Search here...'
					onChange={handleSearchChange}
				/>
			</div>

			<div className='user__grid-layout-users'>
				{userList.map(({ profilePhoto, username, question_doc, created }) => (
					<CardUser
						profilePhoto={profilePhoto}
						username={username}
						question_doc={question_doc}
						created={created}
					/>
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

export default User;
