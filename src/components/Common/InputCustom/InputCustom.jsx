import React from 'react';

import './InputCustom.css';

const InputCustom = ({ placeholder, icon }) => {
	return (
		<>
			<div className='input'>
				{icon && <i className={`bx bx-${icon}`}></i>}
				<input type='text' placeholder={placeholder} />
			</div>
		</>
	);
};

export default InputCustom;
