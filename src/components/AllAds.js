import React, { useEffect } from 'react'
import '../styles/AllAds.css'
import Card from './partials/Card'
import { useDispatch, useSelector } from 'react-redux'
import { getServices } from '../redux/services/serviceActions'

const AllAds = () => {
    const dispatch = useDispatch();
    const serviceReducer = useSelector(state => state.service)
    const { serviceLoading, serviceData, serviceError } = serviceReducer

    useEffect(() => {
        dispatch(getServices())
    }, [])
    return (
        <div className="separatePage">
            <div className="separatePageTop">

                <div className="allAdsWrapper">
                    {serviceLoading ? <p>Loading</p> : serviceError ? <p>Error</p> : (
                        <>
                            <h1>All ads</h1>
                            <div className="div">
                                {serviceData.map((service, index) => (
                                    <Card
                                        key={index}
                                        image={service.Image[0].base64}
                                        name={service.Title}
                                        price={service.Price}
                                        desc={service.Description}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AllAds
