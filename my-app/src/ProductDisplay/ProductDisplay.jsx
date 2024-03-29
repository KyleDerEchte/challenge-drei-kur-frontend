import React, {useContext,useState} from "react";
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png"
import {ShopContext} from "../Context/ShopContext";
import funny_cart_gif from "../Assets/wired-flat-139-basket.gif"


const ProductDisplay =(props) =>{
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    return(
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                </div>
                <div className="productdisplay-img">
                    <img className="product-display-main-img" src={product.image} alt=""/>
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_dull_icon} alt=""/>
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-new">{product.price}€</div>
                </div>
                <div className="productdisplay-right-size">
                    <h1>Wähle die Größe</h1>
                    <select className="productdisplay-right-size-drop"
                        id="sizeDropdown"
                        value={selectedSize}
                        onChange={handleSizeChange}>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                    {/* Hier können Sie den ausgewählten Wert verwenden, wie es benötigt wird */}

                </div>
                <div className="button-container">
                <div className="upload-container">
                    <input type="file"/>
                    <button>
                        Upload dein Logo
                    </button>
                </div>
                <button onClick={() => {
                    addToCart(product.id)
                    console.log(product.id)
                }}>IN DEN WARENKORB </button>
                </div>

            </div>

        </div>
    )
}

export default ProductDisplay