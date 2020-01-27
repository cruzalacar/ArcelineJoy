import React from 'react';
import ReactDOM from 'react-dom';

class NavBar extends React.Component {

    render () {
        return(
            <div className="following bar light fixed">
               <div  className="ui container">
                   <div className="ui large secondary menu">
                        <div className="item">
                            <div className="ui logo">
                                Arceline Joy
                            </div>
                        </div>
                        <a className="view-ui item">
                            <i className="sidebar icon"></i>
                            Menu
                        </a>
                        <a className="view-ui item">
                            Home
                        </a>
                        <a className="view-ui item">
                            Resume
                        </a>
                        <a className="view-ui item">
                            Projects
                        </a>
                        <a className="view-ui item">
                            Contact Me
                        </a>
                   </div>
               </div>
            </div>
        );
    }
}

  
export default NavBar;