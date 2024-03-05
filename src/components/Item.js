import React from 'react'
import { Link } from 'react-router-dom';
import ItemCounter from './ItemCounter';
import "../styles/components/Item.css"


const Item = ({item, initial, stock}) => {



    return (
        <div className="Item">
            <h1>{item.title}</h1>
            <img src={item.image} alt={item.description}/>
            <h2>
                ${item.price}
            </h2>
            <button onClick={() => console.log("itemId es: ", item.id)}>
                <Link to={`/detail/${item.id}`}>
                    View details
                </Link>
            </button>
            <ItemCounter init={initial} stock={stock} item={item}/>
        </div>
    )
}

export default Item;
