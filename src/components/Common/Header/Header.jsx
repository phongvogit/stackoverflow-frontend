import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { ReactComponent as Logo } from '../../../assets/images/LogoMd.svg';
import {
	authActions,
	selectCurrentUser,
} from '../../../features/auth/authSlice';
import InputCustom from '../InputCustom/InputCustom';
import LinkButton from '../LinkButton/LinkButton';
import './Header.css';
import SideNavBar from './SideNavBar/SideNavBar';

const Header = props => {
	const currentUser = useAppSelector(selectCurrentUser);
	const dispatch = useAppDispatch();
	const history = useHistory();

	const handleLogoutClick = () => {
		dispatch(authActions.logout());
	};

	const handleLoginClick = () => {
		history.push('/login', { from: window.location.pathname });
	};

	const handleSignUpClick = () => {
		history.push('/signup', { from: window.location.pathname });
	};

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
						<InputCustom icon='search' placeholder='Search here...' />
					</div>
					<div className='header__container__right__buttons'>
						{currentUser ? (
							<>
								<img src={currentUser.profilePhoto} alt='avatar' />
								<LinkButton
									type={'btn--second'}
									label={'Log out'}
									handleClick={handleLogoutClick}
								/>
							</>
						) : (
							<>
								<LinkButton
									type={'btn--primary mr-1'}
									label={'Login'}
									handleClick={handleLoginClick}
								/>
								<LinkButton
									type={'btn--second'}
									label={'Sign up'}
									handleClick={handleSignUpClick}
								/>
							</>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
