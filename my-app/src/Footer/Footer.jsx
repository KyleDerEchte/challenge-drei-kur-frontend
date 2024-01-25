import React from "react";
import "./Footer.css"
import instagram_icon from "../Assets/instagram_icon.png"
import pinterest_icon from "../Assets/pintester_icon.png"


const Footer = () =>
{
    return(
        <div className="footer">
            <div className="footer-logo">
                <p>Nein.</p>
            </div>
            <ul className="footer-links">
                <li>Kontakt</li>
                <li>Standorte</li>
                <l>Impressum</l>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt=""/>
                </div>
                <div className="footer-icons-container">
                    <img src={pinterest_icon} alt=""/>
                </div>
            </div>


        </div>
    )
}

export default Footer