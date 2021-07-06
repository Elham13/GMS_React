import React, { useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import {
  Button,
  Dialog,
  Slide,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
} from "@material-ui/core";
import { postMobileNumber } from "../../redux/services/serviceActions";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const AdComponent = ({ data, location }) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
  });

  const handleSubmit = () => {
    if (!formIsOpen) {
      setFormIsOpen(true);
    } else {
      if (formData.name === "" || formData.mobile === "") {
        alert("Please enter your name and mobile number!");
      } else {
        const obj = {
          id: data._id,
          name: formData.name,
          mobileNumber: formData.mobile,
        };
        dispatch(postMobileNumber(obj));
        setFormIsOpen(false);
        setModalIsOpen(false);
      }
    }
  };

  return (
    <div>
      <div className='slickImagWrapper'>
        <div className='slickOverlay'>
          <p>Printing </p>
          <p>Posting</p>
          <p>Maintaining</p>
          <p>Call us on: 923981230</p>
          <button onClick={() => setModalIsOpen(true)}>See details</button>
        </div>
        <img
          className='slickImage'
          src={data.Images[0]}
          alt='image1'
          loading='lazy'
        />
      </div>
      <div className='slickBottom'>
        <h1 className='name'>{data.Title}</h1>
        <h1 className='category'>{data.Description}</h1>
        <h1 className='price'>&#8377; {data.Price}</h1>
      </div>
      <div className='slickEnd'>
        <h2 className='icon'>
          <i className='fas fa-map-marker-alt'></i>
          {location}
        </h2>
        <h2 className='icon'>
          <i className='fas fa-clock'></i>
          {moment(data.CreatedAt).fromNow()}
        </h2>
      </div>

      <Dialog
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle
          id='alert-dialog-slide-title'
          style={{ textAlign: "center" }}
        >
          {data.Title}
        </DialogTitle>
        <DialogContent>
          <div className='imgWrapper'>
            {data.Images.map((img, i) => (
              <img key={i} src={img} alt='phot' />
            ))}
          </div>
          <DialogContentText id='alert-dialog-slide-description'>
            {data.Description}
            <>&#8377; {data.Price}</>
          </DialogContentText>

          {formIsOpen && (
            <form autoComplete='off'>
              <TextField
                id='standard-basic'
                autoFocus
                label='Name'
                value={formData.name}
                fullWidth
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <TextField
                id='standard-basic'
                label='Mobile number'
                fullWidth
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
              />
            </form>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleSubmit} color='primary'>
            Get deal
          </Button>
          <Button onClick={() => setModalIsOpen(false)} color='primary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdComponent;
