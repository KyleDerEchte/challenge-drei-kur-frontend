import React from "react";
import "./CSS/Impressum.css";

const Impressum = () => {
    return(
        <div>
            <body>
                <header>
                    <h1 className="ImpressumHeader">Impressum</h1>
                </header>
                <div className="Container">
                    <div className="Text">

                        <p className="ImpressumBodyFat">
                            Nein. GmbH
                        </p>
                        <p className="ImpressumBody">
                            Dratelnstraße 26
                        </p>
                        <p className="ImpressumBody">
                            21109 Hamburg
                        </p>
                        <p className="ImpressumBody">
                            Vertreten durch: Julius Sellschopp (Scrum Master)
                        </p>
                        <p className="ImpressumBody">
                            Telefon: 0123 456 789
                        </p>
                        <p className="ImpressumBody">
                            E-Mail: nein@nein.de
                        </p>
                        <p className="ImpressumBodyFat">
                            Vorstand
                        </p>
                        <p className="ImpressumBody">
                            Julius, Felix, Kyle, Aliaksei, Manon
                        </p>
                        <p className="ImpressumBodyFat">
                            Rechtliches
                        </p>
                        <p className="ImpressumBody">
                            Eingetragen beim Amtsgericht Charlottenburg Berlin, HRB 158855 B
                        </p>
                        <p className="ImpressumBody">
                            Umsatzsteuer-ID: DE 122345567
                        </p>
                        <p className="ImpressumBody">
                            Steuernummer: 01/123/34567
                        </p>
                        <p className="ImpressumBody">
                            Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit.
                        </p>
                    </div>
                </div>
                <p className="ImpressumSpace">

                </p>
            </body>
        </div>
    )
}

export default Impressum