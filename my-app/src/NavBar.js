import {Component} from "react";

export default class NavBar extends Component{
    render() {return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark navbar-style">
                <div className="container-fluid">
                    <a className="navbar-brand navbar-font" href="/my-app/public#">
                        Nein.
                    </a>

                    <button className="navbar-toggler"
                            type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

                            <li className="nav-item">
                                <a className="nav-link" href="/my-app/public#">Über uns</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Produkte</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Impressum</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
    }
}