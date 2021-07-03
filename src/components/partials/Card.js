import React from "react";
import { useHistory } from "react-router-dom";

const Card = ({ data }) => {
  const history = useHistory();
  const showDetails = () => {
    history.push(`/product-details/${data._id}`);
  };
  return (
    <div className="card1">
      <img
        src={data.Images[0]}
        alt="Denim Jeans"
        style={{ width: "100%" }}
        loading="lazy"
      />
      <div>
        <h1>{data.Title}</h1>
        <p className="price">&#8377; {data.Price}</p>
        <p className="desc">{data.Description}</p>
        <button onClick={showDetails}>See details</button>
      </div>
    </div>
  );
};

export default Card;
