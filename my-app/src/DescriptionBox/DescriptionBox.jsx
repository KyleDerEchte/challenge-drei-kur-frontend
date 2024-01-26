import React from "react";
import "./DescriptionBox.css"

const DescriptionBox = () => {

    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Beschreibung</div>
                <div className="descriptionbox-nav-box">Bewertungen (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Hi, ich bin eine Beschreibung</p>
                <p>
                    Und ich bin eine andere Beschreibung
                </p>
            </div>
        </div>

    )
}

export default DescriptionBox