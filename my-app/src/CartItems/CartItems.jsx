import React, {useContext} from "react";
import "./CartItems.css"
import {ShopContext} from "../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png"
import {Link} from "react-router-dom";


const CartItems = ()=>{
    const {Versandkosten,getTotalCartAmount,all_product,cartItems,removeCart} = useContext(ShopContext);

        const Totalkosten = () => {
            if (getTotalCartAmount() === 0) {
                return 0;
            } else {
              return  Versandkosten() + getTotalCartAmount();
            }
        };

    return(
        <div className="cartitems">

            <div className="cartitems-format-main">
                <p>Produkt</p>
                <p>Name</p>
                <p>Preis</p>
                <p>Menge</p>
                <p>Größe</p>
                <p>Anzahl</p>
                <p>Entfernen</p>
            </div>
            <hr/>
            {all_product.map((e)=>{
                if(cartItems[e.id]>0){
                    return <div>
                        <div>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className="carticon-product-icon"/>
                                <p>{e.name}</p>
                                <p>{e.new_price}€</p>
                                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                                <p className="question_mark">{"?"}</p>
                                <p>{e.new_price*cartItems[e.id]}€</p>
                                <img className="cartitems-remove-icon" src={remove_icon} onClick={() => {removeCart(e.id)}} alt=""/>
                            </div>
                            <hr />
                        </div>
                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Warenkorb Insgesamt</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Zwischensumme</p>
                            <p>{getTotalCartAmount()}€</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <p>Versand</p>
                            <p>{Versandkosten()}€</p>


                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <h3>Gesamtsumme (inkl. MwSt.)</h3>
                            <h3>{Totalkosten()}€</h3>
                        </div>
                    </div>
                    <Link to="/Checkout">
                    <button>ZUR KASSE</button>
                    </Link>
                </div>
                <div className="cartitems-promocode">
                    <p>Wenn du einen Gutschein hast, Hier eingeben oder einfügen</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder=""/>
                        <button>Einlösen</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartItems