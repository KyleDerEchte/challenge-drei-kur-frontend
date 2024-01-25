import React from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";
import imaeee from "../Assets/t-shirt-mit-h-stickerei--072025HA01-worn-1-0-0-800-800_g.jpg.webp"

const Hero = () => {
    return(
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hand-hand-icon">
                        <p>Hi, look what is new.</p>

                    </div>
                    <p className="id1">Kollektionen</p>
                    <p className="id1">für jeden</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Neue Kollektionen</div>
                    <img src={arrow_icon} alt=""/>
                </div>

            </div>
            <div className="hero-right">
                <img src={imaeee} alt=""/>

            </div>



        </div>
    )
}

export default Hero