import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Admin.css";
import logo from "../assets/img/GMS-Logo.svg";
// import user from "../assets/img/chary.png";
import AdminDashboard from "./partials/admin_partials/AdminDashboard";
import AdminServices from "./partials/admin_partials/AdminServices";
import AdminClient from "./partials/admin_partials/AdminClient";
import AdminProtectedRoute from "../utils/AdminProtectedRoute";
import Profile from "./partials/admin_partials/Profile";

const Admin = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    photo: "",
    role: "",
  });

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      const u = JSON.parse(userInfo);
      setUser({
        fullName: u.fullName,
        email: u.email,
        photo: u.photo,
        role: u.role,
      });
    }
  }, []);

  return (
    <>
      <input type='checkbox' name='' id='adminNav-toggle' />

      <div className='adminSidebar'>
        <div className='adminSidebar-brand'>
          <Link to='/'>
            <h2>
              <img src={logo} alt='logo' /> GMS
            </h2>
          </Link>
        </div>
        <div className='adminSidebar-menu'>
          <ul>
            <li>
              <Link to='/admin' aria-label='Dashboard' className='active'>
                <span className='adminIcon'>
                  <i className='fas fa-igloo '></i>
                </span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link aria-label='Services' to='/admin/services'>
                <span className='adminIcon'>
                  <i className='fas fa-users '></i>
                </span>
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link to='/admin/clients' aria-label='Projects'>
                <span className='adminIcon'>
                  <i className='fas fa-clipboard-list '></i>
                </span>
                <span>Clients</span>
              </Link>
            </li>
            <li style={{ pointerEvents: "none" }}>
              <a href='/' aria-label='Orders'>
                <span className='adminIcon'>
                  <i className='fas fa-shopping-bag '></i>
                </span>
                <span>Orders</span>
              </a>
            </li>
            <li style={{ pointerEvents: "none" }}>
              <a href='/' aria-label='Inventory'>
                <span className='adminIcon'>
                  <i className='fas fa-receipt '></i>
                </span>
                <span>Inventory</span>
              </a>
            </li>
            <li style={{ pointerEvents: "none" }}>
              <a href='/' aria-label='Accounts'>
                <span className='adminIcon'>
                  <i className='fas fa-user-circle '></i>
                </span>
                <span>Accounts</span>
              </a>
            </li>
            <li style={{ pointerEvents: "none" }}>
              <a href='/' aria-label='Tasks'>
                <span className='adminIcon'>
                  <i className='fas fa-clipboard-list'></i>
                </span>
                <span>Tasks</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='adminMain-content'>
        <header className='adminHeader'>
          <h2>
            <label htmlFor='adminNav-toggle' className='label'>
              <i className='fas fa-bars'></i>
            </label>
            <span>Dashboard</span>
          </h2>

          <div className='adminSearchWrapper'>
            <span style={{ margin: "0 0.8rem" }}>
              <i className='fas fa-search'></i>
            </span>
            <input
              type='search'
              name=''
              id=''
              placeholder='Search for service'
            />
          </div>

          <div className='adminUserWrapper'>
            <Link to='/admin/profile'>
              <img src={user.photo} alt='user' width='40px' height='40px' />
            </Link>
            <div>
              <h4>{user.fullName}</h4>
              <small>{user.role}</small>
            </div>
          </div>
        </header>

        <main className='adminMain'>
          <AdminProtectedRoute
            exact
            path='/admin/'
            component={AdminDashboard}
          />
          <AdminProtectedRoute
            path='/admin/services'
            component={AdminServices}
          />
          <AdminProtectedRoute path='/admin/clients' component={AdminClient} />
          <AdminProtectedRoute path='/admin/profile' component={Profile} />
        </main>
      </div>
    </>
  );
};

export default Admin;
