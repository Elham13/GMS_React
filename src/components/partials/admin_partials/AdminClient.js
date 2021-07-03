import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@material-ui/core";
import {
  addClient,
  deleteClient,
  getClients,
  updateClient,
} from "../../../redux/client/clientActions";
import Loading from "../Loading";
import { ClientItemsList } from "../ItemsList";
import Popup from "../Popup";
import { localAPI } from "../../../redux/api";

const AdminClient = () => {
  const dispatch = useDispatch();

  const clientReducer = useSelector((state) => state.addClient);
  const updateClientReducer = useSelector((state) => state.editClient);
  const clients = useSelector((state) => state.getClient);
  const removeClient = useSelector((state) => state.deleteClient);

  const [openForm, setOpenForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    clientName: "",
    clientBody: "",
    photo: "",
  });
  const [alertPopup, setAlertPoput] = useState({
    open: false,
    message: "",
    severity: "",
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

      console.log("REsponse: ", data);
      setFormData({
        ...formData,
        photo: data,
      });
      setUploading(false);
    } catch (error) {
      setAlertPoput({
        open: true,
        message: error.message,
        severity: "error",
      });
      setUploading(false);
    }
  };

  const handleCreate = () => {
    setOpenForm(true);
    dispatch(addClient());
  };

  const handleUpdate = () => {
    dispatch(updateClient(formData));
  };

  const handleCancel = () => {
    setOpenForm(false);
    dispatch(deleteClient(formData.id));
  };

  const handleCloaseAlert = () => {
    setAlertPoput({
      open: false,
      message: "",
      severity: "success",
    });
  };

  const handleEdit = (id) => {
    const data = clients.getClientResponse.find((obj) => obj._id === id);
    setFormData({
      id: data._id,
      clientName: data.clientName,
      clientBody: data.brags,
      photo: "",
    });
    setOpenForm(true);
  };

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  useEffect(() => {
    if (clientReducer.addClientError !== "") {
      setOpenForm(false);
      setAlertPoput({
        open: true,
        message: clientReducer.addClientError,
        severity: "error",
      });
    }
    if (Object.keys(clientReducer.response).length) {
      const data = clientReducer.response;
      setFormData({
        id: data._id,
        clientName: data.clientName,
        clientBody: data.brags,
        photo: data.photo,
      });
    }
  }, [clientReducer]);

  useEffect(() => {
    if (Object.keys(removeClient.deleteClientResponse).length) {
      setAlertPoput({
        open: true,
        message: removeClient.deleteClientResponse.message,
        severity: "success",
      });
    }
  }, [removeClient]);

  useEffect(() => {
    if (updateClientReducer.error !== "") {
      setOpenForm(false);
      setAlertPoput({
        open: true,
        message: updateClientReducer.error,
        severity: "error",
      });
    }

    if (updateClientReducer.response !== "") {
      setOpenForm(false);
      setAlertPoput({
        open: true,
        message: updateClientReducer.response,
        severity: "success",
      });
      setTimeout(() => {
        window.location.reload();
      }, [2000]);
    }
  }, [updateClientReducer]);

  return (
    <div className="sWrapper">
      <Popup
        severity={alertPopup.severity}
        open={alertPopup.open}
        close={handleCloaseAlert}
        message={alertPopup.message}
      />

      <button className="createBtn" onClick={handleCreate}>
        {clientReducer.addClientLoading ? (
          <i className="fas fa-spinner fa-spin"></i>
        ) : (
          <>
            Create client <i className="fas fa-plus"></i>
          </>
        )}
      </button>

      <Dialog
        open={openForm}
        onClose={() => setOpenForm(true)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create new client</DialogTitle>
        <DialogContent>
          <TextField type="hidden" value={formData.id} />

          <TextField
            type="text"
            fullWidth
            margin="dense"
            label="Client name"
            value={formData.clientName}
            onChange={(e) =>
              setFormData({
                ...formData,
                clientName: e.target.value,
              })
            }
          />
          <TextField
            type="text"
            fullWidth
            margin="dense"
            label="Description"
            value={formData.clientBody}
            onChange={(e) =>
              setFormData({
                ...formData,
                clientBody: e.target.value,
              })
            }
          />

          {formData.photo !== "" && (
            <img src={formData.photo} alt="profile" className="formImg" />
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

            <input type="file" hidden onChange={uploadFileHandler} />
          </Button>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleUpdate}>
            {updateClientReducer.loading ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              <>Create</>
            )}
          </Button>
          <Button color="primary" onClick={handleCancel}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <div className="formRight">
        {clients.getClientLoading ? (
          <Loading />
        ) : clients.getClientError ? (
          <p>{clients.getClientError}</p>
        ) : clients.getClientResponse instanceof Array ? (
          <>
            <h4>Clients</h4>
            {clients.getClientResponse.map((client) => (
              <ClientItemsList
                key={client._id}
                client={client}
                edit={handleEdit}
              />
            ))}
          </>
        ) : (
          <p>{clients.getClientResponse.message}</p>
        )}
      </div>
    </div>
  );
};

export default AdminClient;
