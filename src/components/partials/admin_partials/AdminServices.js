import React, { useState } from 'react'
import {postService} from '../../../redux/services/serviceActions'

const AdminServices = () => {
    const [formData, setFormData] = useState({
        title: '',
        desc: '',
        price: '',
        category: '',
        photo: '',
    })


    
    return (
        <div className="sWrapper">
            <div className="sFormWrapper">
                <form className="sForm">
                    <h4>Add service</h4>
                    <div className="inputWrapper">
                        <input type="text" required />
                        <p>Title</p>
                    </div>
                    <div className="inputWrapper">
                        <input type="text" required />
                        <p>Description</p>
                    </div>
                    <div className="inputWrapper">
                        <input type="text" required />
                        <p>Price</p>
                    </div>
                    <div className="inputWrapper">
                        <select name="" id="">
                            <option selected disabled>Select</option>
                            <option value="AutoAds">Auto Ads</option>
                            <option value="BusAds">Bus Ads</option>
                        </select>
                        <p>Category</p>
                    </div>
                    <div className="inputWrapper">
                        <input type="file" multiple />
                        <p>Photo</p>
                    </div>
                    <button className="formBtn">Create</button>
                </form>
            </div>
        </div>
    )
}

export default AdminServices
