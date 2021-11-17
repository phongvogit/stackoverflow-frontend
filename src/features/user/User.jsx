import React from 'react';
import InputCustom from '../../components/Common/InputCustom/InputCustom';
import CardUser from './components/CardUser';
import './User.css';

const User = () => {
	return (
		<div className='user'>
			<h2>Users</h2>
			<h4>7 users</h4>
			<div className='user__search'>
				<InputCustom icon='search' placeholder='Search here...' />
			</div>

			<div className='user__grid-layout-users'>
				<CardUser />
				<CardUser />
				<CardUser />
				<CardUser />
			</div>
		</div>
	);
};

export default User;
