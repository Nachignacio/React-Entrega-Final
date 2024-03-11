import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import {db} from "../config/firebase"
import {auth} from "../config/firebase";
import "../styles/components/Brief.css"
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";

function Brief(){

    const {cart, price} = useContext(CartContext);
    
    const purchaseOrdersReference = collection(db, "Ordenes de Compra");
    const [ordenesData, setOrdenesData] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);


    async function getPurchaseOrder(){ //Obtengo la data de la base de datos
        const ordenes = await getDocs(purchaseOrdersReference)

        const data = ordenes.docs.map( (doc) =>({
            ...doc.data(),
            id:doc.id
    }))
        setOrdenesData(data);
}
    useEffect(() => {
        getPurchaseOrder();
    },)
    

    
    /*function objectMap(obj, fn) { //Creo una función similar al map de array pero para objetos
        const newObject = {};
        Object.keys(obj).forEach((key) => {
            newObject[key] = fn(obj[key]);
        });
        return newObject;
    }*/

    async function logOut(){
        await signOut(auth);
        setCurrentUser(null);
        console.log(currentUser);
    }


    
    async function deletePurchaseOrder(id){
        const order = doc(db,"Ordenes de Compra", id);
        await deleteDoc(order);
        getPurchaseOrder();
        console.log(ordenesData);
    }

    
    async function clearDatabase() {
        const querySnapshot = await getDocs(purchaseOrdersReference);
        querySnapshot.forEach((doc) => {
            deleteDoc(doc.ref);
        });
    }
    
    /* clearDatabase();*/ //Funcion hecha para limpiar el data base, descomentar cuando se quiera limpiar

    /* <button onClick={() => clearDatabase()}>Clear Database</button> Agregar esto al JSX cuando se quiera poner el boton para limpiar la base de datos*/

    let finalIndex = ordenesData.length - 1;
    let ordenCompra = ordenesData[finalIndex];
    
    var purchase = []; //Almaceno en este array lo que quiero mostrar de lo extraido de la orden de compra

    for(let i=0; i < cart.length; ++i){
        purchase.push(cart[i].Nombre);
        purchase.push(cart[i].cant);
    }

    return(
        <div className="brief">
            Your purchase order is:
            {purchase.map((el, index, array) => (
            <div>
                {(index-1)%2 ? (
                    <div>
                        <p>Product: {array[index]}</p>
                        <p>Quantity: {array[index+1]}</p>
                    </div>
                ) : null}
            </div>))}
            <span>
                Purchase order ID: {ordenCompra ? ordenCompra.id : ""}<br/>
            </span>
            <span>
                Ordering user: {auth?.currentUser?.email ? auth.currentUser.email : "Loading"}
            </span>
            <p>
                Total price: ${price}
            </p>
            <button onClick={() => clearDatabase()}>Clear Database</button>
            <button onClick={logOut}>Sign Out</button>
            <Link to="/" id="productLink">
                <button id="products">
                    Products
                </button>
            </Link>
        </div>
    )
}

export default Brief;