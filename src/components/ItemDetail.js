import { Link } from "react-router-dom";
import ItemCounter from "./ItemCounter";
import "../styles/components/ItemDetail.css"



function ItemDetail({item, init}){


    return(
        <div className="ItemDetail">
            <h1>{item.Nombre}</h1>
            <img src={item.Imagen} alt={item.Nombre}/>
            <h2>${item.Precio}</h2>
            <p>{item.Detalle}</p>
            <ItemCounter init={init} item={item}/>
            <button>
                <Link to="/" className="link">
                    Back
                </Link>
            </button>
        </div>
    )
}

export default ItemDetail;