import React, { Component } from 'react';
import './css/background.css';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className={`bgimg-1`}>
                    <div className={`hello-box`} >
                        <h1> Hello, </h1>
                        <h1> I'm Arceline </h1>
                    </div>
                </div>
                <div className={`info-box-light`}>
                    <h1>WORK IN PROGRESS</h1>
                    <p>
                        Hello, My name is Arceline Joy Cruz, aka AJ. I am a student attending the Bachelor of Mobile Computing at
                        Sheridan
                        </p>
                </div>
                <div className={`bgimg-2`}></div>
                <div className={`info-box-dark`}>
                    <p>
                        Skills & Technologies

                        Programming languages
                        - C#, Python, Java, C, Swift

                        Web Technologies
                        - React, Javascript, CSS, HTML

                        Database
                        - MySQL, MS SQL Server, SQLite,

                        APIs
                        - Django

                    </p>
                </div>
                <div className={`bgimg-3`}></div>
                <div className={`info-box-light`}>
                    <p>
                        Education

                        Applied Computer Science (Mobile Computing), Sheridan College, Oakville ON
                        Expected: 2021
                        - Focus on the developement of mobile and web applications for operating systems like Android and iOS.
                        - Studied programming languages suh as C#, Java, Python & Swift.
                        - Learned to use React, CSS and HTML for front end web development.

                        Applied Computer Science (Information Security), Sheridan College, Oakville ON
                        2014 - 2015
                        - Focus on technological security on all devices regarding privacy through internet access.
                        - Studied programming lanugages such as C and Java.
                    </p>
                </div>
                <div className={`bgimg-4`}></div>
                <div className={`info-box-dark`}>
                    <p>
                        Work Experience
    
                        Receptionist & Assistant, Guerrero Law Professional Corp, Brampton ON
                        - Responded to real eastate inquires.
                        - Arranged appointments with clients and set reminders for clients and employer
                        - Knowledgeable in LawPro, Conveyancer, work & excel.
    
                        Customer Service & Order Entry, Fujifilm, Mississauga ON
                        - Collected and updated data to assist with customer issues and concerns.
                        - Tracked and documented all received requests in an incident management system.
                    </p>
                </div>

            </div>

        );
    }
}

export default Home;