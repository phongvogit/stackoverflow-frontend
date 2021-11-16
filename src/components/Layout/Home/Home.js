import React from 'react';
import Header from '../../Common/Header/Header';
import RightBanner from '../../Common/RightBanner/RightBanner';
import Routes from '../../Common/Routes';
import Sidebar from '../../Common/Sidebar/Sidebar';

import './Home.css';

const Home = (props) => {
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
					<RightBanner />
				</div>
			</div>
		</div>
	);
};

export default Home;
