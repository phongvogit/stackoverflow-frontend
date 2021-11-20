import React from 'react';
import './InputField.css';

export function InputField({ name, placeholder, icon, error, inputProps }) {
	return (
		<>
			<div className='input'>
				{icon && <i className={`bx bx-${icon} input__icon`}></i>}
				<input
					className={`input__field ${icon && 'input__field-space-icon'}`}
					type='text'
					placeholder={placeholder}
					{...inputProps}
				/>
			</div>
			{error && <p className='input__errors'>* {error.message}</p>}
		</>
	);
}
