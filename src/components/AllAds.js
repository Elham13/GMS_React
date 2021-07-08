import React, { useEffect, useState } from "react";
import "../styles/AllAds.css";
import Card from "./partials/Card";
import { useDispatch, useSelector } from "react-redux";
import { getPaginatedServices } from "../redux/services/serviceActions";
import Loading from "./partials/Loading";
import Paginate from "./partials/Paginate";
import Logo from "./partials/Logo";

const AllAds = () => {
  const dispatch = useDispatch();
  const paginatedServices = useSelector((state) => state.paginatedServices);
  const [data, setData] = useState({
    loading: false,
    error: "",
    res: [],
    pages: "",
    page: "",
  });

  useEffect(() => {
    dispatch(getPaginatedServices());
  }, [dispatch]);

  useEffect(() => {
    setData({
      loading: paginatedServices.loading,
      error: paginatedServices.error,
      res: paginatedServices.res,
      pages: paginatedServices.pages,
      page: paginatedServices.page,
    });
  }, [paginatedServices]);

  return (
    <div className='separatePage'>
      <Logo />
      <div className='separatePageTop'>
        <div className='allAdsWrapper'>
          {data.loading ? (
            <Loading />
          ) : data.error ? (
            <p>{data.error}</p>
          ) : (
            <>
              <h1>All ads</h1>
              <div className='div'>
                {data.res.map((service) => (
                  <Card key={service._id} data={service} />
                ))}
              </div>
            </>
          )}
          <Paginate pages={data.pages} />
        </div>
      </div>
    </div>
  );
};

export default AllAds;
