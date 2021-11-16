import React from 'react';
import { Link } from 'react-router-dom';
import LinkButton from '../../../components/Common/LinkButton/LinkButton';
import RightBanner from '../../../components/Common/RightBanner/RightBanner';

import './userDetail.css';

const userDetail = () => {
	return (
		<>
			<div className='user-detail'>
				<div className='col-9 user-detail__info'>
					<div className='user-detail__info-banner'>Profile</div>
					<div className='row user-detail__info-profile'>
						<div className='user-detail__info-profile-avatar'>
							<div className='user-detail__info-profile-avatar-wrapper'>
								<img src='https://secure.gravatar.com/avatar/5f4cded9bced9500173faf1a?s=164&d=identicon' />
							</div>
						</div>
						<div className='user-detail__info-profile-detailed'>
							<h3>mayank</h3>
							<p className='user-detail__info-time'>
								user created - 5 days ago
							</p>
							<div className='row user-detail__info-profile-detailed-numbers'>
								<div className='user-detail-quantity'>
									<p>0</p>
									<span>answers</span>
								</div>
								<div className='user-detail-quantity'>
									<p>1</p>
									<span>comments</span>
								</div>
								<div className='user-detail-quantity'>
									<p>2</p>
									<span>answers</span>
								</div>
								<div className='user-detail-quantity'>
									<p>1</p>
									<span>tags</span>
								</div>
							</div>
							<div className='user-detail__info-profile-questions'>
								<h3>List Questions</h3>
								<div class='border' />
								<div className='user-detail-post'>
									<div className='user-detail-post-number'>
										<p>1</p>
									</div>

									<div className='user-detail-post-title'>
										<Link to='/questions/12321'>
											<p>
												Javascript is the best
												programmingaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasddddddddddddddddddddddddddddddddddddddddddddddddd
											</p>
										</Link>
									</div>

									<div className='user-detail-post-time'>1 day ago</div>
								</div>
								<div className='user-detail-post'>
									<div className='user-detail-post-number'>
										<p>2</p>
									</div>

									<div className='user-detail-post-title'>
										<Link to='/questions/12321'>
											<p>Javascript is the best programming</p>
										</Link>
									</div>

									<div className='user-detail-post-time'>1 day ago</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='col-3' style={{ paddingTop: '30px', width: '20%' }}>
					<RightBanner />
				</div>
			</div>
		</>
	);
};

export default userDetail;
