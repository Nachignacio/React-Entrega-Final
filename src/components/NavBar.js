import ListItem from "./ListItem";
import Cart from "../img/cart.png";
import CartCounter from "../img/cartcounter.png";
import "../styles/components/NavBar.css";

function NavBar(){

    return (
            <nav className="App">
                <ul>
                    <ListItem texto="Clothing"/>
                    <ListItem texto="Jewelery"/>
                    <ListItem texto="Electronics"/>
                    <li>
                        <img src={Cart} id="cart" alt="cart"/>
                        <img src={CartCounter} id="cartCounter" alt="cart"/>
                    </li>
                </ul>
            </nav>)
}

export default NavBar;