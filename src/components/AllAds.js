import React, { useEffect } from "react";
import "../styles/AllAds.css";
import Card from "./partials/Card";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../redux/services/serviceActions";
import Loading from "./partials/Loading";

const AllAds = () => {
    const dispatch = useDispatch();
    const serviceReducer = useSelector(state => state.service);
    const { serviceLoading, serviceData, serviceError } = serviceReducer;

    useEffect(() => {
        dispatch(getServices());
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="separatePage">
            <div className="separatePageTop">
                <div className="allAdsWrapper">
                    {serviceLoading ? (
                        <Loading />
                    ) : serviceError ? (
                        <p>Error</p>
                    ) : (
                        <>
                            <h1>All ads</h1>
                            <div className="div">
                                {serviceData.map(service => (
                                    <Card key={service._id} data={service} />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllAds;
