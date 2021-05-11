import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import {postService} from '../../../redux/services/serviceActions'
import FileBase64 from 'react-file-base64';

const AdminServices = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        title: '',
        desc: '',
        price: '',
        category: '',
        photo: '',
    })

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

    const handleFormSubmit = (e) => {
        e.preventDefault()
        dispatch(postService(formData))
    }

    useEffect(() => {
        console.log("State: ", formData)
    }, [formData])


    
    return (
        <div className="sWrapper">
            <div className="sFormWrapper">
                <form className="sForm">
                    <h4>Add service</h4>
                    <div className="inputWrapper">
                        <input type="text" required value={formData.title} onChange={handleTitle} />
                        <p>Title</p>
                    </div>
                    <div className="inputWrapper">
                        <input type="text" required value={formData.desc} onChange={handleDesc} />
                        <p>Description</p>
                    </div>
                    <div className="inputWrapper">
                        <input type="text" required value={formData.price} onChange={handlePrice} />
                        <p>Price</p>
                    </div>
                    <div className="inputWrapper">
                        <select required  onChange={handleCategory}>
                            <option selected disabled>Select a category</option>
                            <option value="AutoAds">Auto Ads</option>
                            <option value="BusAds">Bus Ads</option>
                        </select>
                    </div>
                    <div className="inputWrapper">
                        <FileBase64
                            multiple={ true }
                            onDone={ handlePhoto } 
                        />
                        <p>Photo</p>
                    </div>
                    <button className="formBtn" onClick={handleFormSubmit}>Create</button>
                </form>
            </div>
        </div>
    )
}

export default AdminServices
