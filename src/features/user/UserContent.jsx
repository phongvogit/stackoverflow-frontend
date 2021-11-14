import React from 'react';
import RightBanner from '../../components/Common/RightBanner/RightBanner';
import SearchCustom from '../../components/Common/SearchCustom/SearchCustom';
import CardUser from './components/CardUser';

import './userContent.css';

const UserContent = () => {
	return (
		<div className='user-content'>
			<div className='col-9 user-content__info'>
				<h2 className='headline'>Users</h2>
				<h4 className='quantity'>7 users</h4>
				<div className='search-form'>
					<SearchCustom />
				</div>

				<div className='grid-layout-users'>
					<CardUser />
					<CardUser />
					<CardUser />
					<CardUser />
				</div>
			</div>
			<div className='col-3' style={{ paddingTop: '30px', width: '20%' }}>
				<RightBanner />
			</div>
		</div>
	);
};

export default UserContent;
