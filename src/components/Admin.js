import React, { useEffect, useState } from 'react'
import '../styles/Admin.css'
import logo from '../assets/img/GMS-Logo.svg'
import user from '../assets/img/chary.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faClipboardList,
    faIgloo,
    faReceipt,
    faSearch,
    faShoppingBag,
    faUserCircle,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import AdminDashboard from './partials/admin_partials/AdminDashboard';
import AdminServices from './partials/admin_partials/AdminServices';

const Admin = () => {
    const [showScreens, setShowScreens] = useState({
        showDashboard: true,
        showServices: false,
    })

    const showDash = (e) => {
        const btns = document.querySelectorAll('.adminSidebar-menu ul li button')
        for(let bt of btns){
            console.log("button: ", bt)
            bt.classList.remove('active')
        }
        e.target.parentElement.classList.add('active')

        setShowScreens({
            showDashboard: true,
            showServices: false
        })
    }

    const showService = (e) => {
        const btns = document.querySelectorAll('.adminSidebar-menu ul li button')
        for(let bt of btns){
            console.log("button: ", bt)
            bt.classList.remove('active')
        }
        e.target.parentElement.classList.add('active')
        setShowScreens({
            showDashboard: false,
            showServices: true,
        })
    }

    useEffect(() => {
        const btns = document.querySelectorAll('.adminSidebar-menu ul li button')
        console.log(btns)

    }, [])


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
                        <button className="active" onClick={(e) => showDash(e)}><FontAwesomeIcon icon={faIgloo} className="adminIcon" style={{marginRight: '1rem', width: '20px'}} /> <span>Dashboard</span></button>
                    </li>
                    <li>
                        <button onClick={(e) => showService(e)}><FontAwesomeIcon icon={faUsers} className="adminIcon" style={{marginRight: '1rem', width: '20px'}} /> <span>Services</span></button>
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
                {showScreens.showDashboard ? (
                    <AdminDashboard />
                ) : showScreens.showServices ? (
                   <AdminServices />
                ): null}
            </main>
        </div>
        </>
    )
}

export default Admin
