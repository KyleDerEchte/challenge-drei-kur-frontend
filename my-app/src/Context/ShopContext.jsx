import React, {createContext, useState} from "react";
import all_product from "../Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] =0;
    }
    return cart;
}


const ShopContextProvider = (props) => {

    const [cartItems,setCartItems] = useState(getDefaultCart());


    const addToCart = (itemId) => {
        console.log((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        setCartItems(prev => {
            // Überprüfen, ob das Produkt bereits im Warenkorb ist
            const existingQuantity = prev[itemId];
            const newQuantity = existingQuantity ? existingQuantity + 1 : 1;

            // Rückgabe des aktualisierten Warenkorbs
            return {...prev, [itemId]: newQuantity};
        });
        console.log("Items: " + getTotalCartItems())
    }

    const removeCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for (const item in cartItems)
        {
            if (cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.price * cartItems[item];
            }

        }
        return Math.round(totalAmount, 2);
    }

    const Versandkosten = () => {
        let kosten = 0;
        if (getTotalCartAmount() <= 45)
        {
            kosten += 9;
        }else{
            kosten += 0;
        }
        return kosten

    }
    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems)
        {
            if (cartItems[item]>0)
            {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = { getTotalCartItems,Versandkosten,getTotalCartAmount,all_product,cartItems,addToCart,removeCart };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

