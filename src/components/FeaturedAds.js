import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AdComponent from "./partials/AdComponent";
import Loading from "./partials/Loading";
import "../styles/Featured.css";
import axios from "axios";
import { localAPI } from "../redux/api";

const FeaturedAds = () => {
  const serviceReducer = useSelector((state) => state.service);
  const { serviceLoading, serviceData, serviceError } = serviceReducer;
  const featured = useSelector((state) => state.featured);

  const [services, setServices] = useState([]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    // autoplay: true,
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

  const getComponent = (arr) => {
    const comp = arr.map((obj) => (
      <AdComponent key={obj._id} data={obj} location="Hyderabad" />
    ));
    return comp;
  };

  useEffect(() => {
    if (serviceData.length > 5) {
      setServices(serviceData.slice(0, 4));
    } else {
      setServices(serviceData);
    }
  }, [serviceData]);

  const setFilters = (category, arr) => {
    const data = arr.filter((item) => item.Category === category);
    setServices(data);
  };
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

  const handleFileChange = async (e) => {
    const files = e.target.files;
    const formData = new FormData();
    formData.append("image", files);
    // setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(`${localAPI}/upload`, formData, config);
      console.log("Image response: ", data);
      // setImage(data);
      // setUploading(false);
    } catch (error) {
      console.error(error);
      // setUploading(false);
    }
  };

  // const handleNameChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     name: e.target.value,
  //   });
  // };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   postService1(formData);
  // };

  return (
    <div className="featured" id="featured">
      {serviceLoading ? (
        <Loading />
      ) : serviceError.length ? (
        <p>{serviceError}</p>
      ) : (
        <>
          <div className="titleWrapper">
            <h1 className="title1">Find your ads</h1>
            <span className="line1"></span>
            <span className="line2"></span>
          </div>

          <div className="slickContainer">
            <Slider {...settings}>{getComponent(services)}</Slider>
          </div>
          <Link to="/allAds" style={{ textDecoration: "none" }}>
            <button className="viewAllBtn">View all ads</button>
          </Link>
        </>
      )}

      <form
        // ref="uploadForm"
        id="uploadForm"
        action="http://localhost:5000/upload"
        method="post"
        encType="multipart/form-data"
      >
        <input
          type="file"
          name="sampleFile"
          multiple
          onChange={handleFileChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default FeaturedAds;
