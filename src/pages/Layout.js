import {Link, Outlet} from "react-router-dom";
import NavBar from "../components/NavBar"
import "../styles/pages/Layout.css";
import {auth} from "../config/firebase";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";


function Layout(){

    const [currentUser, setCurrentUser] = useState("");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        })});

        async function logOut(){
            await signOut(auth);
            setCurrentUser({});
        }

    return(
        <div className="background">
            <header>
                <h1> Virtual Store </h1>
                {auth?.currentUser ? (
                    <div>
                        <p id="current">
                            Current user: &nbsp;{currentUser.email} 
                        </p>
                        <button onClick={logOut}>
                            Sign Out
                        </button>
                    </div>) : (<Link to="/Auth">
                    <button>
                        Sign Up / Log In
                    </button>
                </Link>)}
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