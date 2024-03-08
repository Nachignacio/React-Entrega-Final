import Auth from "./Auth";
import {auth} from "../config/firebase";
import { signOut } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import Brief from "./Brief";
import { addDoc, collection } from "firebase/firestore";
import {db} from "../config/firebase"

function Checkout(){

    const {cart} = useContext(CartContext);

    const itemsCollectionReference = collection(db, "Ordenes de Compra");

    const [currentUser, setCurrentUser] = useState(null);

    let ordenCompra = 1;
    async function addPurchaseOrder(){
        cart.forEach((el) =>  addDoc(itemsCollectionReference, {Nombre: el.Nombre, Cantidad: el.cant}))
    }

    addPurchaseOrder();
    useEffect(() => {
        // Busco por cambios en el estado de autenticacion
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                // Usuario logueado
                setCurrentUser(user);
            } else {
                // No hay usuarios
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
        </div>
    )
}

export default Checkout;