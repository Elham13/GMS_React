import React from "react";

const Card = ({ image, name, price, desc }) => {
    return (
        <div className="card1">
            <img src={image} alt="Denim Jeans" style={{ width: "100%" }} />
            <div>
                <h1>{name}</h1>
                <p className="price">&#8377; {price}</p>
                <p className="desc">{desc}</p>
                <button>See details</button>
            </div>
        </div>
    );
};

export default Card;
