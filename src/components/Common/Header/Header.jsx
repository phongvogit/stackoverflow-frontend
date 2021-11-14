import React from 'react';
import { ReactComponent as Logo } from '../../../assets/images/LogoMd.svg';
import LinkButton from '../LinkButton/LinkButton';
import SearchCustom from '../SearchCustom/SearchCustom';

import './header.css';

const Header = () => {
	return (
		<header className='header bs'>
			<div className='header__left'>
				<Logo className='full-logo' />
			</div>
			<div className='header__right'>
				<div className='header__right__search'>
					<SearchCustom />
				</div>
				<div className='header__right__buttons'>
					<LinkButton type={'s-btn__primary mr-1'} label={'Login'} />
					<LinkButton type={'s-btn__second'} label={'Sign up'} />
				</div>
			</div>
		</header>
	);
};

export default Header;
