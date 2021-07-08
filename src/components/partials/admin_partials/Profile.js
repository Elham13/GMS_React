import React, { useEffect, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import profielImg from "../../../assets/img/dummy-profile.png";
import Popup from "../Popup";
import { updateUserAction } from "../../../redux/user/userActions";

import "../../../styles/Profile.css";
import { localAPI } from "../../../redux/api";
import { useSelector, useDispatch } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  const updateProfile = useSelector((state) => state.updateProfile);
  const [uploading, setUploading] = useState(false);
  const [popup, setPopup] = useState({
    open: false,
    message: "",
    severity: "",
  });
  const [formData, setFormData] = useState({
    id: "",
    fullName: "",
    email: "",
    photo: "",
    password: "",
    password1: "",
  });

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const fData = new FormData();
    fData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(
        `${localAPI}/upload/single`,
        fData,
        config
      );

      setFormData({
        ...formData,
        photo: data,
      });
      setUploading(false);
    } catch (error) {
      setPopup({
        open: true,
        message: error.message,
        severity: "error",
      });
      setUploading(false);
    }
  };

  const handleClosePopup = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setPopup({
      open: false,
      message: "",
      severity: "",
    });
  };

  const handlSubmit = () => {
    if (formData.fullName === "" || formData.email === "") {
      setPopup({
        open: true,
        message: "Full name and Email fields cannot be empty",
        severity: "warning",
      });
    } else {
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(formData.email)) {
        setPopup({
          open: true,
          message: "Please enter a valid email",
          severity: "warning",
        });
      } else if (formData.password !== formData.password1) {
        setPopup({
          open: true,
          message: "Passwords do not match",
          severity: "warning",
        });
      }
      dispatch(updateUserAction(formData));
    }
  };

  useEffect(() => {
    if (updateProfile.res.message) {
      setPopup({
        open: true,
        message: updateProfile.res.message,
        severity: "success",
      });
    }
    if (updateProfile.error) {
      setPopup({
        open: true,
        message: updateProfile.error,
        severity: "error",
      });
    }
  }, [updateProfile]);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      const user = JSON.parse(userInfo);
      setFormData({
        ...formData,
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        photo: user.photo,
      });
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='profile'>
      <Popup
        open={popup.open}
        message={popup.message}
        severity={popup.severity}
        close={handleClosePopup}
      />
      <div className='left'>
        <h2>Profile</h2>
        <form>
          <TextField
            className='input'
            label='Full Name'
            type='text'
            autoFocus
            fullWidth
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
          />
          <TextField
            className='input'
            label='Email'
            type='text'
            fullWidth
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <TextField
            className='input'
            label='Password'
            type='text'
            fullWidth
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <TextField
            className='input'
            label='Confirm Password'
            type='text'
            fullWidth
            value={formData.password1}
            onChange={(e) =>
              setFormData({ ...formData, password1: e.target.value })
            }
          />
          <div className='imgWrapper'>
            {formData.photo ? (
              <img src={formData.photo} alt='asdfkj' width='100' height='100' />
            ) : (
              <img src={profielImg} alt='asdfkj' width='100' height='100' />
            )}
            <Button variant='contained' component='label'>
              {uploading ? (
                <i className='fas fa-spinner fa-spin'></i>
              ) : (
                <>Select Image</>
              )}

              <input type='file' hidden onChange={uploadFileHandler} />
            </Button>
          </div>
          <Button
            variant='contained'
            color='primary'
            fullWidth
            onClick={handlSubmit}
          >
            {updateProfile.loading ? (
              <i className='fas fa-spinner fa-spin'></i>
            ) : (
              <>Update</>
            )}
          </Button>
        </form>
      </div>
      <div className='right'>asdf</div>
    </div>
  );
};

export default Profile;
