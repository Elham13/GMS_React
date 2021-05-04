import React from 'react'
import Humberger from './Humberger'
import '../styles/Home.css'
import ads from '../assets/img/ads.svg'
import sun from '../assets/img/sun.svg'
import grow from '../assets/img/grow.svg'

function Home() {
    return (
        <div className="homeWrapper" id="home">
            <Humberger />

            <div className="homeTop header">
                <h1 className="title">Welcom to GMS! </h1>
                <h1 className="caption">Take you business to the next level by GMS advertising services</h1>

            </div>
            <div className="homeOverlay">
                <div className="card">
                    <img src={ads} alt="icon" className="icon" />
                    <h1>Advertise</h1>
                    <h5>With our rich and powerfull advertising services, reach out to your millions of audiences</h5>
                </div>
                <div className="card">
                    <img src={grow} alt="icon" className="icon" />
                    <h1>Grow</h1>
                    <h5>Get your business to the next level and keep growing, with our effective and efficient services</h5>
                </div>
                <div className="card">
                    <img src={sun} alt="icon" className="icon" />
                    <h1>Shine</h1>
                    <h5>GMS will be the reason for your business to stand up amongst thousands of businesses</h5>
                </div>
            </div>

        </div>
    )
}

export default Home
