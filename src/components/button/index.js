import { useContext } from "react"
import { CartContext } from "../../Providers/cart";
import { ProductListContext } from "../../Providers/productsList"

const Button = ({type, item}) => {
    // eslint-disable-next-line 
    const { cart, addToCart, removeFromCart } = useContext(CartContext);
    // eslint-disable-next-line 
    const { productList, addToProductList, removeFromProductList } = useContext(ProductListContext)

    const text = type === "productList" ? "Add to cart" : "Remove from cart";

    const handleClick = () => {
        if (type === "productList") {
            removeFromProductList(item);
            addToCart(item);
        } else {
            removeFromCart(item);
            addToProductList(item);
        }
    }

    return <button onClick={handleClick}>{text}</button>
}

export default Button;