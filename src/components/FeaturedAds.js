import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AdComponent from "./partials/AdComponent";
import Loading from "./partials/Loading";
import "../styles/Featured.css";

const FeaturedAds = () => {
    const serviceReducer = useSelector(state => state.service);
    const { serviceLoading, serviceData, serviceError } = serviceReducer;
    var services = null;

    if (serviceData.length > 5) {
        services = serviceData
            .slice(0, 4)
            .map((service, index) => <AdComponent key={index} data={service} location="Hyderabad" />);
    } else {
        services = serviceData.map((service, index) => <AdComponent key={index} data={service} location="Hyderabad" />);
    }

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
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // useEffect(() => {
    //     console.log("Serv: ", serviceData)
    // }, [])

    return (
        <div className="featured">
            {serviceLoading ? (
                <Loading />
            ) : serviceError.length ? (
                <p>{serviceError}</p>
            ) : (
                <>
                    <div className="titleWrapper">
                        <h1 className="title1">Featured ads</h1>
                        <span className="line1"></span>
                        <span className="line2"></span>
                    </div>

                    <div className="slickContainer">
                        <Slider {...settings}>{services}</Slider>
                    </div>
                    <Link to="/allAds" style={{ textDecoration: "none" }}>
                        <button className="viewAllBtn">View all ads</button>
                    </Link>
                </>
            )}
        </div>
    );
};

export default FeaturedAds;
