import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "../styles/components/Cart.css";

function Cart(){

    const {cart, addProduct, clearCart, removeItem} = useContext(CartContext);

    return (
        <div className="Cart">
            {cart.length == 0 ? <h1>There are no products in cart</h1> : cart.map(prod => <CartItem product={prod}/>)} 
            <button className="boton">
                <Link to="/">
                Back
                </Link>
            </button>
        </div>
    )
}

export default Cart;