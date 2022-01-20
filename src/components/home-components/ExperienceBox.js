import React, { Component } from 'react';
import '../css/background.css';

class ExperienceBox extends React.Component{
    render() {
        return(
            <div>
                <div className="info-box-dark">
                    <h3>Legal Assisant, Guerrero Law Professional Corp, Brampton ON</h3>
                    <p>• Arranged appointments with clients and set reminders for upcoming transactions for employer and clients.</p>
                    <p>• Responded to real estate inquiries from clients.</p>
                    <p>• Assisted with file preparation, such as opening files and organizing documents for the proper transaction.</p>

                    <h3>Quality Assurance, UPS, Caledon ON</h3>
                    <p>• Tracked and documented all service requests in an incident management system.</p>
                    <p>• Collected returned packages and updated the status report to ensure the issue is dealt with in a timely fashion.</p>
                    <p>• Entered a package information into an order management system using an RF scanner.</p>
                    
                </div>
            </div>
        );
    }
}

export default ExperienceBox;