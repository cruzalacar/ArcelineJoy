import React, { Component } from 'react';
import './css/background.css';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="bgimg-1">
                    <div className="hello-box" >
                        <h1> Hello, </h1>
                        <h1> I'm Arceline </h1>
                    </div>
                </div>
                <div className="info-box-light">
                    <h1>WORK IN PROGRESS</h1>
                    <p>
                        Hello, My name is Arceline Joy Cruz, aka AJ. I am a student attending the Bachelor of Mobile Computing at
                        Sheridan. I build this website using React.
                    </p>
                </div>
                <div className="bgimg-2">
                    <div className="title-box">
                        <h1>   Skills & Technologies</h1>
                    </div>
                </div>
                <div className="info-box-dark ">
                    <h3>Programming Languages</h3>
                    <p>C#, Python, Java, C & Swift</p>
                    <h3>Web Technologies</h3>
                    <p>React, Javascript, CSS & HTML</p>
                    <h3>Database</h3>
                    <p>MySQL, MS SQL Server & SQLite</p>
                    <h3>APIs</h3>
                    <p>Django</p>
                </div>
                <div className="bgimg-3">
                    <div className="title-box">
                        <h1>Education</h1>
                    </div>
                </div>
                <div className="info-box-grey">
                    <h3>Applied Computer Science (Mobile Computing), Sheridan College, Oakville ON</h3>
                    <h3> Expected: 2021</h3>
                    <p>• Focus on the developement of mobile and web applications for operating systems like Android and iOS.</p>
                    <p>• Studied programming languages suh as C#, Java, Python & Swift.</p>
                    <p>• Learned to use React, CSS and HTML for front end web development.</p>
                    
                    <h3>Applied Computer Science (Information Security), Sheridan College, Oakville ON</h3>
                    <h3>2014 - 2015</h3>
                    <p>• Focus on technological security on all devices regarding privacy through internet access.</p>
                    <p>• Studied programming lanugages such as C and Java.</p>
                </div>
                <div className="bgimg-4">
                    <div className="title-box">
                        <h1>Work Experience</h1>
                    </div>

                </div>
                <div className="info-box-dark">
                    <h3>Receptionist & Assistant, Guerrero Law Professional Corp, Brampton ON</h3>
                    <p>• Responded to real eastate inquires.</p>
                    <p>• Arranged appointments with clients and set reminders for clients and employer.</p>
                    <p>• Knowledgeable in LawPro, Conveyancer, work & excel.</p>
                    
                    <h3>Customer Service & Order Entry, Fujifilm, Mississauga ON</h3>
                    <p>• Collected and updated data to assist with customer issues and concerns.</p>
                    <p>• Tracked and documented all received requests in an incident management system.</p>
                </div>

            </div>

        );
    }
}

export default Home;