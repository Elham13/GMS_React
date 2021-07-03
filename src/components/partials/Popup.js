import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Popup = ({ open, close, severity, message }) => {
  return (
    <Snackbar open={open} autoHideDuration={10000} onClose={close}>
      <Alert onClose={close} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Popup;
