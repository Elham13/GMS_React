import React from "react";
import { Link } from "react-router-dom";
import "../styles/Admin.css";
import logo from "../assets/img/GMS-Logo.svg";
import user from "../assets/img/chary.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faIgloo,
  faReceipt,
  faShoppingBag,
  faUserCircle,
  faUsers,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import AdminDashboard from "./partials/admin_partials/AdminDashboard";
import AdminServices from "./partials/admin_partials/AdminServices";
import AdminClient from "./partials/admin_partials/AdminClient";
import AdminProtectedRoute from "../utils/AdminProtectedRoute";

const Admin = () => {
  return (
    <>
      <input type="checkbox" name="" id="adminNav-toggle" />

      <div className="adminSidebar">
        <div className="adminSidebar-brand">
          <h2>
            <img src={logo} alt="logo" /> GMS
          </h2>
        </div>
        <div className="adminSidebar-menu">
          <ul>
            <li>
              <Link to="/admin" aria-label="Dashboard" className="active">
                <FontAwesomeIcon
                  icon={faIgloo}
                  className="adminIcon"
                  style={{ marginRight: "1rem", width: "20px" }}
                />{" "}
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link aria-label="Services" to="/admin/services">
                <FontAwesomeIcon
                  icon={faUsers}
                  className="adminIcon"
                  style={{ marginRight: "1rem", width: "20px" }}
                />{" "}
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/clients" aria-label="Projects">
                <FontAwesomeIcon
                  icon={faClipboardList}
                  className="adminIcon"
                  style={{ marginRight: "1rem", width: "20px" }}
                />{" "}
                <span>Clients</span>
              </Link>
            </li>
            <li style={{ pointerEvents: "none" }}>
              <a href="/" aria-label="Orders">
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  className="adminIcon"
                  style={{ marginRight: "1rem", width: "20px" }}
                />{" "}
                <span>Orders</span>
              </a>
            </li>
            <li style={{ pointerEvents: "none" }}>
              <a href="/" aria-label="Inventory">
                <FontAwesomeIcon
                  icon={faReceipt}
                  className="adminIcon"
                  style={{ marginRight: "1rem", width: "20px" }}
                />{" "}
                <span>Inventory</span>
              </a>
            </li>
            <li style={{ pointerEvents: "none" }}>
              <a href="/" aria-label="Accounts">
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className="adminIcon"
                  style={{ marginRight: "1rem", width: "20px" }}
                />{" "}
                <span>Accounts</span>
              </a>
            </li>
            <li style={{ pointerEvents: "none" }}>
              <a href="/" aria-label="Tasks">
                <FontAwesomeIcon
                  icon={faClipboardList}
                  className="adminIcon"
                  style={{ marginRight: "1rem", width: "20px" }}
                />{" "}
                <span>Tasks</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="adminMain-content">
        <header className="adminHeader">
          <h2>
            <label htmlFor="adminNav-toggle" className="label">
              <FontAwesomeIcon icon={faBars} />
            </label>
            <span>Dashboard</span>
          </h2>

          <div className="adminSearchWrapper">
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              style={{ margin: "0 0.8rem" }}
            />
            <input type="search" name="" id="" placeholder="Search here" />
          </div>

          <div className="adminUserWrapper">
            <img src={user} alt="user" width="40px" height="40px" />
            <div>
              <h4>Bala Chary</h4>
              <small>Super admin</small>
            </div>
          </div>
        </header>

        <main className="adminMain">
          <AdminProtectedRoute
            exact
            path="/admin/"
            component={AdminDashboard}
          />
          <AdminProtectedRoute
            path="/admin/services"
            component={AdminServices}
          />
          <AdminProtectedRoute path="/admin/clients" component={AdminClient} />
        </main>
      </div>
    </>
  );
};

export default Admin;
