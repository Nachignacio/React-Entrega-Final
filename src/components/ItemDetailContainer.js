import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "../styles/components/ItemDetailContainer.css"
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    
    

    const initialCounter=1;

    const [details, setDetails] = useState({});

    const {detailId} = useParams();

    console.log("detailID is: ", detailId);

    useEffect(()=>{
        fetch('/Item1.json')
        .then(res => res.json())
        .then(re => {
        let detailed = re.find((product) => product.id == detailId);
            console.log("Feched details: ", detailed);
            setDetails(detailed)
        })
        .catch(err => console.log(err))
    },[detailId]);
    
    
    return (
        <div className="detail">
            {details && Object.keys(details).length !== 0 && (
                <ItemDetail item={details} init={initialCounter}/>
            )}
        </div>
    )
}

export default ItemDetailContainer;
