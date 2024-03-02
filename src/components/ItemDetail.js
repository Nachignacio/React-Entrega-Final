import { Link } from "react-router-dom";
import ItemCounter from "./ItemCounter";
import "../styles/components/ItemDetail.css"

function ItemDetail({title, image, alt, description, count, price, init, onAdd, cantidadComprada}){

    return(
        <div className="ItemDetail">
            <h1>{title}</h1>
            <img src={image} alt={alt}/>
            <h2>${price}</h2>
            <p>{description}</p>
            <ItemCounter init={init} stock={count} onAdd={onAdd} cantidadComprada={cantidadComprada}/>
            <button>
                <Link to="/" className="link">
                    Back
                </Link>
            </button>

            
        </div>
    )
}

export default ItemDetail;