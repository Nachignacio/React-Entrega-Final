import React from 'react'
import { Link } from 'react-router-dom';
import ItemCounter from './ItemCounter';



const Item = ({item, initial}) => {


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
            <ItemCounter init={initial} stock={item.rating.count} onAdd={onAdd}/>
        </div>
    )
}

export default Item;
