import React from 'react';
import ReactDOM from 'react-dom';
import './navbar.css';

class NavBar extends React.Component {

    render () {
        return(
            <div className="navbar-following">
                <a href="#home"> Arceline Joy </a>
                <a href="#home"> Home </a>
                <a href="#projects"> Projects </a>
                <a href="#contact"> Contact Me </a>
            </div>
        );
    }
}

  
export default NavBar;