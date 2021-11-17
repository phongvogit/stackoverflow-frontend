import React from 'react';
import CardUser from './components/CardUser';
import './userContent.css';

const UserContent = () => {
	return (
		<div className='user-content'>
			<div className='user-content__info'>
				<h2 className='headline'>Users</h2>
				<h4 className='quantity'>7 users</h4>
				<div className='search-form'>
					<InputCustom icon='search' placeholder='Search here...' />
				</div>

				<div className='grid-layout-users'>
					<CardUser />
					<CardUser />
					<CardUser />
					<CardUser />
				</div>
			</div>
		</div>
	);
};

export default UserContent;
