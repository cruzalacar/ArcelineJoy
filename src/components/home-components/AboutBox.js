import React, { Component } from 'react';
import '../css/background.css';

class AboutBox extends React.Component{
    render() {
        return(
            <div>
                <div className="info-box-light">
                    <h3>About Me</h3>
                    <p>
                            Hello, My name is Arceline Joy Cruz, aka AJ. I am a student attending the Bachelor of Mobile Computing at
                        Sheridan. I have an interest in front end web development so I build this website using React to showcase my abilities.
                    </p>
                </div>
            </div>
        );
    }
}

export default AboutBox;