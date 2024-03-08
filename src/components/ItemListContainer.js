import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import "../styles/components/ItemListContainer.css";
import {db} from "../config/firebase";
import { collection, getDocs} from "firebase/firestore";




function ItemListContainer(url){

    const initial=1;
    
    const [products, setProducts] = useState([]);

    const {categoryId} = useParams();

    const itemsCollectionReference = collection(db, "Items");

    let storedProducts = [];

    /*useEffect(()=>{
        fetch('/Item1.json')
        .then(res => res.json())
        .then(re => {
        storedProducts = categoryId ? re.filter((product) => product.category === categoryId) : re;
        setProducts(storedProducts)
        })
        .catch(err => console.log(err))

    },[categoryId]);*/
    
    useEffect(()=>{
        
        async function getItems(){
            const productsData = await getDocs(itemsCollectionReference);
            const filteredData = productsData.docs.map( (doc)=>({
                ...doc.data(),
                id:doc.id
            }))
            storedProducts = categoryId? filteredData.filter((prod) => prod.Categoria === categoryId) : filteredData;
            setProducts(storedProducts);
        }
        getItems();
    },[categoryId]);

    


    /* async function addItems(prod){
        console.log("Products es: ", prod);
        for(let i=0; i<20; ++i){
            await addDoc(itemsCollectionReference, {
                Nombre: prod[i].title,
                Stock: prod[i].rating.count,
                Detalle: prod[i].description,
                ID: prod[i].id,
                Precio: prod[i].price,
                Categoria: prod[i].category,
                Imagen: prod[i].image
            });
            if(prod[i]){
                console.log(prod[i].title);
                console.log(prod[i].id);
                console.log(prod[i].price);
            }
            else{
                console.log("Product no definido");
            }
        }
    }
    
    addItems(products);
    
    */ //Funcion que cree para que me cargue una unica vez todos los productos en la firestore

    
    

    return(
        <div className="catalog">
            {
                products?.map(el => <Item item={el} key={el.id} initial={initial}/>)
            }
        </div>
    )
}

/*  IMPORTANTE: REGLAS QUE DEBI PEGAR EN LAS REGLAS DE LA BASE DE DATOS EN MODO DE PRUEBA PARA NO TENER PROBLEMAS DE AUTORIZACION:

rules_version = '2';

 

service cloud.firestore {

  match /databases/{database}/documents {

 

    // This rule allows anyone with your Firestore database reference to view, edit,

    // and delete all data in your Firestore database. It is useful for getting

    // started, but it is configured to expire after 30 days because it

    // leaves your app open to attackers. At that time, all client

    // requests to your Firestore database will be denied.

    //

    // Make sure to write security rules for your app before that time, or else

    // all client requests to your Firestore database will be denied until you Update

    // your rules

    match /{document=**} {

      allow read, write: if request.time < timestamp.date(2024, 2, 30);

    }

  }

  }

*/

export default ItemListContainer;

