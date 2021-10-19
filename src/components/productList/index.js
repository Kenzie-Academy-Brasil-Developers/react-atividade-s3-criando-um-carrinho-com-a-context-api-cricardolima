import { useContext } from "react"
import { CartContext } from "../../Providers/cart";
import { ProductListContext } from "../../Providers/productsList"
import Button from "../button";

const ProductList = ({type}) => {
    //type determinará se o componente será do tipo "product" ou "cart"

    const { productList } = useContext(ProductListContext);
    const { cart } = useContext(CartContext);

    return (
        <ul>
            {type === "productList" && 
                productList.map((item, index) => (
                    <li key={index}>
                        {item.name} <Button type={type} item={item}/>
                    </li>
                ))
            }
            {type === "cart" && 
                cart.map((item, index) => (
                    <li key={index}>
                        {item.name} <Button type={type} item={item}/>
                    </li>
                ))
            }
        </ul>
    )
}

export default ProductList;