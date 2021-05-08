import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMapMarkerAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";


Modal.setAppElement('#root');

const AdComponent = ({ image, adName, desc, price, location, time }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dealModalIsOpen, setDealModalIsOpen] = useState(false);

  const openModal = () => { 
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openDealModal = () => {
    setModalIsOpen(false);
    setDealModalIsOpen(true)
  }
  const closeDealModal = () => {
    setDealModalIsOpen(false)
  }
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
        <img className="slickImage" src={image} alt="image1" />
      </div>
      <div className="slickBottom">
        <h1 className="name">{adName}</h1>
        <h1 className="category">{desc}</h1>
        <h1 className="price">&#8377; {price}</h1>
      </div>
      <div className="slickEnd">
        <h2 className="icon">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="xs" /> {location}
        </h2>
        <h2 className="icon">
          <FontAwesomeIcon icon={faClock} size="xs" /> {time}
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
            <h1>{adName}</h1>
            <img src={image} alt="kaf" />
        </div>
        <div className="modalBottom">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Duration</th>
                        <th>Amount</th>
                        <th>Minimum</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="Name">{adName}</td>
                        <td data-label="Duration">10 sec/per week</td>
                        <td data-label="Amount">200</td>
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
            <h1>{adName}</h1>
            <img src={image} alt="kaf" />
        </div>
        <div className="modalBottom">
            <form>
                <div className="inputWrapper">
                    <input type="text" required />
                    <p >Name</p>
                </div>
                <div className="inputWrapper">
                    <input type="text" required />
                    <p >Mobile Number</p>
                </div>
                <button>Submit</button>
            </form>
        </div>
        </Modal>
    </div>
  );
};

export default AdComponent;
