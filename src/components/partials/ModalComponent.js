import React, { useState } from 'react'
import Modal from 'react-modal'

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto", 
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: '#fff',
    },
};

const ModalComponent = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    
    const closeModal = () => {
        setModalIsOpen(false)
    }

    return (
        <Modal
            style={customStyles}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
        >
            <h1>hey there</h1>
        </Modal>
    )
}

export default ModalComponent
