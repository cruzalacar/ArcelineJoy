import React, {Component} from 'react';

import './background.css';
import NavBar from './NavBar';




class App extends React.Component { 

    render() {
        return (
            <div>
                <NavBar />
                <div className={`bgimg-1`}>
                    <span>My name is Arceline Cruz</span>
                    
                    
                    
                </div>
                <div className={`info-box`}>
                    <div className={`info-box-name`}>
                        Hello World
                    </div>
                </div>
                <div className={`bgimg-2`}></div>
                <div className={`info-box`}>
                    <div className={`info-box-title`}>
                        Skills & Technologies
                        <div className={`info-box-text`}>
                            C#
                        </div>
                    </div>
                </div>
                <div className={`bgimg-3`}></div>
                <div className={`info-box`}>
                    <div className={`info-box-title`}>
                        Experience
                        <div className={`info-box-text`}>

                        </div>
                    </div>
                </div>
                <div className={`bgimg-4`}></div>       
            </div>
        );
    }
}

export default App;