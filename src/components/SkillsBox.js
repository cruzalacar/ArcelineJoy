import React, { Component } from 'react';
import './css/background.css';

class SkillsBox extends React.Component{
    render() {
        return(
            <div>
                <div className="info-box-dark">
                    <div className="info-box-col left">
                        <h3>Programming Languages</h3>
                        <div>
                            <img src="https://img.icons8.com/color/48/000000/c-sharp-logo-2.png" />
                            <p>C#</p>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" />
                            <p>Java</p>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/color/48/000000/python.png" />
                            <p>Python</p>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/color/48/000000/c-programming.png" />
                            <p>C</p>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/color/48/000000/swift.png" />
                            <p>Swift</p>
                        </div>
                    </div>
                    <div className="info-box-col middle">
                        <h3>Web Technologies</h3>
                        <div>
                            <img src="https://img.icons8.com/plasticine/100/000000/react.png" />
                            <p>React</p>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/ios-filled/50/000000/javascript-logo.png" />
                            <p>Javascript</p>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/color/50/000000/css3.png" />
                            <p>CSS</p>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/color/48/000000/html-5.png" />
                            <p>HTML</p>
                        </div>
                        <div>
                            <p>Django</p>
                        </div>

                    </div>
                    <div className="info-box-col right">
                        <h3>Database</h3>
                        <div>
                            <p>MySQL</p>
                        </div>
                        <div>
                            <p>MS SQL Server</p>
                        </div>
                        <div>
                            <p>SQLite</p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default SkillsBox;