import React from "react";
import "../../styles/Humberger.css";
import { Link } from "react-router-dom";
import auth from "../../utils/auth";
import { logout } from "../../redux/login/loginActions";

function Humberger() {
    // const [showNav, setShowNav] = useState(false)
    const openNav = () => {
        const nav = document.getElementById("nav");
        const ham = document.getElementById("ham");

        if (nav.style.transform === "translateX(-100vw)") {
            nav.style.transform = "translateX(0)";
            ham.classList.add("is-opened-navi");
        } else {
            nav.style.transform = "translateX(-100vw)";
            ham.classList.remove("is-opened-navi");
        }
    };

    const handleLogout = () => {
        auth.logout(() => {
            localStorage.removeItem("User");
            logout();
            window.location.reload();
        });
    };

    return (
        <div>
            <div className="hamburger" id="ham" onClick={openNav}>
                <div className="hamburger__line hamburger__line--01">
                    <div className="hamburger__line-in hamburger__line-in--01"></div>
                </div>
                <div className="hamburger__line hamburger__line--02">
                    <div className="hamburger__line-in hamburger__line-in--02"></div>
                </div>
                <div className="hamburger__line hamburger__line--03">
                    <div className="hamburger__line-in hamburger__line-in--03"></div>
                </div>
                <div className="hamburger__line hamburger__line--cross01">
                    <div className="hamburger__line-in hamburger__line-in--cross01"></div>
                </div>
                <div className="hamburger__line hamburger__line--cross02">
                    <div className="hamburger__line-in hamburger__line-in--cross02"></div>
                </div>
            </div>

            <div className="nav" id="nav">
                <a href="#home" className="nav-menu" onClick={openNav}>
                    <h1>Home</h1>
                </a>
                <a href="#services" className="nav-menu" onClick={openNav}>
                    <h1>Services</h1>
                </a>
                <a href="#about" className="nav-menu" onClick={openNav}>
                    <h1>About</h1>
                </a>
                <a href="#contact" className="nav-menu" onClick={openNav}>
                    <h1>Contact</h1>
                </a>

                {auth.isAdmin() && (
                    <Link to="/admin" className="nav-menu" onClick={openNav}>
                        <h1>Admin</h1>
                    </Link>
                )}

                {auth.isAuthenticated() ? (
                    <button className="nav-menu" onClick={handleLogout}>
                        <h1>Logout</h1>
                    </button>
                ) : (
                    <Link to="/login" className="nav-menu" onClick={openNav}>
                        <h1>Login/Signup</h1>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Humberger;
