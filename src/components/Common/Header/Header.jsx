import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/images/LogoMd.svg';
import LinkButton from '../LinkButton/LinkButton';
import SearchCustom from '../SearchCustom/SearchCustom';

import './header.css';
import SideNavBar from './SideNavBar/SideNavBar';

const Header = (props) => {
	return (
		<header className='header'>
			<div className='header__container'>
				<div className='header__container__mobile'>
					<SideNavBar {...props} />
				</div>
				<div className='header__container__left'>
					<Link to='/'>
						<Logo />
					</Link>
				</div>
				<div className='header__container__right'>
					<div className='header__container__right__search'>
						<SearchCustom />
					</div>
					<div className='header__container__right__buttons'>
						<LinkButton
							type={'btn--primary mr-1'}
							label={'Login'}
							href='/login'
						/>
						<LinkButton type={'btn--second'} label={'Sign up'} href='/signup' />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
