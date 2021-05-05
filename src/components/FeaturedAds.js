import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import "../styles/Featured.css"

import bus from '../assets/img/bus.png'
import auto from '../assets/img/rikshaw.png'
import tv from '../assets/img/tvad.png'
import theatre from '../assets/img/theatre.png'

function FeaturedAds() {
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
    };

    return (
        <div className="featured">
            <div className="titleWrapper">
                <h1 className="title1">Featured ads</h1>
                <span className="line1"></span>
                <span className="line2"></span>
            </div>

            <div className="slickContainer">
                <Slider {...settings}>
                    <div>
                        <div className="slickImagWrapper">
                            <div className="slickOverlay">
                                <p>Printing </p>
                                <p>Posting</p>
                                <p>Maintaining</p>
                                <p>Call us on: 923981230</p>
                                <button>See details</button>
                            </div>
                            <img className="slickImage" src={bus} alt="image1" />
                        </div>
                        <div className="slickBottom">
                            <h1 className="name">Bus ad</h1>
                            <h1 className="category">Some description</h1>
                            <h1 className="price">&#8377; 200</h1>
                        </div>
                        <div className="slickEnd">
                            <h2 className="icon"><FontAwesomeIcon icon={faMapMarkerAlt} size="xs"/> Hyderabad</h2>
                            <h2 className="icon"><FontAwesomeIcon icon={faClock} size="xs"/> 3 minutes ago</h2>
                        </div>
                    </div>
                    <div>
                        <div className="slickImagWrapper">
                            <div className="slickOverlay">
                                <p>Printing </p>
                                <p>Posting</p>
                                <p>Maintaining</p>
                                <p>Call us on: 923981230</p>
                                <button>See details</button>
                            </div>
                            <img className="slickImage" src={auto} alt="image1" />
                        </div>
                        <div className="slickBottom">
                            <h1 className="name">Auto ad</h1>
                            <h1 className="category">Some description</h1>
                            <h1 className="price">&#8377; 500</h1>
                        </div>
                        <div className="slickEnd">
                            <h2 className="icon"><FontAwesomeIcon icon={faMapMarkerAlt} size="xs"/> Hyderabad</h2>
                            <h2 className="icon"><FontAwesomeIcon icon={faClock} size="xs"/> 3 minutes ago</h2>
                        </div>
                    </div>
                    <div>
                        <div className="slickImagWrapper">
                            <div className="slickOverlay">
                                <p>Printing </p>
                                <p>Posting</p>
                                <p>Maintaining</p>
                                <p>Call us on: 923981230</p>
                                <button>See details</button>
                            </div>
                            <img className="slickImage" src={tv} alt="image1" />
                        </div>
                        <div className="slickBottom">
                            <h1 className="name">TV ad</h1>
                            <h1 className="category">Some description</h1>
                            <h1 className="price">&#8377; 500</h1>
                        </div>
                        <div className="slickEnd">
                            <h2 className="icon"><FontAwesomeIcon icon={faMapMarkerAlt} size="xs"/> Hyderabad</h2>
                            <h2 className="icon"><FontAwesomeIcon icon={faClock} size="xs"/> 3 minutes ago</h2>
                        </div>
                    </div>
                    <div>
                        <div className="slickImagWrapper">
                            <div className="slickOverlay">
                                <p>Printing </p>
                                <p>Posting</p>
                                <p>Maintaining</p>
                                <p>Call us on: 923981230</p>
                                <button>See details</button>
                            </div>
                            <img className="slickImage" src={theatre} alt="image1" />
                        </div>
                        <div className="slickBottom">
                            <h1 className="name">Theatre ad</h1>
                            <h1 className="category">Some description</h1>
                            <h1 className="price">&#8377; 200</h1>
                        </div>
                        <div className="slickEnd">
                            <h2 className="icon"><FontAwesomeIcon icon={faMapMarkerAlt} size="xs"/> Hyderabad</h2>
                            <h2 className="icon"><FontAwesomeIcon icon={faClock} size="xs"/> 3 minutes ago</h2>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default FeaturedAds
