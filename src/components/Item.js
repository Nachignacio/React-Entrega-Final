import React from 'react'
import { Link } from 'react-router-dom';
import ItemQuantitySelector from './ItemQuantitySelector';
import "../styles/components/Item.css"


const Item = ({item, initial}) => {



    return (
        <div className="Item">
            <h1>{item.Nombre}</h1>
            <img src={item.Imagen} alt={item.Nombre}/>
            <h2>
                ${item.Precio}
            </h2>
            <Link to={`/detail/${item.ID}`} className="viewDetail">
                <button onClick={() => console.log("itemId es: ", item.ID)}>
                    View details
                </button>
            </Link>
            <ItemQuantitySelector init={initial} item={item}/>
        </div>
    )
}

export default Item;
