import { Link } from "react-router-dom";
import ItemQuantitySelector from "./ItemQuantitySelector";
import "../styles/components/ItemDetail.css"
import Description from "./Description";



function ItemDetail({item, init}){


    return(
        <div className="ItemDetail">
            <h1>{item.Nombre}</h1>
            <img src={item.Imagen} alt={item.Nombre}/>
            <h2>${item.Precio}</h2>
            <Description item={item}/>
            <ItemQuantitySelector init={init} item={item}/>
            <Link to="/" className="link">
                <button>
                    Back
                </button>
            </Link>
            
        </div>
    )
}

export default ItemDetail;