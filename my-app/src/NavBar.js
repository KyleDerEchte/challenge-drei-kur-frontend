import React, { useState } from "react";
import "./Navbar.css";
import cart_icon from "../src/Assets/cart_icon.png";
import {Link} from "react-router-dom";

const NavBar = () => {
    const [menu, setMenu] = useState("über uns");

    const handleMenuClick = (menuItem) => {
        setMenu((prevMenu) => (prevMenu === menuItem ? "default" : menuItem));
    };

    return (
        <div className="navbarCSS">
            <div className="nav-logo">
                <p className="navbar-font">Nein.</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => handleMenuClick("shop")}><Link className="link" to="/">
                    Shop</Link>{menu === "shop" ? <hr/> : <></>}
                </li>
                <li onClick={() => handleMenuClick("über uns")}>
                    <Link className="link" to="/über_uns">
                        Über uns</Link>{menu === "über uns" ? <hr/> : <></>}
                </li>
                <li onClick={() => handleMenuClick("t-shirts")}><Link className="link"
                                                                      to="/t-shirt">T-Shirts</Link>
                    {menu === "t-shirts" ? <hr/> : <></>}
                </li>
                <li onClick={() => handleMenuClick("hoodies")}><Link className="link"
                                                                     to="/hoodies">Hoodies</Link>
                    {menu === "hoodies" ? <hr/> : <></>}
                </li>
                <li onClick={() => handleMenuClick("impressum")}><Link className="link"
                                                                       to="/impressum">Impressum</Link>
                    {menu === "impressum" ? <hr/> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/cart"><img src={cart_icon} alt=""/></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
};

export default NavBar;