import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/Services.css";
import code from "../assets/img/code.png";
import digital from "../assets/img/digitalMarketing.png";
import phone from "../assets/img/smartphone.png";

const Services = () => {
    return (
        <div className="services">
            <div className="titleWrapper">
                <h1 className="title1">Services</h1>
                <span className="line1"></span>
                <span className="line2"></span>
            </div>

            <div className="servicesInner">
                <div className="serviceCard">
                    <div className="serviceImage">
                        <img src={code} alt="serviceImage" width="50" height="50" />
                    </div>
                    <h1>Web development</h1>
                    <p>UI and UX design</p>
                    <p>Responsive development</p>
                    <p>CMS develpment</p>
                    <p>eCommerce solutions</p>
                    <button>
                        Learn more <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
                <div className="serviceCard">
                    <div className="serviceImage">
                        <img src={phone} alt="serviceImage" width="50" height="50" />
                    </div>
                    <h1>Mobile Development</h1>
                    <p>Prototypes/Mockepes</p>
                    <p>Android development</p>
                    <p>IOS development</p>
                    <p>React native development</p>
                    <button>
                        Learn more <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
                <div className="serviceCard">
                    <div className="serviceImage">
                        <img src={digital} alt="serviceImage" width="50" height="50" />
                    </div>
                    <h1>Digital marketing</h1>
                    <p>Digital marketing</p>
                    <p>SEO</p>
                    <p>Content Marketing</p>
                    <p>Advertisement</p>
                    <button>
                        Learn more <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Services;
