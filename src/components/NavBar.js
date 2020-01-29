import React from 'react';
import {Link} from 'react-router-dom';
import './css/navbar.css';
import {SocialIcon} from 'react-social-icons';


class NavBar extends React.Component {

    render () {
        return(
            <div className="navbar-following">
                <div>
                    <Link to="/">Arceline Joy</Link>
                    <Link to="/">Home</Link>
                    <Link to="/Projects">Projects</Link>
                    <Link to="/Contact">Contact</Link>
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