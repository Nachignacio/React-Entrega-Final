import ListItem from "./ListItem";
import CartWidget from "./CartWidget";
import "../styles/components/NavBar.css";

function NavBar(){

    return (
            <nav className="App">
                <ul>
                    <ListItem texto="Clothing"/>
                    <ListItem texto="Jewelery"/>
                    <ListItem texto="Electronics"/>
                    <CartWidget/>
                </ul>
            </nav>)
}

export default NavBar;