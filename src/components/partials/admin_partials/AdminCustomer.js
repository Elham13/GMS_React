import { faComment, faPhone, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const AdminCustomer = ({name, title, image}) => {
    return (
        <div className="adminCustomer">
            <div className="adminInfo">
                <img src={image} alt="customer" width="40px" height="40px" />
                <div>
                    <h4>{name}</h4>
                    <small>{title}</small>
                </div>
            </div>
            <div className="adminContact">
                <span><FontAwesomeIcon icon={faUserCircle} /></span>
                <span><FontAwesomeIcon icon={faComment} /></span>
                <span><FontAwesomeIcon icon={faPhone} /></span>
            </div>
        </div>
    )
}

export default AdminCustomer
