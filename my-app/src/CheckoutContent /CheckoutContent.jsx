import React, { useState} from "react";
import "CheckoutContent.css";
import paypayl_ima from "../Assets/paypal_payment_method_card_icon_142733.png";
import mastercard_ima from "../Assets/1495815236-jd07_84584.png"
import visa_ima from "../Assets/1495815261-jd08_84586.png"
import amex from "../Assets/americanexpress_82060.png"
import last from "../Assets/4230536-card-credit-payment_115016.png"
import {Link} from "react-router-dom";






const CheckoutContent = ({generetedCartData}) => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const [inputValues,setInputValues] = useState({
        firstName:"",
        lastName:"",
        email:"",
        street:"",
        houseNumber:"",
        postCode:"",
        city:"",
        paymentMethod:"",
    });
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setInputValues((prevInputValues) =>({
            ...prevInputValues,
            [name]: value,
        }));
    };
    //const cartData = generetedCartData();

    const handleSaveToJson = async () => {


        const currentDateTime = new Date();
        const formattedDateTime = currentDateTime.toLocaleString();

        const dataToSave = {
            "customer": {
                ...inputValues,
            },
            "orderDetails":[
                {
                    "product":{
                        //cartData: cartData,
                    }
                }
            ],
            "localDateTime":formattedDateTime,
            "paymentMethod":{
                "description":selectedOption,
            },
            "orderFulfilment":{
                "description":"order-placed"
            }
        }
        const data = {
            "customer": {
                "forename": "Max",
                "surname": "Mustermann",
                "address": {
                    "street": "Beispielstraße",
                    "houseNumber": "34",
                    "plz": "10115",
                    "city": "Berlin",
                    "country": "Deutschland"
                }
            },
            "orderDetails": [
                {
                    "product": {
                        "name": "Produkt A",
                        "size": "M",
                        "costs": 20.50,
                        "price": 24.99,
                        "productType": {
                            "name": "Typ A"
                        },
                        "color": {
                            "color": "Rot"
                        },
                        "materialType":[
                            {
                                "material":"Baumwolle"
                            }
                        ]
                    },
                    "amount": 2
                },
                {
                    "product": {
                        "name": "Produkt B",
                        "size": "L",
                        "costs": 30.75,
                        "price": 34.99,
                        "productType": {
                            "name": "Typ B"
                        },
                        "color": {
                            "color": "Blau"
                        },
                        "materialType":[
                            {
                                "material":"Baumwolle"
                            }
                        ]
                    },
                    "amount": 1
                }
            ],
            "localDateTime": "2024-01-29T15:00:00",
            "paymentMethod": {
                "description": "Kreditkarte"
            },
            "orderFulfillment":{
                "description":"order-placed"
            }
        }

        try {
            const response = await fetch('http://localhost:8080/api/store/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                console.log("Server Response: ", jsonResponse);
                // Weitere Aktionen nach erfolgreicher Speicherung
            } else {
                console.log("HTTP-Error: " + response.status);
                // Behandlung von Fehlern bei der Anfrage
            }
        } catch (error) {
            console.error("Fehler beim Senden der Daten: ", error);
            // Behandlung von Netzwerkfehlern
        }


    };




    return (
        <div className="CheckoutContent">
            <div className="CheckoutContent-container">
                <h1>Kasse</h1>
                <div className="CheckoutContent-fields">
                    <input type="text" name="firstName" value={inputValues.firstName} onChange={handleInputChange} placeholder="Dein Vorname"/>
                    <input type="text" name="lastName" value={inputValues.lastName} onChange={handleInputChange} placeholder="Dein Nachname"/>
                    <input type="text" name="email" value={inputValues.email} onChange={handleInputChange} placeholder="Deine Email-Adresse"/>
                    <input type="text" name="street" value={inputValues.street} onChange={handleInputChange} placeholder="Deine Straße"/>
                    <input type="text" name="houseNumber" value={inputValues.houseNumber} onChange={handleInputChange} placeholder="Deine Hausnummer"/>
                    <input type="text" name="postCode" value={inputValues.postCode} onChange={handleInputChange} placeholder="Deine Postleitzahl"/>
                    <input type="text" name="city" value={inputValues.city} onChange={handleInputChange} placeholder="Dein Ort"/>
                </div>

                <div className="CheckoutContent-agree">
                    <h1>Zahlungsmöglichkeiten</h1>
                    <label>
                        <input
                            type="radio"
                            value="Kreditkarte"
                            checked={selectedOption === 'Kreditkarte'}
                            onChange={handleOptionChange}
                        />
                        <p>Kreditkarte <img src={mastercard_ima} alt=""/> <img src={visa_ima} alt=""/> <img src={amex} alt=""/></p>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Paypal"
                            checked={selectedOption === 'Paypal'}
                            onChange={handleOptionChange}
                        />
                        <p><img src={paypayl_ima} alt=""/> </p>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Lastschrift"
                            checked={selectedOption === 'Lastschrift'}
                            onChange={handleOptionChange}
                        />
                        <p>Lastschrift <img src={last} alt=""/></p>
                    </label>
                </div>
                <Link to = "/OrderConfirmation">
                <button onClick={handleSaveToJson}>Weiter</button>
                </Link>
                <p className="CheckoutContent-login">
                    Hast du schon einen Account <span>Login hier</span>
                </p>
            </div>
        </div>
    );
};

export default CheckoutContent;
