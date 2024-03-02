import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar.js"
import Logo from "../img/pedals.png";
import "../styles/pages/Layout.css";

function Layout(){
    return(
        <div className="background">
            <header>
                <h1> Virtual Store </h1>
                <img src={Logo} alt="logo" className="logo"/>
            </header>
            <NavBar/>
            <Outlet/>
            <footer>Contact us</footer>
        </div>
    )
}

export default Layout;