import React, { Component } from 'react';
import './css/background.css';

class ExperienceBox extends React.Component{
    render() {
        return(
            <div>
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

export default ExperienceBox;