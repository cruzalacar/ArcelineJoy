import React, { Component } from 'react';
import '../css/background.css';

class EducationBox extends React.Component{
    render() {
        return(
            <div>
                <div className="info-box-grey">
                    <h3>Applied Computer Science (Mobile Computing), Sheridan College, Oakville ON</h3>
                    <h3> Expected: 2021</h3>
                    <p>• Focused on the developement of mobile and web developement for operating systems like Android and iOS.</p>
                    <p>• Studied programming languages suh as C#, Java, Python & Swift.</p>
                    <p>• Learned to use React, CSS and HTML for front end web development.</p>

                    <h3>Applied Computer Science (Information Security), Sheridan College, Oakville ON</h3>
                    <h3>2014 - 2015</h3>
                    <p>• Focused on the security of data on all devices with access to the internet.</p>
                    <p>• Studied programming lanugages such as C and Java.</p>
                </div>
            </div>
        );
    }
}

export default EducationBox;