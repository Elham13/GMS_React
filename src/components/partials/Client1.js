import React, { useState } from "react";
import { Dialog, Slide } from "@material-ui/core";
import "../../styles/Modal.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const Client1 = ({ image, name, desc }) => {
  //   var subtitle;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className='cl' onClick={handleModal}>
        <img src={image} alt='cli' loading='lazy' />
      </div>

      <Dialog
        open={modalIsOpen}
        onClose={closeModal}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <div className='modal' id='modal'>
          <span className='close' onClick={closeModal}>
            <i className='fas fa-times'></i>
          </span>
          <div className='modalTop'>
            <h1>{name}</h1>
            <div>
              <img src={image} alt='alskfdj' loading='lazy' />
            </div>
          </div>

          <div className='modalBottom'>
            <h2>How we helped {name} to promote their business.</h2>
            <p>{desc}</p>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Client1;
