import Auth from "./Auth";
import {auth} from "../config/firebase";
import { signOut } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import Brief from "./Brief";
import { addDoc, collection } from "firebase/firestore";
import {db} from "../config/firebase"
import { Link } from "react-router-dom";

function Checkout(){

    const {cart, price} = useContext(CartContext);

    const purchaseOrdersReference = collection(db, "Ordenes de Compra");

    const [currentUser, setCurrentUser] = useState(null);

    let ordenCompra = 1;

    async function addPurchaseOrder(){
        
        const purchaseObjects = cart.reduce((acc, cur, index) => ({...acc, [`Nombre${index}`]: cur.Nombre, [`Cantidad${index}`]: cur.cant}),{}) //Adapto lo que tengo en el carrito a la informacion que me interesa para la orden de compra

        console.log("purchaseObjects :", purchaseObjects);

        await addDoc(purchaseOrdersReference, purchaseObjects);
    }

    

    useEffect(() => {
        addPurchaseOrder(); //Ejecuto la función en cuanto se carga la página de orden de compra
        console.log("Cart: ",cart)
        const unsubscribe = auth.onAuthStateChanged(user => { //Chequeo si cambio el estado de autenticacion
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
        });

        // Limpio la busqueda
        return () => unsubscribe();
    }, []);

    async function logOut(){
        await signOut(auth);
        setCurrentUser(null);
        console.log(currentUser);
    }

    return(
        <div>
            {
                currentUser ? (<div>
                    <Brief ordenCompra={ordenCompra}/>
                    
                    <button onClick={logOut}>Sign Out</button>
                    </div>
                    ) : (<Auth/>)
            }
            <Link to="/" id="productLink">
                <button id="products">
                Products
                </button>
            </Link>
        </div>
    )
}

export default Checkout;