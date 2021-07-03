import React from "react";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";

const TransitionAlerts = ({ severity, open, closeAlert, message }) => {
  return (
    <Collapse in={open}>
      <Alert
        severity={severity}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={closeAlert}
          >
            <i className="fas fa-times"></i>
          </IconButton>
        }
      >
        {message}
      </Alert>
    </Collapse>
  );
};

export default TransitionAlerts;
