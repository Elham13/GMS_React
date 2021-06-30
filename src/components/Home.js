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
// import auth from "../utils/auth";
import {
  DISPLAY_ATL,
  DISPLAY_BTL,
  DISPLAY_DIGITAL,
} from "../redux/featuredAds/featuredAdsTypes";

const Home = () => {
  const dispatch = useDispatch();

  const handleAtl = () => {
    dispatch({ type: DISPLAY_ATL });
    window.location.href = "/#featured";
  };
  const handleBtl = () => {
    dispatch({ type: DISPLAY_BTL });
    window.location.href = "/#featured";
  };
  const handleDigital = () => {
    dispatch({ type: DISPLAY_DIGITAL });
    window.location.href = "/#featured";
  };

  useEffect(() => {
    dispatch(getServices());
    // console.log(auth.isAuthenticated());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="homeWrapper" id="home">
      <Humberger />
      <Logo />
      <ToTopBtn />

      <div className="homeTop header">
        <h1 className="title">Welcom to GMS!</h1>
        <h1 className="caption">
          Take your business to the next level by GMS advertising services
        </h1>
        <a href="#contact">Enquiry Now</a>
      </div>
      <div className="homeOverlay">
        <div className="card" onClick={handleAtl}>
          <img src={sun} alt="icon" className="icon" loading="lazy" />
          <h1>ATL</h1>
          <h5>
            Above The Line (ATL) marketing reaches your advertisement to wide
            range of audiences like TV ads
          </h5>
        </div>
        <div className="card" onClick={handleBtl}>
          <img src={grow} alt="icon" className="icon" loading="lazy" />
          <h1>BTL</h1>
          <h5>
            Below The Line (BTL) is the direct marketing in which your target is
            a specific individual (not large audience)
          </h5>
        </div>
        <div className="card" onClick={handleDigital}>
          <img src={ads} alt="icon" className="icon" loading="lazy" />
          <h1>Digital</h1>
          <h5>
            Advertise your business through online on social media, online
            videos, websites and so on
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
