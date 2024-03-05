import { Link } from "react-router-dom";
import ItemCounter from "./ItemCounter";
import "../styles/components/ItemDetail.css"



function ItemDetail({item, init}){


    return(
        <div className="ItemDetail">
            <h1>{item.title}</h1>
            <img src={item.image} alt={item.title}/>
            <h2>${item.price}</h2>
            <p>{item.description}</p>
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