import { Link } from "react-router-dom";
import "../styles/components/CartItem.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({product}){

    const {cart, addProduct, clearCart, removeItem} = useContext(CartContext);

    return(
        <div className="cartItem">
            <h3>{product.title}</h3>
            <p id="quantity">Quantity: {product.cant}</p>
            <p id="pricePerUnit">Price per unit: ${product.price}</p>
            <p id="subtotal">Subtotal: ${product.price * product.cant}</p>
            <button onClick={()=> removeItem(product.id)}>X</button>
        </div>
    )
}

export default CartItem;