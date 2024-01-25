import React from 'react';
import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css"
import "./App.css"
import App from './App';
import ShopContextProvider from "./Context/ShopContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ShopContextProvider>
        <App/>
    </ShopContextProvider>

)

reportWebVitals();
