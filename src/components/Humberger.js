import React from "react";
import '../styles/Humberger.css'

function Humberger() {
    // const [showNav, setShowNav] = useState(false)
    const openNav = () => {
        const nav = document.getElementById('nav')
        const ham = document.getElementById('ham')

        if(nav.style.transform === 'translateX(-100vw)'){
            nav.style.transform = 'translateX(0)'
            ham.classList.add('is-opened-navi')
        }else {
            nav.style.transform = 'translateX(-100vw)'
            ham.classList.remove('is-opened-navi')
        }
    }
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
                <a href="#home" className="nav-menu" onClick={openNav}><h1>Home</h1></a>
                <a href="#about" className="nav-menu" onClick={openNav}><h1>About</h1></a>
                <a href="/" className="nav-menu" onClick={openNav}><h1>Service</h1></a>
                <a href="/" className="nav-menu" onClick={openNav}><h1>Contact</h1></a>
            </div>
        </div>
    );
}

export default Humberger;
