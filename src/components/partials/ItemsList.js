import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteClient } from "../../redux/client/clientActions";

const ClientItemsList = ({ client, edit }) => {
  const dispatch = useDispatch();

  const removeClient = useSelector((state) => state.deleteClient);

  const handleDelete = (e) => {
    const canDelete = window.confirm("Ary sure you want to delete?");
    if (canDelete) {
      const id = client._id;
      dispatch(deleteClient(id));
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      return;
    }
  };

  const handleEdit = (e) => {
    const id = client._id;
    edit(id);
  };

  return (
    <div className='itemWrapper' key={client._id}>
      <div>
        <img src={client.photo} alt='aslf' width='50' height='50' />
        <div style={{ marginLeft: "10px" }}>
          <h1>{client.clientName}</h1>
          <p>{client.brags}</p>
        </div>
      </div>
      <div>
        <button className='sControlBtn' onClick={handleEdit}>
          edit
        </button>
        <button className='sControlBtn' onClick={handleDelete}>
          {removeClient.deleteClientLoading ? (
            <i className='fas fa-spinner fa-spin'></i>
          ) : (
            <>delete</>
          )}
        </button>
      </div>
    </div>
  );
};

export { ClientItemsList };
