import React from "react";
import "./CSS/LoginSignup.css"

const LoginSingup = () => {
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Registrieren</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Dein Name"/>
                    <input type="email" placeholder="Deine Email-Adresse"/>
                    <input type="password" placeholder="Passwort"/>

                </div>
                <button>Weiter</button>
                <p className="loginsignup-login">Hast du schon einen Account <span>Login hier</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>Durch das drücken von Weiter, Stimme ich den Bedigungen & Policy zu.</p>

                </div>
            </div>
        </div>
    )
}

export default LoginSingup