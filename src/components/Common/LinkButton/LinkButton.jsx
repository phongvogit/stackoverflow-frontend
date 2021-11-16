import React from 'react';
import { useHistory } from 'react-router-dom';
import './linkButton.css';

const LinkButton = ({ label, type, href, ...props }) => {
	const history = useHistory();

	const handleButtonClick = () => {
		history.push(Boolean(href) ? href : '#');
	};

	return (
		<>
			<button {...props} className={`btn ${type}`} onClick={handleButtonClick}>
				{label}
			</button>
		</>
	);
};

export default LinkButton;
