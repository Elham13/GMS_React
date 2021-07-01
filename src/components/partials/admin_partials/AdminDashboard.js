import React, { useEffect } from "react";
import AdminCard from "./AdminCard";
import AdminCustomer from "./AdminCustomer";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../../redux/services/serviceActions";
import user from "../../../assets/img/chary.png";
import Loading from "../Loading";

const AdminDashboard = () => {
    const dispatch = useDispatch();
    const serviceReducer = useSelector(state => state.service);
    const { serviceLoading, serviceData, serviceError } = serviceReducer;

    const getClient = useSelector(state => state.getClient)

    useEffect(() => {
        dispatch(getServices());
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <div className="adminCards">
                <AdminCard
                    count={getClient.getClientResponse.length}
                    name="Clients"
                    icon={<i className="fas fa-user" style={{ color: 'var(--colorAccent)', fontSize: '44px' }}></i>}
                />
                <AdminCard
                    count={serviceData.length}
                    name="Services"
                    icon={<i className="fas fa-clipboard" style={{ color: 'var(--colorAccent)', fontSize: '44px' }}></i>}
                />
                <AdminCard
                    count={124}
                    name="Orders"
                    icon={<i className="fas fa-shopping-bag" style={{ color: 'var(--colorAccent)', fontSize: '44px' }}></i>}
                />
                <AdminCard
                    count="&#8377; 62k"
                    name="Income"
                    icon={<i className="fas fa-dollar-sign" style={{ color: '#fff', fontSize: '44px' }}></i>}
                />
            </div>

            <div className="adminRecentGrid">
                <div className="adminProjects">
                    <div className="adminCard">
                        <div className="adminCard-header">
                            <h3>Recent services</h3>
                            <button>
                                See all <i className="fas fa-arrow-right"></i>
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
                                See all <i className="fas fa-arrow-right"></i>
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
