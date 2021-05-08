import React from 'react'
import '../styles/Admin.css'
import logo from '../assets/img/GMS-Logo.svg'
import user from '../assets/img/chary.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faBars,
    faClipboard,
    faClipboardList,
    faClock,
    faComment,
    faIgloo,
    faPhone,
    faReceipt,
    faSearch,
    faShoppingBag,
    faUser,
    faUserCircle,
    faUsers,
    faWallet,
} from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
    return (
        <>
        <input type="checkbox" name="" id="adminNav-toggle" />
        <div className="adminSidebar">
            <div className="adminSidebar-brand" >
                <h2><img src={logo} alt="logo" /> GMS</h2>
            </div>
            <div className="adminSidebar-menu">
                <ul>
                    <li>
                        <a href="/" className="active"><FontAwesomeIcon icon={faIgloo} className="adminIcon" style={{marginRight: '1rem', width: '20px'}} /> <span>Dashboard</span></a>
                    </li>
                    <li>
                        <a href="/"><FontAwesomeIcon icon={faUsers} className="adminIcon" style={{marginRight: '1rem', width: '20px'}} /> <span>Customers</span></a>
                    </li>
                    <li>
                        <a href="/"><FontAwesomeIcon icon={faClipboardList} className="adminIcon" style={{marginRight: '1rem', width: '20px'}} /> <span>Projects</span></a>
                    </li>
                    <li>
                        <a href="/"><FontAwesomeIcon icon={faShoppingBag} className="adminIcon" style={{marginRight: '1rem', width: '20px'}} /> <span>Orders</span></a>
                    </li>
                    <li>
                        <a href="/"><FontAwesomeIcon icon={faReceipt} className="adminIcon" style={{marginRight: '1rem', width: '20px'}} /> <span>Inventory</span></a>
                    </li>
                    <li>
                        <a href="/"><FontAwesomeIcon icon={faUserCircle} className="adminIcon" style={{marginRight: '1rem', width: '20px'}} /> <span>Accounts</span></a>
                    </li>
                    <li>
                        <a href="/"><FontAwesomeIcon icon={faClipboardList} className="adminIcon" style={{marginRight: '1rem', width: '20px'}} /> <span>Tasks</span></a>
                    </li>
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
                <div className="adminCards">
                    <div className="adminCard-single">
                        <div>
                            <h1>54</h1>
                            <span>Customers</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faUser} color="var(--colorAccent)" size="3x" />
                        </div>
                    </div>

                    <div className="adminCard-single">
                        <div>
                            <h1>79</h1>
                            <span>Projects</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faClipboard} color="var(--colorAccent)" size="3x" />
                        </div>
                    </div>

                    <div className="adminCard-single">
                        <div>
                            <h1>124</h1>
                            <span>Orders</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faShoppingBag} color="var(--colorAccent)" size="3x" />
                        </div>
                    </div>

                    <div className="adminCard-single">
                        <div>
                            <h1>&#8377; 60k</h1>
                            <span>Income</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faWallet} color="#fff" size="3x" />
                        </div>
                    </div>
                </div>

                <div className="adminRecentGrid">
                    <div className="adminProjects">
                        <div className="adminCard">
                            <div className="adminCard-header">
                                <h3>Recent projects</h3>
                                <button>See all <FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                            <div className="adminCardBody">
                                <div className="adminTable-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Project title</th>
                                            <th>Departments</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                        <tbody>
                                            <tr>
                                                <td>UI/UX Design</td>
                                                <td>UI Team</td>
                                                <td><span className="adminStatus pink"></span>Review</td>
                                            </tr>
                                            <tr>
                                                <td>Web development</td>
                                                <td>Frontend</td>
                                                <td><span className="adminStatus orange"></span>In progress</td>
                                            </tr>
                                            <tr>
                                                <td>Ushop App</td>
                                                <td>Mobile Team</td>
                                                <td><span className="adminStatus purple"></span>Pending</td>
                                            </tr>
                                            <tr>
                                                <td>UI/UX Design</td>
                                                <td>UI Team</td>
                                                <td><span className="adminStatus pink"></span>Review</td>
                                            </tr>
                                            <tr>
                                                <td>Web development</td>
                                                <td>Frontend</td>
                                                <td><span className="adminStatus orange"></span>In progress</td>
                                            </tr>
                                            <tr>
                                                <td>Ushop App</td>
                                                <td>Mobile Team</td>
                                                <td><span className="adminStatus purple"></span>Pending</td>
                                            </tr>
                                            <tr>
                                                <td>UI/UX Design</td>
                                                <td>UI Team</td>
                                                <td><span className="adminStatus pink"></span>Review</td>
                                            </tr>
                                            <tr>
                                                <td>Web development</td>
                                                <td>Frontend</td>
                                                <td><span className="adminStatus orange"></span>In progress</td>
                                            </tr>
                                            <tr>
                                                <td>Ushop App</td>
                                                <td>Mobile Team</td>
                                                <td><span className="adminStatus purple"></span>Pending</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="adminCustomers">
                        <div className="adminCard">
                            <div className="adminCard-header">
                                <h3>New Customers</h3>
                                <button>See all <FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                            <div className="adminCardBody">
                                <div className="adminCustomer">
                                    <div className="adminInfo">
                                        <img src={user} alt="customer" width="40px" height="40px" />
                                        <div>
                                            <h4>Muzamil</h4>
                                            <small>CEO Excerpt</small>
                                        </div>
                                    </div>
                                    <div className="adminContact">
                                        <span><FontAwesomeIcon icon={faUserCircle} /></span>
                                        <span><FontAwesomeIcon icon={faComment} /></span>
                                        <span><FontAwesomeIcon icon={faPhone} /></span>
                                    </div>
                                </div>

                                <div className="adminCustomer">
                                    <div className="adminInfo">
                                        <img src={user} alt="customer" width="40px" height="40px" />
                                        <div>
                                            <h4>Muzamil</h4>
                                            <small>CEO Excerpt</small>
                                        </div>
                                    </div>
                                    <div className="adminContact">
                                        <span><FontAwesomeIcon icon={faUserCircle} /></span>
                                        <span><FontAwesomeIcon icon={faComment} /></span>
                                        <span><FontAwesomeIcon icon={faPhone} /></span>
                                    </div>
                                </div>

                                <div className="adminCustomer">
                                    <div className="adminInfo">
                                        <img src={user} alt="customer" width="40px" height="40px" />
                                        <div>
                                            <h4>Muzamil</h4>
                                            <small>CEO Excerpt</small>
                                        </div>
                                    </div>
                                    <div className="adminContact">
                                        <span><FontAwesomeIcon icon={faUserCircle} /></span>
                                        <span><FontAwesomeIcon icon={faComment} /></span>
                                        <span><FontAwesomeIcon icon={faPhone} /></span>
                                    </div>
                                </div>

                                <div className="adminCustomer">
                                    <div className="adminInfo">
                                        <img src={user} alt="customer" width="40px" height="40px" />
                                        <div>
                                            <h4>Muzamil</h4>
                                            <small>CEO Excerpt</small>
                                        </div>
                                    </div>
                                    <div className="adminContact">
                                        <span><FontAwesomeIcon icon={faUserCircle} /></span>
                                        <span><FontAwesomeIcon icon={faComment} /></span>
                                        <span><FontAwesomeIcon icon={faPhone} /></span>
                                    </div>
                                </div>

                                <div className="adminCustomer">
                                    <div className="adminInfo">
                                        <img src={user} alt="customer" width="40px" height="40px" />
                                        <div>
                                            <h4>Muzamil</h4>
                                            <small>CEO Excerpt</small>
                                        </div>
                                    </div>
                                    <div className="adminContact">
                                        <span><FontAwesomeIcon icon={faUserCircle} /></span>
                                        <span><FontAwesomeIcon icon={faComment} /></span>
                                        <span><FontAwesomeIcon icon={faPhone} /></span>
                                    </div>
                                </div>

                                <div className="adminCustomer">
                                    <div className="adminInfo">
                                        <img src={user} alt="customer" width="40px" height="40px" />
                                        <div>
                                            <h4>Muzamil</h4>
                                            <small>CEO Excerpt</small>
                                        </div>
                                    </div>
                                    <div className="adminContact">
                                        <span><FontAwesomeIcon icon={faUserCircle} /></span>
                                        <span><FontAwesomeIcon icon={faComment} /></span>
                                        <span><FontAwesomeIcon icon={faPhone} /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        </>
    )
}

export default Admin
