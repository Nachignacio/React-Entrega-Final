import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "../styles/components/Cart.css";

function Cart(){

    const {cart, clearCart, quantity} = useContext(CartContext);

    return (
        <div className="Cart">
            {cart.length == 0 ? <h1>There are no products in Cart</h1> : cart.map(prod => <CartItem key={prod.ID} product={prod}/>)} 
            <Link to="/" id="productLink">
                <button id="products">
                Products
                </button>
            </Link>
            <button id="clearCart" onClick={() => clearCart()} style={{display: quantity > 0 ? "block" : "none"}}>
                Clear Cart
            </button>
            <Link to="/checkout" id="checkout"  style={{display: quantity > 0 ? "block" : "none"}}>
                <button id="checkoutButton">
                    Checkout
                </button>
            </Link>
            
        </div>
    )
}

export default Cart;