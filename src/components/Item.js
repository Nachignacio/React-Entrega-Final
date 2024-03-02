import React from 'react'
import { Link } from 'react-router-dom';



const Item = ({item}) => {
    return (
        <div className="Item">
            <h1>{item.title}</h1>
            <img src={item.image} alt={item.description}/>
            <button>
                <Link to={`/detail/${item.id}`}>
                    View details
                </Link>
            </button>
        </div>
    )
}

export default Item;
