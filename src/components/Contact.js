import React, { Components } from 'react';
import './css/contact.css';
import { SocialIcon } from 'react-social-icons';

class Contact extends React.Component {
    render() {
        return (

            <div >
                <div className="bgimg-5">
                    <div className="contact-info-box">
                        <h1>
                            Arceline Joy Cruz
                        </h1>
                        <p>
                            School Email: cruzalac@sheridancollege.ca
                           Personal Email: cruzalacar@outlook.com

                        </p>
                        <p>
                            Follow Me!
                            Instagram: @aj8bits
                            LinkedIn: Arceline Joy Cruz Alacr
                            Github: cruzalacar
                        </p>

                        <SocialIcon url="https://www.instagram.com/aj8bits/" >
                            <div>Instagram: @aj8bits</div>
                        </SocialIcon>
                        
                        <br />
                        <SocialIcon url="https://github.com/cruzalacar" /><br />
                        <SocialIcon url="https://www.linkedin.com/in/arceline-joy-cruz-alacar-603358117/" /><br />


                    </div>
                </div>
            </div>

        );
    }
}

export default Contact;