import React from 'react';
import './linkButton.css';

const LinkButton = ({ label, type, href, handleClick, ...props }) => {
	return (
		<>
			<button {...props} className={`btn ${type}`} onClick={handleClick}>
				{label}
			</button>
		</>
	);
};

export default LinkButton;
