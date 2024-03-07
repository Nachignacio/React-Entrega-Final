import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "../styles/components/ItemDetailContainer.css"
import ItemDetail from './ItemDetail';
import { getDocs, collection } from 'firebase/firestore';
import {db} from "../config/firebase";

const ItemDetailContainer = () => {

    const initialCounter=1;

    const [details, setDetails] = useState({});

    const {detailId} = useParams();

    console.log("detailID is: ", detailId);

    
    /*useEffect(()=>{
        
        fetch('/Item1.json')
        .then(res => res.json())
        .then(re => {
        let detailed = re.find((product) => product.id == detailId);
            console.log("Feched details: ", detailed);
            setDetails(detailed)
        })
        .catch(err => console.log(err))
        
    },[detailId]);*/
    
    const itemsCollectionReference = collection(db, "Items");

    useEffect(()=> {
        async function getItemDetails(){
            let detailed = {};
            const productsData = await getDocs(itemsCollectionReference);
            const filteredData = productsData.docs.map( (doc)=>({
                ...doc.data(),
                id:doc.id
            }))
            console.log("Filtered is: ", filteredData);
            detailed = filteredData.find((prod) => prod.ID == detailId);
            console.log("Detailed is: ", detailed);
            setDetails(detailed);
        }
        getItemDetails()},[detailId]);




    return (
        <div className="detail">
            {details && Object.keys(details).length !== 0 && (
                <ItemDetail item={details} init={initialCounter}/>
            )}
            <div id="whitespace"></div>
        </div>
    )
}

export default ItemDetailContainer;
