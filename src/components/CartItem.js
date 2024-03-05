import { Link } from "react-router-dom";
import "../styles/components/CartItem.css";

function CartItem({product}){
    return(
        <div className="cartItem">
            <h3>{product.title}</h3>
            <p>Quantity: {product.cant}</p>
            <p>Price per unit: ${product.price}</p>
            <p>Subtotal: ${product.price * product.cant}</p>
        </div>
    )
}

export default CartItem;