import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "../styles/components/ItemDetailContainer.css"
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    
    

    const initialCounter=1;

    const [details, setDetails] = useState({});

    const {detailId} = useParams();

    console.log(detailId);

    useEffect(()=>{
        fetch('/Item1.json')
        .then(res => res.json())
        .then(re => {
        let detailed = re.find((product) => product.id == detailId);
            setDetails(detailed)
        })
        .catch(err => console.log(err))
    },[detailId]);
    
    
    return (
        <div className="detail">
            <ItemDetail title={details.title} image={details.image} alt={details.title} 
            description={details.description} 
            count={details.rating? details.rating.count : 0} //Si no le pongo este ternario no me toma el valor count, por alguna razon
            price={details.price} init={initialCounter}/>
            
        </div>
    )
}

export default ItemDetailContainer;
