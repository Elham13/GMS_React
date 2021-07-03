import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import axios from "axios";
import {
  getServices,
  postService,
  deleteService,
  updateService,
} from "../../../redux/services/serviceActions";
import Loading from "../Loading";
import { localAPI } from "../../../redux/api";
import Popup from "../Popup";

const AdminServices = () => {
  const dispatch = useDispatch();
  const createService = useSelector((state) => state.createService);
  const updateServiceReducer = useSelector((state) => state.updateService);
  const serviceReducer = useSelector((state) => state.service);

  const [serviceData1, setServiceData1] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [warningAlert, setWarningAlert] = useState({
    open: false,
    message: "",
    severity: "",
  });
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    desc: "",
    price: "",
    category: "",
    photo: [],
  });

  const handleCloseWarningAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setWarningAlert({
      open: false,
      message: "",
      severity: "",
    });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    dispatch(deleteService({ id: formData.id }));
  };

  const uploadFileHandler = async (e) => {
    const files = e.target.files;
    if (files.length > 5) {
      setWarningAlert({
        open: true,
        message: "Please select less than or equal to 5 images",
        severity: "warning",
      });
    } else {
      const fData = new FormData();
      for (let key of Object.keys(files)) {
        fData.append("images", files[key]);
      }
      setUploading(true);

      try {
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };

        const { data } = await axios.post(`${localAPI}/upload`, fData, config);

        setFormData({
          ...formData,
          photo: data,
        });
        setUploading(false);
      } catch (error) {
        console.error(error);
        setUploading(false);
      }
    }
  };

  const handleFormSubmit = () => {
    dispatch(updateService(formData));
  };

  const handleDelete = (e) => {
    const doDelete = window.confirm("Are you sure?");
    if (doDelete) {
      const id = e.target.previousSibling.previousSibling.value;
      dispatch(deleteService({ id: id }));
      window.location.reload();
    } else {
      return;
    }
  };

  const handleEdit = (e) => {
    const id = e.target.previousSibling.value;
    const data = serviceData1.find((obj) => obj._id === id);
    setOpenDialog(true);
    setFormData({
      id: data._id,
      title: data.Title,
      desc: data.Description,
      price: data.Price,
      category: data.Category,
      photo: data.Images,
    });
  };

  const handleCreate = () => {
    dispatch(postService());
  };

  useEffect(() => {
    dispatch(getServices());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (Object.keys(createService.addServiceData).length) {
      const data = createService.addServiceData;
      setFormData({
        id: data._id,
        title: data.Title,
        desc: data.Description,
        price: data.Price,
        category: data.Category,
        photo: [],
      });
      setOpenDialog(true);
    }
  }, [createService]);

  useEffect(() => {
    setServiceData1(serviceReducer.serviceData);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceReducer]);

  useEffect(() => {
    if (Object.keys(updateServiceReducer.updateServiceRes).length) {
      setWarningAlert({
        open: true,
        message: updateServiceReducer.updateServiceRes.message,
        severity: "success",
      });
      setOpenDialog(false);
      window.location.reload();
    }
  }, [updateServiceReducer, dispatch]);

  return (
    <div className="sWrapper">
      <Popup
        severity={warningAlert.severity}
        open={warningAlert.open}
        close={handleCloseWarningAlert}
        message={warningAlert.message}
      />
      <button className="createBtn" onClick={handleCreate}>
        {createService.addServiceLoading ? (
          <i className="fas fa-spinner fa-spin"></i>
        ) : (
          <>
            Create service <i className="fas fa-plus"></i>
          </>
        )}
      </button>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create new service</DialogTitle>
        <DialogContent>
          <TextField type="hidden" value={formData.id} />

          <TextField
            autoFocus
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            value={formData.title}
            onChange={(e) =>
              setFormData({
                ...formData,
                title: e.target.value,
              })
            }
          />

          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            value={formData.desc}
            onChange={(e) =>
              setFormData({
                ...formData,
                desc: e.target.value,
              })
            }
          />

          <TextField
            margin="dense"
            label="Price"
            type="number"
            fullWidth
            value={formData.price}
            onChange={(e) =>
              setFormData({
                ...formData,
                price: e.target.value,
              })
            }
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.category}
              fullWidth
              onChange={(e) =>
                setFormData({
                  ...formData,
                  category: e.target.value,
                })
              }
            >
              <MenuItem value="None">None</MenuItem>
              <MenuItem value="ATL">ATL</MenuItem>
              <MenuItem value="BTL">BTL</MenuItem>
              <MenuItem value="DIGITAL">DIGITAL</MenuItem>
            </Select>
          </FormControl>

          {formData.photo.length > 0 && (
            <>
              {formData.photo.map((ph, i) => (
                <img key={i} src={ph} alt="profile" className="formImg" />
              ))}
            </>
          )}

          <Button
            variant="contained"
            component="label"
            style={{ marginTop: "10px" }}
          >
            {uploading ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              <>Select Image</>
            )}

            <input type="file" hidden onChange={uploadFileHandler} multiple />
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFormSubmit} color="primary">
            {updateServiceReducer.updateServiceLoading ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              <>Create</>
            )}
          </Button>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <div className="formRight">
        {serviceData1.length > 0 ? (
          <>
            {serviceReducer.serviceLoading ? (
              <Loading />
            ) : serviceReducer.serviceError ? (
              <p>{serviceReducer.serviceError}</p>
            ) : (
              <>
                <h2>Services</h2>
                {serviceData1.map((service, index) => (
                  <div className="itemWrapper" key={index}>
                    <div>
                      {service.Images !== null && (
                        <img
                          src={service.Images[0]}
                          alt="aslf"
                          width="50"
                          height="50"
                        />
                      )}
                      <div style={{ marginLeft: "10px" }}>
                        <h1>{service.Title}</h1>
                        <p>{service.Description}</p>
                        <p>&#8377; {service.Price}</p>
                      </div>
                    </div>
                    <div>
                      <input type="hidden" value={service._id} />
                      <button className="sControlBtn" onClick={handleEdit}>
                        edit
                      </button>
                      <button className="sControlBtn" onClick={handleDelete}>
                        delete
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </>
        ) : (
          <h4>Create service</h4>
        )}
      </div>
    </div>
    // </div>
  );
};

export default AdminServices;
