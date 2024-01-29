import React from "react";
import {Link} from "react-router-dom";
import "./CSS/OrderConfirmation.css"
import truck_gif from "../Assets/wired-flat-497-truck-delivery.gif"

const OrderConfirmation = () => {
    return(
        <div className="Background_Div">
            <div className="OrderConfirmtion-Message-Container">
                <h1 > Vielen Dank für deine Bestellung</h1>
                <h3>Die Bestätigung bekommen sie zusätlich auch an ihre angebene E-Mail Adresse zugesendet</h3>


            </div>
            <div className="truckGIF">
                <img  src={truck_gif} alt=""/>
            </div>
            <p></p>
            <div className="Information-Container">
                <h5>Bestelldetails</h5>
                <p>Bestell Nummer : </p>
                <p>Gesamtpreis :</p>
                <p>Lieferadresse :</p>
                <h5> Wir werden uns Schnellstmöglich um ihre Bestellung kümmern</h5>
            </div>
            <div className="Backbutton">
                <Link to="/">
                    <button className="Button"> Zurück zum Shop</button>
                </Link>
            </div>

        </div>
    )
}
export default OrderConfirmation