import React from 'react';
import { Link } from 'react-router';

import Logo from './Logo';

const Nav = (props) => {

return (
		<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">           
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                 <Link to="/" className="navbar-brand"><Logo /></Link>                
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link to="/about" >About Us</Link>
                    </li>
                    <li>
                         <Link to="/faq" >Faq</Link>                     
                    </li>
                    <li>
                         <Link to="/contact" >Contact Us</Link>                
                    </li>
                </ul>
            </div>
        </div>
    </nav>
	)
};

export default Nav;