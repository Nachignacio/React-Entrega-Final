import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar"
import "../styles/pages/Layout.css";
import { CartContext } from "../context/CartContext";
import Auth from "../components/Auth";

function Layout(){

    

    return(
        <div className="background">
            <header>
                <h1> Virtual Store </h1>
                <Auth/>
            </header>
            <NavBar/>
            <Outlet/>
            <footer id="footer">Contact us</footer>
        </div>
    )
}

export default Layout;