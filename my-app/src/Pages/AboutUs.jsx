import React from "react";
import "./CSS/AboutUs.css";
import teamwork_image from "../Assets/Teamimage.jpg";

const AboutUS = () => {
    return(
        <div>
            <body>
                <header>
                    <h1 className="AboutUsHeader">Über uns</h1>
                </header>
                <div className="Container">
                    <div className="Text">
                        <p className="AboutUsBody">
                            Herzlich willkommen auf unserer Shopwebseite! Wir sind Julius, Felix, Kyle, Aliaksei und Manon,
                            und wir stecken hinter der Marke "Nein." Wir arbeiten mit Begeisterung an der Gestaltung dieser
                            Plattform, denn unser Ziel ist es, dir die Möglichkeit zu geben, einzigartige T-Shirts mit dem
                            Stolz und der Verbundenheit zu unserer Universität/Schule zu tragen.
                        </p>
                        <p className="AboutUsBody">
                            Als siAs unserer Schule/Uni verstehen wir die Bedeutung von Gemeinschaft und Teamgeist. Mit
                            diesem Shop möchten wir eine Plattform schaffen, auf der du nicht nur Kleidung kaufst,
                            sondern auch Teil einer lebendigen Klassengemeinschaft wirst.
                        </p>
                        <p className="AboutUsBody">
                            Jedes T-Shirt auf unserer Webseite repräsentiert nicht nur hochwertige Materialien und
                            ansprechendes Design, sondern auch den Spirit unserer Uni/Schule. Wir glauben an die
                            Einzigartigkeit jedes Studierenden und möchten, dass du deine Persönlichkeit durch
                            individuell gestaltete Kleidung ausdrücken kannst.
                        </p>
                        <p className="AboutUsBody">
                            Vielen Dank, dass du uns auf dieser Reise begleitest. Schau dich um, finde dein perfektes
                            T-Shirt und sei stolz darauf, ein Teil unserer siA-Gemeinschaft zu sein!
                        </p>
                    </div>
                    <div className="Bild1">
                        <img className="Teamwork_Bild" src={teamwork_image} alt="" width="400"/>
                    </div>
                </div>
            <div>
                <p className="about-us-space"></p>
            </div>
            </body>
        </div>
    )
}

export default AboutUS