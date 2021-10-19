import { createContext, useState } from "react";

//criar context
export const ProductListContext = createContext([]);

//criar provider
export const ProductListProvider = ({ children }) => {
    const [productList, setProductList] = useState([
        {name: "Book", price: 20},
        {name: "T-shirt", price: 50},
        {name: "Banana", price: 3},
    ]);

    //logica para adicionar
    const addToProductList = (item) => {
        setProductList([...productList, item]);
    }

    //lógica para remover
    const removeFromProductList = (itemToRemove) => {
        const newProductList = productList.filter(
            (item) =>  item.name !== itemToRemove.name
        )
        setProductList(newProductList);
    };

    return (
        <ProductListContext.Provider
            value={{ productList, addToProductList, removeFromProductList}}>
                {children}
        </ProductListContext.Provider>
    );
};
