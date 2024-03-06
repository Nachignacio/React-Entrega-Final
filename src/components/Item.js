import React from 'react'
import { Link } from 'react-router-dom';
import ItemCounter from './ItemCounter';
import "../styles/components/Item.css"


const Item = ({item, initial}) => {



    return (
        <div className="Item">
            <h1>{item.title}</h1>
            <img src={item.image} alt={item.description}/>
            <h2>
                ${item.price}
            </h2>
            <Link to={`/detail/${item.id}`} className="viewDetail">
                <button onClick={() => console.log("itemId es: ", item.id)}>
                    View details
                </button>
            </Link>
            <ItemCounter init={initial} item={item}/>
        </div>
    )
}

export default Item;
