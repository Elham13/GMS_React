import React, { useEffect, useState } from "react";
import AdminCard from "./AdminCard";
import AdminCustomer from "./AdminCustomer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getPaginatedServices,
  getProductsCount,
} from "../../../redux/services/serviceActions";
import { getUsersAction } from "../../../redux/user/userActions";
import Loading from "../Loading";

const AdminDashboard = (props) => {
  const dispatch = useDispatch();
  const getAllUsers = useSelector((state) => state.getAllUsers);
  const paginatedServices = useSelector((state) => state.paginatedServices);
  const countServices = useSelector((state) => state.countServices);
  const getClient = useSelector((state) => state.getClient);

  const [data, setData] = useState({
    loading: false,
    error: "",
    res: [],
    pages: "",
    page: "",
  });

  useEffect(() => {
    dispatch(getPaginatedServices());
    dispatch(getProductsCount());
    dispatch(getUsersAction());
  }, [dispatch]);

  useEffect(() => {
    setData({
      loading: paginatedServices.loading,
      error: paginatedServices.error,
      res: paginatedServices.res,
      pages: paginatedServices.pages,
      page: paginatedServices.page,
    });
  }, [paginatedServices]);

  return (
    <div>
      <div className='adminCards'>
        <AdminCard
          count={getClient.getClientResponse.length}
          name='Clients'
          icon={
            <i
              className='fas fa-user'
              style={{ color: "var(--colorAccent)", fontSize: "44px" }}
            ></i>
          }
        />
        <AdminCard
          count={countServices.res}
          name='Services'
          icon={
            <i
              className='fas fa-clipboard'
              style={{ color: "var(--colorAccent)", fontSize: "44px" }}
            ></i>
          }
        />
        <AdminCard
          count={124}
          name='Orders'
          icon={
            <i
              className='fas fa-shopping-bag'
              style={{ color: "var(--colorAccent)", fontSize: "44px" }}
            ></i>
          }
        />
        <AdminCard
          count='&#8377; 62k'
          name='Income'
          icon={
            <i
              className='fas fa-dollar-sign'
              style={{ color: "#fff", fontSize: "44px" }}
            ></i>
          }
        />
      </div>

      <div className='adminRecentGrid'>
        <div className='adminProjects'>
          <div className='adminCard'>
            <div className='adminCard-header'>
              <h3>Recent services</h3>
              {data.pages > 1 && (
                <Link to='/allAds'>
                  <button>
                    See all <i className='fas fa-arrow-right'></i>
                  </button>
                </Link>
              )}
            </div>
            <div className='adminCardBody'>
              <div className='adminTable-responsive'>
                {data.loading ? (
                  <Loading />
                ) : data.error ? (
                  <p>{data.error}</p>
                ) : (
                  <table>
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.res.map((service, index) => (
                        <tr key={service._id}>
                          <td className='noWrap'>{index + 1}</td>
                          <td className='noWrap'>{service.Title}</td>
                          <td className='noWrap'>&#8377; {service.Price}</td>
                          <td>{service.Description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='adminCustomers'>
          <div className='adminCard'>
            <div className='adminCard-header'>
              <h3>New Customers</h3>
              <button>
                See all <i className='fas fa-arrow-right'></i>
              </button>
            </div>
            <div className='adminCardBody'>
              {getAllUsers.loading ? (
                <Loading />
              ) : getAllUsers.error ? (
                <p>{getAllUsers.error}</p>
              ) : (
                <>
                  {getAllUsers.res.map((user) => (
                    <AdminCustomer
                      key={user._id}
                      name={user.fullName}
                      image={user.photo}
                      email={user.email}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
