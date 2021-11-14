import React from 'react';

import './searchCustom.css';

const SearchCustom = () => {
	return (
		<>
			<div className='search'>
				<i className='bx bx-search'></i>
				<input type='text' placeholder='Search here...' />
			</div>
		</>
	);
};

export default SearchCustom;
