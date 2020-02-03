import React, { Components } from 'react';
import './css/contact.css';
import { SocialIcon } from 'react-social-icons';

class Contact extends React.Component {
    render() {
        return (

            <div >
                <div className="bgimg-5">
                    <div className="contact-info-box">
                        <div className="contact-header">
                            Arceline Joy Cruz
                        </div>
                        <div className="img-avatar"></div>
                        <div className="contact-info">
                            School Email: cruzalac@sheridancollege.ca
                        </div>
                        <div className="contact-info">
                            Personal Email: cruzalacar@outlook.com
                        </div>
                        <div className="contact-info">
                            Follow Me!
                        </div>

                        <div className="contact-icon" >
                            <SocialIcon url="https://www.instagram.com/aj8bits/" />
                            <p>Instagram: @aj8bits</p>
                        </div>
                        <div className="contact-icon" >
                            <SocialIcon url="https://github.com/cruzalacar" />
                            <p>Github: cruzalacar</p>
                        </div>
                        <div className="contact-icon" >
                            <SocialIcon url="https://www.linkedin.com/in/arceline-joy-cruz-alacar-603358117/" />
                            <p>LinkedIn: Arceline Joy Cruz Alacar</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Contact;