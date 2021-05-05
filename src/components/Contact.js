import React from 'react'
import '../styles/Contact.css'
import "../styles/Featured.css"

function Contact() {
    return (
        <div className="contact">
            <div className="titleWrapper">
                <h1 className="title1">Contact us</h1>
                <span className="line1"></span>
                <span className="line2"></span>
            </div>

            <div className="contactWrapper">
                <div className="formWrapper">
                    <h2>We'd love to hear from you</h2>
                    <form>
                        <div className="inputWrapper">
                            <input type="text"  />
                            <p>Email</p>
                        </div>
                        <div className="inputWrapper">
                            <input type="text"  />
                            <p>Name</p>
                        </div>
                        <div className="textareaWrapper">
                            <p>Message</p>
                            <textarea type="text" placeholder="Type a message" />
                        </div>
                    </form>
                </div>
                <h1>hei</h1>
            </div>
           
        </div>
    )
}

export default Contact
