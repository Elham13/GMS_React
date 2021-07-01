import React, { useState } from "react";
import Modal from "react-modal";
import "../../styles/Modal.css";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#fff",
    },
};

Modal.setAppElement("#root");
const Client1 = ({ image, name, desc }) => {
    //   var subtitle;
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    //   function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = "#f00";
    //   }

    return (
        <>
            <div className="cl" onClick={handleModal}>
                <img src={image} alt="cli" loading="lazy" />
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                <div className="modal" id="modal">
                    <span className="close" onClick={closeModal}>
                        <i className="fas fa-times"></i>
                    </span>
                    <div className="modalTop">
                        <h1>{name}</h1>
                        <div>
                            <img src={image} alt="alskfdj" loading="lazy" />
                        </div>
                    </div>

                    <div className="modalBottom">
                        <h2>How we helped {name} to promote their business.</h2>
                        <p>{desc}</p>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Client1;
