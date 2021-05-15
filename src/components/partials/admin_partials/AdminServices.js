import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getServices, postService, deleteService } from '../../../redux/services/serviceActions'
import FileBase64 from 'react-file-base64';

const AdminServices = () => {
    const dispatch = useDispatch()
    const serviceReducer = useSelector(state => state.service)
    const { serviceLoading, serviceData, serviceError } = serviceReducer

    const [formData, setFormData] = useState({
        id: '',
        title: '',
        desc: '',
        price: '',
        category: '',
        photo: [],
    })

    const [serviceData1, setServiceData1] = useState([])

    const handleTitle = (e) => {
        setFormData({
            ...formData,
            title: e.target.value
        })
    }
    const handleDesc = (e) => {
        setFormData({
            ...formData,
            desc: e.target.value
        })
    }
    const handlePrice = (e) => {
        setFormData({
            ...formData,
            price: e.target.value
        })
    }
    const handleCategory = (e) => {
        setFormData({
            ...formData,
            category: e.target.value
        })
    }
    const handlePhoto = (files) => {
        setFormData({
            ...formData,
            photo: files
        })
    }

    const handleFormSubmit = () => {
        if (formData.title === '' || formData.desc === "" || formData.price === '' || formData.category === "" || formData.photo === "") {
            alert("Please fill all the fields")
        } else {
            dispatch(postService(formData))
            setFormData({
                id: '',
                title: '',
                desc: '',
                price: '',
                category: '',
                photo: '',
            })
            setTimeout(() => {
                dispatch(getServices());
            }, 1000)
        }
    }

    const handleDelete = (e) => {
        const id = e.target.previousSibling.previousSibling.value
        dispatch(deleteService({id: id}))
        setTimeout(() => {
            dispatch(getServices());
        }, 1000)
    }

    const handleEdit = (e) => {
        const id = e.target.previousSibling.value
        const data = serviceData1.find((obj) => obj._id === id)
        setFormData({
            id: data._id,
            title: data.Title,
            desc: data.Description,
            price: data.Price,
            category: data.Category,
            photo: data.Image,
        })
    }

    useEffect(() => {
        dispatch(getServices());
    }, [])

    useEffect(() => {
        setServiceData1(serviceData)
    }, [serviceReducer])

    return (
        <div className="sWrapper">
            <div className="sFormWrapper">
                <form className="sForm">
                    <h4>Add service</h4>
                    <input type="hidden" value={formData.id} />
                    <div className="inputWrapper">
                        <input type="text" required value={formData.title} onChange={handleTitle} />
                        <p>Title</p>
                    </div>
                    <div className="inputWrapper">
                        <input type="text" required value={formData.desc} onChange={handleDesc} />
                        <p>Description</p>
                    </div>
                    <div className="inputWrapper">
                        <input type="number" required value={formData.price} onChange={handlePrice} />
                        <p>Price</p>
                    </div>
                    <div className="inputWrapper">
                        <select required value={formData.category} onChange={handleCategory}>
                            <option disabled>Select a category</option>
                            <option value="AutoAds">Auto Ads</option>
                            <option value="BusAds">Bus Ads</option>
                            <option value="TheatreAds">Theatre Ads</option>
                            <option value="TVAds">TV Ads</option>
                            <option value="Pamphlet">Pamphlet</option>
                            <option value="FMAds">FM Ads</option>
                        </select>
                    </div>
                    <div className="inputWrapper">
                        <FileBase64
                            multiple={true}
                            onDone={handlePhoto}
                        />
                        <p>Photo</p>
                    </div>
                    <button className="formBtn" onClick={handleFormSubmit}>Create</button>
                </form>

                <div className="formRight">
                    {serviceData1.length > 0 ? (
                        <>
                        {serviceLoading ? <p>Loading</p> : serviceError ? <p>Error</p> : (
                            <>
                            <h4>Services</h4>
                            {serviceData1.map((service, index) => (
                                <div className="itemWrapper" key={index}>
                                    <div>
                                        <img src={service.Image[0].base64} alt="aslf" width="50" height="50" />
                                        <div style={{ marginLeft: '10px' }}>
                                            <h1>{service.Title}</h1>
                                            <p>{service.Description}</p>
                                            <p>&#8377; {service.Price}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <input type="hidden" value={service._id} />
                                        <button className="sControlBtn" onClick={handleEdit}>edit</button>
                                        <button className="sControlBtn" onClick={handleDelete}>delete</button>
                                    </div>
                                </div>
                            ))}
                            </>
                        )}
                        </>
                    ) : (
                        <h4>Create service</h4>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AdminServices
