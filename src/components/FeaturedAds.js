import React from 'react'
import Slider from "react-slick";
import {Link} from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AdComponent from './partials/AdComponent'
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
    autoplay: true,
    autoplaySpeed: 1000,
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
                    <AdComponent 
                        image={bus}
                        adName="Bus Ad"
                        desc="This is a description"
                        price={600}
                        location="Banglore"
                        time="5 minutes ago"
                    />
                    <AdComponent 
                        image={auto}
                        adName="Auto ad"
                        desc="This is a description"
                        price={400}
                        location="Hyderabad"
                        time="3 minutes ago"
                    />
                    <AdComponent 
                        image={tv}
                        adName="TV ad"
                        desc="Some description"
                        price={1000}
                        location="Hyderabad"
                        time="10 minutes ago"
                    />
                    <AdComponent 
                        image={theatre}
                        adName="Theatre ad"
                        desc="Some description"
                        price={1200}
                        location="Hyderabad"
                        time="14 minutes ago"
                    />
                </Slider>
            </div>
            <Link to="/allAds" style={{textDecoration: 'none'}}>
                <button className="viewAllBtn" >View all ads</button>
            </Link>
        </div>
    )
}

export default FeaturedAds
