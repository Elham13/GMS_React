import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import '../styles/Admin.css'
import logo from '../assets/img/GMS-Logo.svg'
import user from '../assets/img/chary.png'
import {SidebarData} from '../utils/SidebarData'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import AdminDashboard from './partials/admin_partials/AdminDashboard';
import AdminServices from './partials/admin_partials/AdminServices';

const Admin = () => {

    return ( 
        <>
        <input type="checkbox" name="" id="adminNav-toggle" />
        <Router>
        <div className="adminSidebar"> 
            <div className="adminSidebar-brand" >
                <h2><img src={logo} alt="logo" /> GMS</h2>
            </div>
            <div className="adminSidebar-menu">
                <ul>
                    {SidebarData.map((val, key) => (
                        <li key={key}>
                            <Link to={val.link} >
                                {val.icon} <span>{val.title}</span>
                            </Link>
                        </li>
                    ))}
                    {/* <li>
                        <Link to="/admin" onClick={toggleActiveLink} aria-label="Dashboard" className="active">
                            <FontAwesomeIcon icon={faIgloo} className="adminIcon" style={{marginRight: '1rem', width: '20px'}} /> <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                    <Link aria-label="Services" onClick={toggleActiveLink} to="/services">
                        <FontAwesomeIcon icon={faUsers} className="adminIcon" style={{marginRight: '1rem', width: '20px'}} /> <span>Services</span>
                    </Link>
                    </li>
                    <li style={{pointerEvents:'none'}}>
                        <a href="/" aria-label="Projects"><FontAwesomeIcon icon={faClipboardList} className="adminIcon" style={{marginRight: '1rem', width: '20px'}} /> <span>Projects</span></a>
                    </li>
                    <li style={{pointerEvents:'none'}}>
                        <a href="/" aria-label="Orders"><FontAwesomeIcon icon={faShoppingBag} className="adminIcon" style={{marginRight: '1rem', width: '20px'}} /> <span>Orders</span></a>
                    </li>
                    <li style={{pointerEvents:'none'}}>
                        <a href="/" aria-label="Inventory"><FontAwesomeIcon icon={faReceipt} className="adminIcon" style={{marginRight: '1rem', width: '20px'}} /> <span>Inventory</span></a>
                    </li>
                    <li style={{pointerEvents:'none'}}>
                        <a href="/" aria-label="Accounts"><FontAwesomeIcon icon={faUserCircle} className="adminIcon" style={{marginRight: '1rem', width: '20px'}} /> <span>Accounts</span></a>
                    </li>
                    <li style={{pointerEvents:'none'}}>
                        <a href="/" aria-label="Tasks"><FontAwesomeIcon icon={faClipboardList} className="adminIcon" style={{marginRight: '1rem', width: '20px'}} /> <span>Tasks</span></a>
                    </li> */}
                </ul>
            </div>
        </div>
        <div className="adminMain-content">
            <header className="adminHeader">
                <h2>
                    <label htmlFor="adminNav-toggle" className="label" >
                            <FontAwesomeIcon icon={faBars} />
                    </label> 
                    <span>Dashboard</span>
                </h2>

                <div className="adminSearchWrapper">
                    <FontAwesomeIcon icon={faSearch} size="lg" style={{margin: '0 0.8rem'}} />
                    <input type="search" name="" id="" placeholder="Search here" />
                </div>

                <div className="adminUserWrapper">
                    <img src={user} alt="user" width='40px' height='40px' /> 
                    <div>
                        <h4>Bala Chary</h4>
                        <small>Super admin</small>
                    </div>
                </div>
            </header>

            <main className="adminMain">
                <Switch>
                    <Route 
                        path="/admin"
                        component={AdminDashboard}
                    />
                    <Route 
                        path="/services"
                        component={AdminServices}
                    />
                </Switch>
            </main>
        </div>
        </Router>
        </>
    )
}

export default Admin
