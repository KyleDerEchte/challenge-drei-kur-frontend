import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_imae from "../Assets/hero_image.png";
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
                    <p>Collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
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