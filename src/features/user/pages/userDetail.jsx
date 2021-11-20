import React from 'react';
import { Link } from 'react-router-dom';
import './userDetail.css';

const userDetail = () => {
	return (
		<div className='user-detail'>
			<div className='user-detail__title'>Profile</div>
			<div className='user-detail__profile'>
				<div className='user-detail__profile__avatar'>
					<img
						src='https://secure.gravatar.com/avatar/5f4cded9bced9500173faf1a?s=164&d=identicon'
						alt='avatar'
					/>
				</div>
				<div className='user-detail__profile__info'>
					<h3>mayank</h3>
					<p className='user-detail__profile__info__date'>
						user created - 5 days ago
					</p>
					<div className='user-detail__profile_info__numbers'>
						<div className='user-detail__profile_info__numbers-inner'>
							<p>0</p>
							<span>answers</span>
						</div>
						<div className='user-detail__profile_info__numbers-inner'>
							<p>1</p>
							<span>comments</span>
						</div>
						<div className='user-detail__profile_info__numbers-inner'>
							<p>2</p>
							<span>answers</span>
						</div>
						<div className='user-detail__profile_info__numbers-inner'>
							<p>1</p>
							<span>tags</span>
						</div>
					</div>
					<div className='user-detail__profile__questions'>
						<h3>List Questions</h3>
						<hr />
						<div className='user-detail__profile__questions__post'>
							<div className='user-detail__profile__questions__post__number'>
								<p>1</p>
							</div>

							<div className='user-detail__profile__questions__post__title'>
								<Link to='/questions/12321'>
									<p>Javascript is the best sad asd</p>
								</Link>
							</div>

							<div className='user-detail__profile__questions__post__date'>
								1 day ago
							</div>
						</div>
						<div className='user-detail__profile__questions__post'>
							<div className='user-detail__profile__questions__post__number'>
								<p>1</p>
							</div>

							<div className='user-detail__profile__questions__post__title'>
								<Link to='/questions/12321'>
									<p>Javascript is the best sad asd</p>
								</Link>
							</div>

							<div className='user-detail__profile__questions__post__date'>
								1 day ago
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default userDetail;
