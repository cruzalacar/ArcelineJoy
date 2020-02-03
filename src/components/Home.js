import React, { Component } from 'react';
import './css/background.css';
import About from './home-components/AboutBox';
import Skills from './home-components/SkillsBox';
import Education from './home-components/EducationBox';
import Experience from './home-components/ExperienceBox';
import IconLinks from './home-components/IconLinks';

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
                <div className="bgimg-6"></div>
                <IconLinks />
            </div>
        );
    }
}

export default Home;