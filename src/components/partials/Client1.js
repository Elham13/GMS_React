import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from './Modal'

const Client1 = ({image, name, desc}) => {
    const dispatch = useDispatch();
    const modalReducer = useSelector(state => state.modal)
    const {modalData} = modalReducer

    const handleModal = () => {
        const modal = document.getElementById('modal')
        modal.style.top = '50%'
        modal.style.opacity = '1';
        modal.style.zIndex = '10';
    }

    // useEffect(() => {
    //     console.log("State: ",modalReducer)
    // }, [modalReducer])

    return (
        <>
            <div className="cl" onClick={handleModal}>
                <img src={image} alt="cli" />
                    <Modal 
                        image={image} 
                        name={name}
                        desc={desc}
                    />
            </div>
        </>
    )
}

export default Client1
