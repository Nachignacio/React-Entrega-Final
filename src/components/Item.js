import React from 'react'
import { Link } from 'react-router-dom';
import ItemCounter from './ItemCounter';
import "../styles/components/Item.css"


const Item = ({item, initial, stock}) => {


    function onAdd(cantidad){
        console.log(cantidad);
    }

    return (
        <div className="Item">
            <h1>{item.title}</h1>
            <img src={item.image} alt={item.description}/>
            <h2>
                ${item.price}
            </h2>
            <button>
                <Link to={`/detail/${item.id}`}>
                    View details
                </Link>
            </button>
            <ItemCounter init={initial} stock={stock} item={item} onAdd={onAdd}/>
        </div>
    )
}

export default Item;
