import React from 'react';
import './TextArea.css';

export function TextArea({ name, placeholder, error, inputProps }) {
	return (
		<>
			<textarea
				className='text-area'
				rows='10'
				placeholder={placeholder}
				{...inputProps}></textarea>

			{error && <p className='input__errors'>* {error.message}</p>}
		</>
	);
}
