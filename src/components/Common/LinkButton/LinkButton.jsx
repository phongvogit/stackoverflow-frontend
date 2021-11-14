import React from 'react';
import './linkButton.css';

const LinkButton = ({ label, type, ...props }) => {
	return (
		<>
			<button className={`s-btn ${type}`} {...props}>
				{label}
			</button>
		</>
	);
};

export default LinkButton;
