import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addClient, getClients } from "../../../redux/client/clientActions";
import FileBase64 from "react-file-base64";
import Loading from "../Loading";
import { ClientItemsList } from "../ItemsList";

const AdminClient = () => {
  const dispatch = useDispatch();

  const clientReducer = useSelector((state) => state.addClient);
  const clients = useSelector((state) => state.getClient);
  const removeClient = useSelector((state) => state.deleteClient);

  const [formData, setFormData] = useState({
    id: "",
    clientName: "",
    clientBody: "",
    photo: {},
  });

  const handleName = (e) => {
    setFormData({
      ...formData,
      clientName: e.target.value,
    });
  };
  const handleBody = (e) => {
    setFormData({
      ...formData,
      clientBody: e.target.value,
    });
  };

  const handlePhoto = (files) => {
    setFormData({
      ...formData,
      photo: files,
    });
  };

  const handleFormSubmit = () => {
    if (
      formData.clientName === "" ||
      formData.clientBody === "" ||
      formData.photo === ""
    ) {
      alert("Please fill all the fields");
    } else {
      dispatch(addClient(formData));
      setFormData({
        id: "",
        clientName: "",
        clientBody: "",
        photo: "",
      });
      setTimeout(() => {
        dispatch(getClients());
      }, 1000);
    }
  };

  const handleEdit = (id) => {
    const data = clients.getClientResponse.find((obj) => obj._id === id);
    setFormData({
      id: data._id,
      clientName: data.clientName,
      clientBody: data.brags,
      photo: {},
    });
  };

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  useEffect(() => {
    Object.keys(clientReducer.response).length &&
      alert(clientReducer.response.message);
  }, [clientReducer]);

  useEffect(() => {
    console.log("Client: ", removeClient);
    Object.keys(removeClient.deleteClientResponse).length &&
      alert(removeClient.deleteClientResponse.message);
  }, [removeClient]);

  return (
    <div className="sWrapper">
      <div className="sFormWrapper">
        <form className="sForm">
          <h4>Add client</h4>
          <input type="hidden" value={formData.id} />
          <div className="inputWrapper">
            <input
              type="text"
              required
              value={formData.clientName}
              onChange={handleName}
            />
            <p>Client Name</p>
          </div>
          <div className="inputWrapper">
            <input
              type="text"
              required
              value={formData.clientBody}
              onChange={handleBody}
            />
            <p>Description</p>
          </div>
          <div className="inputWrapper">
            <FileBase64 onDone={handlePhoto} />
            {formData.photo.length > 0 && (
              <div className="adminImagesWrapper">
                <img src={formData.photo.base64} alt="Images" width="60" />
              </div>
            )}
          </div>
          <button className="formBtn" onClick={handleFormSubmit}>
            {formData.id ? <>Update</> : <>Create</>}
          </button>
        </form>

        <div className="formRight">
          {clients.getClientLoading ? (
            <Loading />
          ) : clients.getClientError ? (
            <p>{clients.getClientError}</p>
          ) : clients.getClientResponse instanceof Array ? (
            <>
              <h4>Clients</h4>
              {clients.getClientResponse.map((client) => (
                <ClientItemsList client={client} edit={handleEdit} />
              ))}
            </>
          ) : (
            <p>{clients.getClientResponse.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminClient;
