import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar"
import "../styles/pages/Layout.css";
import { CartContext } from "../context/CartContext";
import Auth from "../components/Auth";
import { useState } from "react";

function Layout(){

    const [authMode, setAuthMode] = useState(false);

    function logInButton(){
        setAuthMode(true);
        console.log("Boton");
    }
    

    return(
        <div className="background">
            <header>
                <h1> Virtual Store </h1>
                
            </header>
            <NavBar/>
            <Outlet/>
            <footer id="footer">Contact us</footer>
        </div>
    )
}

export default Layout;


/*

{
                    authMode ? (<Auth/>) : (
                        <button onClick={logInButton}>
                            Log In
                        </button>
                    )
                }
                */