import { createContext, useState } from "react";

//criar context
export const CartContext = createContext([]);

//criar provider
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    //logica para adicionar
    const addToCart = (item) => {
        setCart([...cart, item]);
    }

    //lógica para remover
    const removeFromCart = (itemToRemove) => {
        const newCart = cart.filter(
            (item) =>  item.name !== itemToRemove.name
        )
        setCart(newCart);
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart}}>
                {children}
        </CartContext.Provider>
    );
};