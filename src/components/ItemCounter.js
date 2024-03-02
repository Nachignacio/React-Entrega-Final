import { useEffect, useState } from "react";
import "../styles/components/ItemCounter.css";
import { Link } from "react-router-dom";


function ItemCounter({init, stock, onAdd}){

    const [counter, setCounter] = useState(init);

    const[cantidadComprada, setCantidadComprada] = useState(0);

    const[addedCart, setAddedCart] = useState (0);

    useEffect(() => {
        setAddedCart(addedCart + cantidadComprada)
    },[cantidadComprada])

    function onAdd(cantidad){
        setCantidadComprada(cantidad);
    }

    function handleSum(evt){
        if(counter < stock)
            setCounter(counter + 1);
    }

    function handleRest(evt){
        if(counter > 0)
            setCounter(counter - 1);
    }

    return(
    <div className="ItemCounter">
        <div className="buttonsAddRest">
            <button onClick={handleSum} id="suma">
            +
            </button>
            {counter}
            <button onClick={handleRest} id="resta">
            -
            </button>
        </div>
        <span>
            <br/>Stock: {stock}
        </span>
        <div>
            {
                cantidadComprada > 0 ? (
                    <div className="cartButtons">
                        <button>
                            <Link to="/cart" >
                                Go to Cart
                            </Link>
                        </button>
                        <br/>
                        <button onClick={() => setCantidadComprada(counter)} disabled={!stock}>
                        Add to Cart
                        </button>
                    </div>
                ) : (
                    <button onClick={() => setCantidadComprada(counter)} disabled={!stock}>
                    Add to Cart
                    </button>
                )
            }   
        </div>
        <p id="added">
            Added to Cart: {addedCart}
        </p>
    </div>
    )
}

export default ItemCounter;