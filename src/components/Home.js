import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Humberger from "./partials/Humberger";
import ToTopBtn from "./partials/ToTopBtn";
import "../styles/Home.css";
import ads from "../assets/img/ads.svg";
import sun from "../assets/img/sun.svg";
import grow from "../assets/img/grow.svg";
import Logo from "./partials/Logo";
import { getServices } from "../redux/services/serviceActions";
import auth from "../utils/auth";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getServices());
        console.log(auth.isAuthenticated());
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="homeWrapper" id="home">
            <Humberger />
            <Logo />
            <ToTopBtn />

            <div className="homeTop header">
                <h1 className="title">Welcom to GMS!</h1>
                <h1 className="caption">Take your business to the next level by GMS advertising services</h1>
                <a href="#contact">Enquiry Now</a>
            </div>
            <div className="homeOverlay">
                <div className="card">
                    <img src={ads} alt="icon" className="icon" loading="lazy" />
                    <h1>Advertise</h1>
                    <h5>With our rich and powerfull advertising services, reach out to your millions of audiences</h5>
                </div>
                <div className="card">
                    <img src={grow} alt="icon" className="icon" loading="lazy" />
                    <h1>Grow</h1>
                    <h5>
                        Get your business to the next level and keep growing, with our effective and efficient services
                    </h5>
                </div>
                <div className="card">
                    <img src={sun} alt="icon" className="icon" loading="lazy" />
                    <h1>Shine</h1>
                    <h5>GMS will be the reason for your business to stand up amongst thousands of businesses</h5>
                </div>
            </div>
        </div>
    );
};

export default Home;
