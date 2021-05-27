import React, { useEffect } from "react";
import AdminCard from "./AdminCard";
import AdminCustomer from "./AdminCustomer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faClipboard, faShoppingBag, faUser, faWallet } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../../redux/services/serviceActions";
import user from "../../../assets/img/chary.png";
import Loading from "../Loading";

const AdminDashboard = () => {
    const dispatch = useDispatch();
    const serviceReducer = useSelector(state => state.service);
    const { serviceLoading, serviceData, serviceError } = serviceReducer;

    useEffect(() => {
        dispatch(getServices());
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <div className="adminCards">
                <AdminCard
                    count={53}
                    name="Customers"
                    icon={<FontAwesomeIcon icon={faUser} color="var(--colorAccent)" size="3x" />}
                />
                <AdminCard
                    count={serviceData.length}
                    name="Services"
                    icon={<FontAwesomeIcon icon={faClipboard} color="var(--colorAccent)" size="3x" />}
                />
                <AdminCard
                    count={124}
                    name="Orders"
                    icon={<FontAwesomeIcon icon={faShoppingBag} color="var(--colorAccent)" size="3x" />}
                />
                <AdminCard
                    count="&#8377; 62k"
                    name="Income"
                    icon={<FontAwesomeIcon icon={faWallet} color="#fff" size="3x" />}
                />
            </div>

            <div className="adminRecentGrid">
                <div className="adminProjects">
                    <div className="adminCard">
                        <div className="adminCard-header">
                            <h3>Recent services</h3>
                            <button>
                                See all <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                        <div className="adminCardBody">
                            <div className="adminTable-responsive">
                                {serviceLoading ? (
                                    <Loading />
                                ) : serviceError ? (
                                    <p>Error</p>
                                ) : (
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Price</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {serviceData.map((service, index) => (
                                                <tr key={index}>
                                                    <td className="noWrap">{service.Title}</td>
                                                    <td className="noWrap">&#8377; {service.Price}</td>
                                                    <td>{service.Description}</td>
                                                </tr>
                                            ))}
                                            {/* <tr>
                                            <td>Web development</td>
                                            <td>Frontend</td>
                                            <td><span className="adminStatus orange"></span>In progress</td>
                                        </tr> */}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="adminCustomers">
                    <div className="adminCard">
                        <div className="adminCard-header">
                            <h3>New Customers</h3>
                            <button>
                                See all <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                        <div className="adminCardBody">
                            <AdminCustomer name="Muzamil" title="Web developer" image={user} />
                            <AdminCustomer name="Haji" title="Shopker" image={user} />
                            <AdminCustomer name="Mustafa" title="Baker" image={user} />
                            <AdminCustomer name="Elon Musk" title="Developer" image={user} />
                            <AdminCustomer name="Mark Zukerberg" title="Designer" image={user} />
                            <AdminCustomer name="Donald Trump" title="Web developer" image={user} />
                            <AdminCustomer name="Muzamil" title="Web developer" image={user} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
