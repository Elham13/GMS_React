import React from 'react'
import AdminCard from './AdminCard';
import AdminCustomer from './AdminCustomer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faClipboard,
    faShoppingBag,
    faUser,
    faWallet,
} from "@fortawesome/free-solid-svg-icons";
import user from "../../../assets/img/chary.png"

const AdminDashboard = () => {
    return (
        <div>
            <div className="adminCards">
                <AdminCard count={53} name="Customers" icon={<FontAwesomeIcon icon={faUser} color="var(--colorAccent)" size="3x" />} />
                <AdminCard count={79} name="Projects" icon={<FontAwesomeIcon icon={faClipboard} color="var(--colorAccent)" size="3x" />} />
                <AdminCard count={124} name="Orders" icon={<FontAwesomeIcon icon={faShoppingBag} color="var(--colorAccent)" size="3x" />} />
                <AdminCard count="&#8377; 62k" name="Income" icon={<FontAwesomeIcon icon={faWallet} color="#fff" size="3x" />} />
            </div>

            <div className="adminRecentGrid">
                <div className="adminProjects">
                    <div className="adminCard">
                        <div className="adminCard-header">
                            <h3>Recent services</h3>
                            <button>See all <FontAwesomeIcon icon={faArrowRight} /></button>
                        </div>
                        <div className="adminCardBody">
                            <div className="adminTable-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Price</th>
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
                            <AdminCustomer name="Muzamil" title="Web developer" image={user} />
                            <AdminCustomer name="Haji" title="Shopker" image={user} />
                            <AdminCustomer name="Mustafa" title="Baker" image={user} />
                            <AdminCustomer name="Elon Musk" title="Developer" image={user} />
                            <AdminCustomer name="Mark Zukerberg" title="Designer" image={user} />
                            <AdminCustomer name="" title="Web developer" image={user} />
                            <AdminCustomer name="Muzamil" title="Web developer" image={user} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
