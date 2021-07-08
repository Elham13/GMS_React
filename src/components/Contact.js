import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Contact.css";
import MapContainer from "./partials/Map";
import Popup from "./partials/Popup";
import { contactUsAction } from "../redux/user/userActions";

function Contact() {
  const dispatch = useDispatch();
  const contactUs = useSelector((state) => state.contactUs);

  const [formData, setFormData] = useState({
    email: "",
    mobileNumber: "",
    name: "",
    message: "",
  });
  const [popup, setPopup] = useState({
    open: false,
    severity: "",
    message: "",
  });

  const handleClosePopup = (e, reason) => {
    if (reason === "clickaway") return;
    setPopup({
      open: false,
      message: "",
      severity: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const mobileRegex = /^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/;

    if (
      !formData.email ||
      !formData.name ||
      !formData.message ||
      !formData.mobileNumber
    ) {
      setPopup({
        open: true,
        severity: "warning",
        message: "Please fill all the fields",
      });
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setPopup({
        open: true,
        severity: "warning",
        message: "Please enter a valid email",
      });
      return;
    }

    if (!mobileRegex.test(formData.mobileNumber)) {
      setPopup({
        open: true,
        severity: "warning",
        message: "Please enter a valid mobile number",
      });
      return;
    }

    // Dispatch
    dispatch(contactUsAction(formData));
  };

  useEffect(() => {
    if (contactUs.res) {
      setPopup({
        open: true,
        severity: "success",
        message: contactUs.res,
      });
      setFormData({
        email: "",
        mobileNumber: "",
        name: "",
        message: "",
      });
    }
  }, [contactUs]);

  return (
    <div className='contact' id='contact'>
      <Popup
        severity={popup.severity}
        open={popup.open}
        close={handleClosePopup}
        message={popup.message}
      />
      <div className='titleWrapper'>
        <h1 className='title1'>Contact us</h1>
        <span className='line1'></span>
        <span className='line2'></span>
      </div>

      <div className='contactWrapper'>
        <div className='formWrapper'>
          <h2>We'd love to hear from you</h2>
          <form>
            <div className='inputWrapper'>
              <input
                type='email'
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
              />
              <p>Email</p>
            </div>
            <div className='inputWrapper'>
              <input
                type='tel'
                required
                value={formData.mobileNumber}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    mobileNumber: e.target.value,
                  })
                }
              />
              <p>Mobile Number</p>
            </div>
            <div className='inputWrapper'>
              <input
                type='text'
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
              />
              <p>Name</p>
            </div>
            <div className='textareaWrapper'>
              <p>Message</p>
              <textarea
                type='text'
                placeholder='Type a message'
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
              />
            </div>
            <button className='formBtn' onClick={handleSubmit}>
              {contactUs.loading ? (
                <i className='fas fa-spinner fa-spin'></i>
              ) : (
                <>Submit</>
              )}
            </button>
          </form>
          <div className='formBottom'>
            <p>Get updated on: </p>
            <div>
              <a
                href='https://www.facebook.com/gmsads.in/'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fab fa-facebook'></i> Facebook
              </a>
              <a href='/#' target='_blank' rel='noreferrer'>
                <i className='fab fa-twitter'></i> Twitter
              </a>
              <a
                href='https://www.instagram.com/gms_ads/'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fab fa-instagram'></i> Instagram
              </a>
              <a
                href='https://www.linkedin.com/in/gms-ads-9603b21ab/'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fab fa-linkedin'></i> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className='mapWrapper'>
          <h2>Reach out to us directly</h2>

          <div className='address'>
            <div className='wrapper'>
              <i className='fas fa-map-marker-alt'></i>
              <div className='addresInner'>
                <p>11-151/1, Gaddiannaram, Opp. ICICI ATM</p>
                <p>Near Shiva Ganga Theater</p>
                <p>Dilsukhnagar, Hyderabad, India, 500060</p>
              </div>
            </div>

            <div className='wrapper'>
              <i className='fas fa-phone'></i>
              <div className='addresInner'>
                <p>+91-9985330008</p>
                <p>+91-9985330004</p>
                <p>+91-6300590015</p>
              </div>
            </div>

            <div className='wrapper'>
              <i className='fas fa-envelope'></i>
              <div className='addresInner'>
                <p style={{ color: "transparent" }}> .</p>
                <p>myads.gms@gmail.com</p>
                <p style={{ color: "transparent" }}> .</p>
              </div>
            </div>
          </div>

          <div className='map'>
            <MapContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
