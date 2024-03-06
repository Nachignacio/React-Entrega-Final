import { Link } from "react-router-dom";
import "../styles/components/CartItem.css";

function CartItem({product}){
    return(
        <div className="cartItem">
            <h3>{product.title}</h3>
            <p id="quantity">Quantity: {product.cant}</p>
            <p id="pricePerUnit">Price per unit: ${product.price}</p>
            <p id="subtotal">Subtotal: ${product.price * product.cant}</p>
        </div>
    )
}

export default CartItem;