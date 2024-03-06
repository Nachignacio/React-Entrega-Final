import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "../styles/components/Cart.css";

function Cart(){

    const {cart, clearCart} = useContext(CartContext);

    return (
        <div className="Cart">
            {cart.length == 0 ? <h1>There are no products in Cart</h1> : cart.map(prod => <CartItem product={prod}/>)} 
            <Link to="/" id="productLink">
                <button id="products">
                Products
                </button>
            </Link>
            
            <button id="clearCart" onClick={() => clearCart()}>
                Clear Cart
            </button>
            <Link to="/checkout" id="checkout">
                <button id="checkoutButton">
                    Checkout
                </button>
            </Link>
            
        </div>
    )
}

export default Cart;