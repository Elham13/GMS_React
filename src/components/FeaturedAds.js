import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AdComponent from "./partials/AdComponent";
import Loading from "./partials/Loading";
import Popup from "./partials/Popup";
import { getTopServices } from "../redux/services/serviceActions";
import "../styles/Featured.css";

const getComponent = (arr) => {
  const comp = arr.map((obj) => (
    <AdComponent key={obj._id} data={obj} location='Hyderabad' />
  ));
  return comp;
};

const FeaturedAds = () => {
  const disptach = useDispatch();
  const mobileReducer = useSelector((state) => state.mobile);
  const topServices = useSelector((state) => state.topServices);
  const serviceReducer = useSelector((state) => state.service);
  const { serviceData, serviceError } = serviceReducer;
  const featured = useSelector((state) => state.featured);

  const [services, setServices] = useState([]);
  const [popup, setPopup] = useState({
    open: false,
    message: "",
    severity: "",
  });

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

  const handleClosePopup = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setPopup({
      open: false,
      message: "",
      severity: "",
    });
  };

  useEffect(() => {
    disptach(getTopServices());
  }, [disptach]);

  useEffect(() => {
    setServices(topServices.products);
  }, [topServices]);

  // Handle mobile form submet response
  useEffect(() => {
    if (mobileReducer.res !== "") {
      setPopup({
        open: true,
        message: mobileReducer.res,
        severity: "success",
      });
    }
  }, [mobileReducer]);

  const setFilters = (category, arr) => {
    const data = arr.filter((item) => item.Category === category);
    if (data.length > 10) {
      data.slice(0, 10);
      setServices(data);
      return;
    }
    setServices(data);
  };

  // Filter the carousel
  useEffect(() => {
    featured.showAtl
      ? setFilters("ATL", serviceData)
      : featured.showBtl
      ? setFilters("BTL", serviceData)
      : featured.showDigital
      ? setFilters("DIGITAL", serviceData)
      : setServices(serviceData);
    // console.log("atl: ", services);
    // console.log("btl: ", featured.showBtl);
    // console.log("digital: ", featured.showDigital);
  }, [featured, serviceData]);

  return (
    <div className='featured' id='featured'>
      <Popup
        open={popup.open}
        message={popup.message}
        severity={popup.severity}
        close={handleClosePopup}
      />
      {topServices.loading ? (
        <Loading />
      ) : serviceError.length ? (
        <p>{serviceError}</p>
      ) : (
        <>
          <div className='titleWrapper'>
            <h1 className='title1'>Find your ads</h1>
            <span className='line1'></span>
            <span className='line2'></span>
          </div>
          <div className='slickContainer'>
            <Slider {...settings}>{getComponent(services)}</Slider>
          </div>

          {services.length > 0 ? (
            <Link to='/allAds' style={{ textDecoration: "none" }}>
              <button className='viewAllBtn'>View all ads</button>
            </Link>
          ) : (
            <p>No Data yet</p>
          )}
        </>
      )}
    </div>
  );
};

export default FeaturedAds;
