import React, { Component } from 'react';
import './css/background.css';
import About from './AboutBox';
import Skills from './SkillsBox';
import Education from './EducationBox';
import Experience from './ExperienceBox';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="bgimg-1" >
                    <div className="hello-box" >
                        <h1> Hello, </h1>
                        <h1> I'm Arceline Cruz</h1>
                    </div>
                </div>
                <About />
                <div className="bgimg-2">
                    <div className="title-box">
                        <h1>   Skills & Technologies</h1>
                    </div>
                </div>
                <Skills />
                <div className="bgimg-3">
                    <div className="title-box">
                        <h1>Education</h1>
                    </div>
                </div>
                <Education />
                <div className="bgimg-4">
                    <div className="title-box">
                        <h1>Work Experience</h1>
                    </div>
                </div>
                <Experience />
                <div className="bgimg-1"></div>
            </div>
        );
    }
}

export default Home;