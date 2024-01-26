import React, {Component} from "react";
import NavBar from "./NavBar";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSingup from "./Pages/LoginSingup";
import AboutUS from "./Pages/AboutUs";
import Impressum from "./Pages/Impressum";
import Footer from "./Footer/Footer";
import tshirt_banner from "./Assets/tshirt_banner.jpg"
import hoodie_banner from "./Assets/hoodies.jpg.webp"
import CheckOut from "./Pages/CheckOut";


export default class App extends Component

{
  render() {
    return(
        <React.Fragment>
            <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<Shop/>}/>
                    <Route path="/t-shirt" element={<ShopCategory banner={tshirt_banner} category="t-shirt"/>}/>
                    <Route path="/hoodies" element={<ShopCategory banner={hoodie_banner} category="hoodie"/>}/>
                    <Route path="/über_uns" element={<AboutUS/>}/>
                    <Route path="/impressum" element={<Impressum/>}/>
                    <Route path="/product" element={<Product/>}>
                        <Route path=":productId" element={<Product/>}/>
                    </Route>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/login" element={<LoginSingup/>}/>
                    <Route path="/Checkout" element={<CheckOut/>}></Route>
                </Routes>

                <Footer/>

            </BrowserRouter>

            </React.Fragment>
    )
  }
}