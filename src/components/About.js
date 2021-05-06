import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/About.css'
import elham from '../assets/img/elham.png'
import muzamil from '../assets/img/muzamil.png'
import chary from '../assets/img/chary.png'
import dummy from '../assets/img/dummy-profile.png'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"

function About() {
    return (
        <div className="about" id="about">
            <div className="titleWrapper">
                <h1 className="title1">About us</h1>
                <span className="line1"></span>
                <span className="line2"></span>
            </div>

            <div className="aboutInner">
                <h3>GMS is a 360 degree advertising company. We believe that creative collaboration can happen anywhere and want our team to work where they feel most comfortable and inspired.</h3>
                <h3>GMS in Hyderabad has been giving multiple Print/Digital marketing services to
                    several Brands & Organizations and have created a reputation for being a pioneer
                    for print & media agency with our high quality service.</h3>
                <h1>Our team</h1>

                    <div className="team">
                        <div className="our-team">
                            <div className="pic">
                                <img src={chary} alt="profile" />
                            </div>

                            <div className="team-content">
                                <h3 className="title">Chary</h3>
                                <span className="post">Chaireman</span>
                            </div>
                
                            <ul className="social">
                                <li><a href="/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                <li><a href="/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href="/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            </ul>
                        </div>

                        <div className="our-team">
                            <div className="pic">
                                <img src={dummy} alt="profile" />
                            </div>

                            <div className="team-content">
                                <h3 className="title">Keerthana</h3>
                                <span className="post">Manager</span>
                            </div>
                
                            <ul className="social">
                                <li><a href="/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                <li><a href="/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href="/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            </ul>
                        </div>

                        <div className="our-team">
                            <div className="pic">
                                <img src={elham} alt="profile" />
                            </div>

                            <div className="team-content">
                                <h3 className="title">Elhamuddin</h3>
                                <span className="post">Software developer</span>
                            </div>
                
                            <ul className="social">
                                <li><a href="/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                <li><a href="/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href="/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            </ul>
                        </div>

                        <div className="our-team">
                            <div className="pic">
                                <img src={muzamil} alt="profile" />
                            </div>

                            <div className="team-content">
                                <h3 className="title">Muzamil</h3>
                                <span className="post">Software developer</span>
                            </div>
                
                            <ul className="social">
                                <li><a href="/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                <li><a href="/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href="/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            </ul>
                        </div>
                    </div>

                </div>

        </div>
    )
}

export default About
