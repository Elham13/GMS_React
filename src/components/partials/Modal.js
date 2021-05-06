import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../../styles/Modal.css'
import { useDispatch } from 'react-redux'

const Modal = ({image, name, desc}) => {

    const dispatch = useDispatch();

    const handleClose = () => {
        const modal = document.getElementById('modal')
        modal.style.top = '150% !important'
        modal.style.opacity = '0';
        modal.style.zIndex = '-1';
        console.log("Modal: ", modal)
    }

    return (
        <div className="modal" id="modal">
            <span className="close" onClick={handleClose}><FontAwesomeIcon icon={faTimes} /></span>
            <div className="modalTop">
                <h1>{name}</h1>
                <div>
                    <img src={image} alt="alskfdj"/>
                </div>
            </div>

            <div className="modalBottom">
                <h2>How we helped {name} to promote their business.</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Modal
