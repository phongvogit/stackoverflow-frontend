import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/images/LogoMd.svg';
import LinkButton from '../LinkButton/LinkButton';
import SearchCustom from '../SearchCustom/SearchCustom';

import './header.css';

const Header = () => {
	return (
		<header className='header bs'>
			<div className='header__left'>
				<Link to='/'>
					<Logo className='full-logo' />
				</Link>
			</div>
			<div className='header__right'>
				<div className='header__right__search'>
					<SearchCustom />
				</div>
				<div className='header__right__buttons'>
					<LinkButton
						type={'s-btn__primary mr-1'}
						label={'Login'}
						href='/login'
					/>
					<LinkButton type={'s-btn__second'} label={'Sign up'} href='/signup' />
				</div>
			</div>
		</header>
	);
};

export default Header;
