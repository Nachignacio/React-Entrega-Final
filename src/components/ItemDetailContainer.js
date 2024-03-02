import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import "../styles/components/ItemDetailContainer.css"

const ItemDetailContainer = () => {
    
    const [details, setDetails] = useState({});

    const {detailId} = useParams();

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
            <h1>{details.title}</h1>
            <img src={details.image} alt={details.title}/>
            <p>{details.description}</p>
            <button>
                <Link to="/">
                    Back
                </Link>
            </button>
        </div>
    )
}

export default ItemDetailContainer;
