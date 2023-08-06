import React from 'react';
import {Link} from 'react-router-dom';

const MostFollowedUser = ({user : {avatar_url,followers_url,following_url,login}}) =>{
	

	return(
		<li className="main_card">
			<div className="main_card-img">
				<img src={avatar_url} alt="avatar url" />
			</div>
			<div className="main_card-content">
				<h2 className="main_card-title"><span className="color_secondary">username:</span>{' '}{login}</h2>
				<Link to={`/user/${login}`} className="button button_primary">more</Link>
			</div>
		</li>
	)

}

export default MostFollowedUser;
// <p className="main_card-text">{bio}</p>