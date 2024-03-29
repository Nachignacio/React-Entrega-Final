import Auth from "./Auth";
import {auth} from "../config/firebase";
import { signOut } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import Brief from "./Brief";
import { addDoc, collection } from "firebase/firestore";
import {db} from "../config/firebase"
import { Link } from "react-router-dom";
import "../styles/components/Checkout.css";

function Checkout(){

    const {cart, price} = useContext(CartContext);

    const purchaseOrdersReference = collection(db, "Ordenes de Compra");

    const [currentUser, setCurrentUser] = useState(null);

    async function addPurchaseOrder(){
        
        const purchaseObjects = cart.reduce((acc, cur, index) => ({...acc, [`Nombre${index}`]: cur.Nombre, [`Cantidad${index}`]: cur.cant}),{}) //Adapto lo que tengo en el carrito a la informacion que me interesa para la orden de compra


        await addDoc(purchaseOrdersReference, purchaseObjects);
    }


    useEffect(() => {
        addPurchaseOrder(); //Ejecuto la función en cuanto se carga la página de orden de compra
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

    
    return(
        <div className="checkoutContainer">
            <div className="checkout">
                {
                    currentUser ? (<div>
                        <Brief/>
                        </div>
                        ) : (<Auth/>)
                }
            </div>
        </div>
    )
}

export default Checkout;