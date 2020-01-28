import React from 'react';
import ReactDOM from 'react-dom';
import './navbar.css';
import {SocialIcon} from 'react-social-icons';

class NavBar extends React.Component {

    render () {
        return(
            <div className="navbar-following">
                <div>
                    <a href="#home"> Arceline Joy </a>
                    <a href="#home"> Home </a>
                    <a href="#projects"> Projects </a>
                    <a href="#contact"> Contact Me </a>
                </div>
                <div className="icon">
                    <SocialIcon url="https://github.com/cruzalacar" />
                    <SocialIcon url="https://www.linkedin.com/in/arceline-joy-cruz-alacar-603358117/" />
                </div>
            </div>
        );
    }
}

  
export default NavBar;