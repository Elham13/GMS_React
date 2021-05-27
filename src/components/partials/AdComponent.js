import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMapMarkerAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { postMobileNumber } from "../../redux/services/serviceActions";

Modal.setAppElement("#root");

const AdComponent = ({ data, location }) => {
    const dispatch = useDispatch();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [dealModalIsOpen, setDealModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
    });

    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };

    const openDealModal = () => {
        setModalIsOpen(false);
        setDealModalIsOpen(true);
    };
    const closeDealModal = () => {
        setDealModalIsOpen(false);
    };

    const handleSubmit = () => {
        if (formData.name === "" || formData.mobile === "") {
            alert("Please enter your name and mobile number");
        } else {
            const obj = {
                id: data._id,
                name: formData.name,
                mobileNumber: formData.mobile,
            };

            dispatch(postMobileNumber(obj));
        }
    };

    return (
        <div>
            <div className="slickImagWrapper">
                <div className="slickOverlay">
                    <p>Printing </p>
                    <p>Posting</p>
                    <p>Maintaining</p>
                    <p>Call us on: 923981230</p>
                    <button onClick={openModal}>See details</button>
                </div>
                <img className="slickImage" src={data.Images.base64} alt="image1" loading="lazy" />
            </div>
            <div className="slickBottom">
                <h1 className="name">{data.Title}</h1>
                <h1 className="category">{data.Description}</h1>
                <h1 className="price">&#8377; {data.Price}</h1>
            </div>
            <div className="slickEnd">
                <h2 className="icon">
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="xs" /> {location}
                </h2>
                <h2 className="icon">
                    <FontAwesomeIcon icon={faClock} size="xs" /> {moment(data.CreatedAt).fromNow()}
                </h2>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className="Modal"
                overlayClassName="Overlay"
            >
                <span className="close" onClick={closeModal}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
                <div className="modaltop1">
                    <h1>{data.Title}</h1>
                    <img src={data.Images.base64} alt="kaf" loading="lazy" />
                </div>
                <div className="modalBottom">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Desciption</th>
                                <th>Price</th>
                                <th>Minimum</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Name">{data.Title}</td>
                                <td data-label="Desciption">{data.Description}</td>
                                <td data-label="Price">&#8377; {data.Price}</td>
                                <td data-label="Minimum">2 weeks 5 theatre</td>
                            </tr>
                        </tbody>
                    </table>

                    <button onClick={openDealModal}>Get deal</button>
                </div>
            </Modal>

            <Modal
                isOpen={dealModalIsOpen}
                onRequestClose={closeDealModal}
                contentLabel="Example Modal"
                className="Modal"
                overlayClassName="Overlay"
            >
                <span className="close" onClick={closeDealModal}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
                <div className="modaltop1">
                    <h1>{data.Title}</h1>
                    <img src={data.Images.base64} alt="kaf" loading="lazy" />
                </div>
                <div className="modalBottom">
                    <form>
                        <div className="inputWrapper">
                            <input
                                type="text"
                                required
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                            <p>Name</p>
                        </div>
                        <div className="inputWrapper">
                            <input
                                type="text"
                                required
                                onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                            />
                            <p>Mobile Number</p>
                        </div>
                        <button onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default AdComponent;
