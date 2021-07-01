import React from "react";
import "../styles/About.css";
import elham from "../assets/img/elham.png";
import muzamil from "../assets/img/muzamil.png";
import chary from "../assets/img/chary.png";
import dummy from "../assets/img/dummy-profile.png";

function About() {
    return (
        <div className="about" id="about">
            <div className="titleWrapper">
                <h1 className="title1">About us</h1>
                <span className="line1"></span>
                <span className="line2"></span>
            </div>

            <div className="aboutInner">
                <h3>
                    GMS is a 360 degree advertising company. We believe that creative collaboration can happen anywhere
                    and want our team to work where they feel most comfortable and inspired.
                </h3>
                <h3>
                    GMS in Hyderabad has been giving multiple Print/Digital marketing services to several Brands &
                    Organizations and have created a reputation for being a pioneer for print & media agency with our
                    high quality service.
                </h3>
                <h1>Our team</h1>

                <div className="team">
                    <div className="our-team">
                        <div className="pic">
                            <img src={chary} alt="profile" loading="lazy" />
                        </div>

                        <div className="team-content">
                            <h3 className="title">Chary</h3>
                            <span className="post">Chaireman</span>
                        </div>

                        <ul className="social">
                            <li>
                                <a
                                    href="https://www.facebook.com/balabrahma.chary.376"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/bala-brahma-chary-64ba0713b/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="our-team">
                        <div className="pic">
                            <img src={dummy} alt="profile" loading="lazy" />
                        </div>

                        <div className="team-content">
                            <h3 className="title">Keerthana</h3>
                            <span className="post">Manager</span>
                        </div>

                        <ul className="social">
                            <li>
                                <a href="/">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="our-team">
                        <div className="pic">
                            <img src={elham} alt="profile" loading="lazy" />
                        </div>

                        <div className="team-content">
                            <h3 className="title">Elhamuddin</h3>
                            <span className="post">Software developer</span>
                        </div>

                        <ul className="social">
                            <li>
                                <a href="https://www.facebook.com/elhamuddin.mahmoodi" target="_blank" rel="noreferrer">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/Elham1305140" target="_blank" rel="noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/elhamuddin_mahmoodi"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/elhamuddin-mahmoodi-6b9875123"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="our-team">
                        <div className="pic">
                            <img src={muzamil} alt="profile" loading="lazy" />
                        </div>

                        <div className="team-content">
                            <h3 className="title">Muzamil</h3>
                            <span className="post">Software developer</span>
                        </div>

                        <ul className="social">
                            <li>
                                <a href="https://www.facebook.com/muzamilshah.qurishy" target="_blank" rel="noreferrer">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
