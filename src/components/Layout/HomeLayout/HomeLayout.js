import React from 'react';
import Header from '../../Common/Header/Header';
import Routes from '../../Common/Routes';
import Sidebar from '../../Common/Sidebar/Sidebar';

import './homelayout.css';

const HomeLayout = (props) => {
	return (
		<div className='layout'>
			<div className='layout__header'>
				<Header />
			</div>
			<div className='layout__sidebar'>
				<Sidebar {...props} />
			</div>
			<div className='layout__content'>
				<Routes />
			</div>
		</div>
	);
};

export default HomeLayout;
