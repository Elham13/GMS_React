import React from "react";

const AdminCustomer = ({ name, image, email }) => {
  return (
    <div className='adminCustomer'>
      <div className='adminInfo'>
        <img src={image} alt='customer' width='40px' height='40px' />
        <div>
          <h4>{name}</h4>
          <small>{email}</small>
        </div>
      </div>
      <div className='adminContact'>
        <span>
          <i className='fas fa-user-circle'></i>
        </span>
        <span>
          <i className='fas fa-comment'></i>
        </span>
        <span>
          <i className='fas fa-phone'></i>
        </span>
      </div>
    </div>
  );
};

export default AdminCustomer;
