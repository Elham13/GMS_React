import React, { useEffect } from "react";
import Client1 from "./partials/Client1";
import "../styles/Client.css";
import { getClients } from "../redux/client/clientActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./partials/Loading";

const Client = () => {
  const dispatch = useDispatch();
  const getClient = useSelector((state) => state.getClient);

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  return (
    <div className='client'>
      <div className='titleWrapper'>
        <h1 className='title1'>Our clients</h1>
        <span className='line1'></span>
        <span className='line2'></span>
      </div>

      <div className='clientInner'>
        <h3>Take a look at our clients</h3>
        <h3>
          We did a great job with these companies. You can be next to work with
        </h3>

        <div className='clientWrapper'>
          {getClient.getClientLoading ? (
            <Loading />
          ) : getClient.getClientError !== "" ? (
            <p>{getClient.getClientError}</p>
          ) : (
            getClient.getClientResponse.length && (
              <>
                {getClient.getClientResponse.map((client) => (
                  <Client1
                    key={client._id}
                    image={client.photo}
                    name={client.clientName}
                    desc={client.brags}
                  />
                ))}
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Client;
