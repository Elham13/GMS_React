import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
} from "@material-ui/core";
import Humberger from "./partials/Humberger";
import ToTopBtn from "./partials/ToTopBtn";
import "../styles/Home.css";
import ads from "../assets/img/ads.svg";
import sun from "../assets/img/sun.svg";
import grow from "../assets/img/grow.svg";
import Logo from "./partials/Logo";
import { getServices } from "../redux/services/serviceActions";
import {
  DISPLAY_ATL,
  DISPLAY_BTL,
  DISPLAY_DIGITAL,
} from "../redux/featuredAds/featuredAdsTypes";

const Home = () => {
  const dispatch = useDispatch();

  const [openDialog, setOpenDialog] = useState(false);

  const handleAtl = () => {
    dispatch({ type: DISPLAY_ATL });
    window.location.href = "/#featured";
  };
  const handleBtl = () => {
    dispatch({ type: DISPLAY_BTL });
    window.location.href = "/#featured";
  };
  const handleDigital = () => {
    dispatch({ type: DISPLAY_DIGITAL });
    window.location.href = "/#featured";
  };

  useEffect(() => {
    dispatch(getServices());
    // console.log(auth.isAuthenticated());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="homeWrapper" id="home">
      <Humberger />
      <Logo />
      <ToTopBtn />

      <div className="homeTop header">
        <h1 className="title">Welcom to GMS!</h1>
        <h1 className="caption">
          Take your business to the next level by GMS advertising services
        </h1>
        <button onClick={() => setOpenDialog(true)}>
          Get your marketing plan now
        </button>
        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Enter your details</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To get the best business plan from GMS submit your details now and
              start your business by GMS business plannings
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Business name"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              label="Email Address"
              type="email"
              fullWidth
            />
            <TextField margin="dense" label="Name" type="text" fullWidth />
            <TextField
              margin="dense"
              label="Phone number"
              type="tel"
              fullWidth
            />
            <TextField margin="dense" label="Address" type="text" fullWidth />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} color="primary">
              Get Plan
            </Button>
            <Button onClick={() => setOpenDialog(false)} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className="homeOverlay">
        <div className="card" onClick={handleAtl}>
          <img src={sun} alt="icon" className="icon" loading="lazy" />
          <h1>ATL</h1>
          <h5>
            Above The Line (ATL) marketing reaches your advertisement to wide
            range of audiences like TV ads
          </h5>
        </div>
        <div className="card" onClick={handleBtl}>
          <img src={grow} alt="icon" className="icon" loading="lazy" />
          <h1>BTL</h1>
          <h5>
            Below The Line (BTL) is the direct marketing in which your target is
            a specific individual (not large audience)
          </h5>
        </div>
        <div className="card" onClick={handleDigital}>
          <img src={ads} alt="icon" className="icon" loading="lazy" />
          <h1>Digital</h1>
          <h5>
            Advertise your business through online on social media, online
            videos, websites and so on
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
