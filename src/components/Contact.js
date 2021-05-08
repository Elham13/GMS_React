import React from 'react'
import '../styles/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import MapContainer from './partials/Map'

function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="titleWrapper">
                <h1 className="title1">Contact us</h1>
                <span className="line1"></span>
                <span className="line2"></span>
            </div>

            <div className="contactWrapper">
                <div className="formWrapper">
                    <h2>We'd love to hear from you</h2>
                    <form>
                        <div className="inputWrapper">
                            <input type="text" required />
                            <p>Email</p>
                        </div>
                        <div className="inputWrapper">
                            <input type="text" required />
                            <p>Name</p>
                        </div>
                        <div className="textareaWrapper">
                            <p>Message</p>
                            <textarea type="text" placeholder="Type a message" />
                        </div>
                        <button>Submit</button>
                    </form>
                    <div className="formBottom">
                        <p>Get updated on: </p>
                        <div>
                            <a href="/"><FontAwesomeIcon icon={faFacebook} color="#37B9f1" /> Facebook</a>
                            <a href="/"><FontAwesomeIcon icon={faTwitter} color="#37B9f1" /> Twitter</a>
                            <a href="/"><FontAwesomeIcon icon={faInstagram} color="#37B9f1" /> Instagram</a>
                            <a href="/"><FontAwesomeIcon icon={faLinkedin} color="#37B9f1" /> LinkedIn</a>
                        </div>
                    </div>
                </div>
                
                <div className="mapWrapper">
                    <h2>Reach out to us directly</h2>

                    <div className="address">
                        <div className="wrapper">
                            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" color="#37B9f1"  />
                            <div className="addresInner" >
                                <p>11-151/1, Gaddiannaram, Opp. ICICI ATM</p>
                                <p>Near Shiva Ganga Theater</p>
                                <p>Dilsukhnagar, Hyderabad, India, 500060</p>
                            </div>
                        </div>

                        <div className="wrapper">
                            <FontAwesomeIcon icon={faPhone} size="lg" color="#37B9f1"  />
                            <div className="addresInner" >
                                <p>+91-9985330008</p>
                                <p>+91-9985330004</p>
                                <p>+91-6300590015</p>
                            </div>
                        </div>

                        <div className="wrapper">
                            <FontAwesomeIcon icon={faEnvelope} size="lg" color="#37B9f1"  />
                            <div className="addresInner">
                                <p style={{color: 'transparent'}}> .</p>
                                <p>myads.gms@gmail.com</p>
                                <p style={{color: 'transparent'}}> .</p>
                            </div>
                        </div>
                    </div>

                    <div className="map">
                        <MapContainer />
                    </div>
                    
                </div>
            </div>
           
        </div>
    )
}

export default Contact
