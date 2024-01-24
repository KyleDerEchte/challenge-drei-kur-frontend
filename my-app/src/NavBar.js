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
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"
                             className="bi bi-handbag-fill mb-auto " viewBox="0 0 16 16">
                            <path
                                d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z"
                            />
                        </svg>
                    </a>
                </div>
            </nav>
        </div>
    );
    }
}