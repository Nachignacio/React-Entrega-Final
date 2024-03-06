import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Cart from "../img/cart.png";
import "../styles/components/CartWidget.css"
import { Link } from "react-router-dom";


function CartWidget(){

    const {cart, quantity} = useContext(CartContext);

    return(
        <Link to="/cart" className="cartWidget" style={{display: quantity > 0 ? "block" : "none"}}>
            <img src={Cart} id="cart" alt="cart" />
            <p>{quantity}</p>
        </Link>
    )
}

export default CartWidget;