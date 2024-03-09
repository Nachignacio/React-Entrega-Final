import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import {db} from "../config/firebase"
import {auth} from "../config/firebase";
import "../styles/components/Brief.css"

function Brief(){

    const {cart, price} = useContext(CartContext);
    
    const purchaseOrdersReference = collection(db, "Ordenes de Compra");
    const [ordenesData, setOrdenesData] = useState([]);


    async function getPurchaseOrder(){ //Obtengo la data de la base de datos
        const ordenes = await getDocs(purchaseOrdersReference)

        const data = ordenes.docs.map( (doc) =>({
            ...doc.data(),
            id:doc.id
    }))
        setOrdenesData(data);
        console.log("ordenes Data: ", ordenesData);
}
    useEffect(() => {
        getPurchaseOrder();
    },[])
    
    const array = [...ordenesData];

    console.log("array: ", array);

    
    /*function objectMap(obj, fn) { //Creo una función similar al map de array pero para objetos
        const newObject = {};
        Object.keys(obj).forEach((key) => {
            newObject[key] = fn(obj[key]);
        });
        return newObject;
    }*/

    console.log("ordenes Data: ", ordenesData);

    
    async function deletePurchaseOrder(id){
        const order = doc(db,"Ordenes de Compra", id);
        await deleteDoc(order);
        getPurchaseOrder();
        console.log(ordenesData);
    }

    let finalIndex = ordenesData.length - 1;
    let ordenCompra = ordenesData[finalIndex];
    console.log("ordenCompra: ", ordenCompra);
    
    var purchase = []; //Almaceno en este array lo que quiero mostrar de lo extraido de la orden de compra
    for(let i=0; i < cart.length; ++i){
        purchase.push(cart[i].Nombre);
        purchase.push(cart[i].cant);
    }
    console.log("purchase: ", purchase);
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
                Ordering user: {auth?.currentUser?.email}
            </span>
            <p>
                Total price: ${price}
            </p>
            <button onClick={() => deletePurchaseOrder(ordenesData[0].id)}>Clear Database</button>
        </div>
    )
}

export default Brief;