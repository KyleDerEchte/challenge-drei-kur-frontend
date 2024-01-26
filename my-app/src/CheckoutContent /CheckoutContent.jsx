import React, { useState } from "react";
import "./CheckoutContent.css";
import paypayl_ima from "../Assets/paypal_payment_method_card_icon_142733.png";
import mastercard_ima from "../Assets/1495815236-jd07_84584.png"
import visa_ima from "../Assets/1495815261-jd08_84586.png"
import amex from "../Assets/americanexpress_82060.png"
import last from "../Assets/4230536-card-credit-payment_115016.png"


const CheckoutContent = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="CheckoutContent">
            <div className="CheckoutContent-container">
                <h1>Kasse</h1>
                <div className="CheckoutContent-fields">
                    <input type="text" placeholder="Dein Vorname"/>
                    <input type="text" placeholder="Dein Nachname"/>
                    <input type="text" placeholder="Deine Email-Adresse"/>
                    <input type="text" placeholder="Deine Straße und Hausnummer"/>
                    <input type="text" placeholder="Deine Postleitzahl"/>
                    <input type="text" placeholder="Dein Ort"/>


                </div>

                <div className="CheckoutContent-agree">
                    <h1>Zahlungsmöglichkeiten</h1>
                    <label>
                        <input
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                        />
                        <p>Kreditkarte <img src={mastercard_ima} alt=""/> <img src={visa_ima} alt=""/> <img src={amex} alt=""/></p>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                        />
                        <p><img src={paypayl_ima} alt=""/> </p>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="option3"
                            checked={selectedOption === 'option3'}
                            onChange={handleOptionChange}
                        />
                        <p>Lastschrift <img src={last} alt=""/></p>
                    </label>
                </div>
                <button>Weiter</button>
                <p className="CheckoutContent-login">
                    Hast du schon einen Account <span>Login hier</span>
                </p>
            </div>
        </div>
    );
};

export default CheckoutContent;
