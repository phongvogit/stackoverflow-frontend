import React from 'react';
import LinkButton from '../LinkButton/LinkButton';

const GroupButtons = ({ labels }) => {
	return (
		<>
			{labels.map((label, idx) => {
				let classes = ['btn--second', 'border-r-0'];
				if (idx === 0) {
					classes.push('border-r-left');
				} else {
					classes.push('border-left-none');
					if (idx === labels.length - 1) {
						classes.push('border-r-right');
					}
				}

				return <LinkButton type={classes.join(' ')} label={label} />;
			})}
		</>
	);
};

export default GroupButtons;
