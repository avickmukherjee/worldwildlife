import React from 'react';
import logoImage from './image/logo.png';

const Logo = (props) => {
	
	return(
			<div>
				<img className="logo" src={logoImage} height="40" alt=""></img>
			</div>
		);

}
export default Logo;