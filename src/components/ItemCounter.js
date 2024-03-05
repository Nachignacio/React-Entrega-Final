import { useContext, useEffect, useState } from "react";
import "../styles/components/ItemCounter.css";
import { Link } from "react-router-dom";
import {CartContext} from "../context/CartContext";


function ItemCounter({init, stock, item}){

    const [counter, setCounter] = useState(init);

    const [cantComprada, setCantComprada] = useState(0);

    const[addedCart, setAddedCart] = useState (0);

    const [cantAgregada, setCantAgregada] = useState(0);

    const {cart, addProduct} = useContext(CartContext);



    function handleOnAdd(cant){
        console.log("Item ID es: ", item.id);
        addProduct(item, cant, stock);
        setCantComprada(cant);
        console.log("El cart es: ", cart);
    }

    /*useEffect(() => {
        setAddedCart(addedCart + cantidadComprada)
    },[cantidadComprada])
*/
    /*function onAdd(cantidad){
        setCantidadComprada(cantidad);
    }*/

    useEffect(() => {
        const filteredProduct = cart.find((element) => element.id === item.id);
        if (filteredProduct) { /*Chequeo si existe filteredProduct */
            setAddedCart(filteredProduct.cant);
        } else {
            setAddedCart(0);
        }
    }, [item.id, cart]); // Le pongo estas dependencias para que solo se actualice cuando cambio el cart del item.id

    

    function handleSum(evt){
        if(counter < stock)
            setCounter(prevCounter => prevCounter + 1);
    }

    function handleRest(evt){
        if(counter > 0)
            setCounter(prevCounter => prevCounter - 1);
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
                counter > 0 ? (
                    <div className="cartButtons">
                        <button>
                            <Link to="/cart" >
                                Go to Cart
                            </Link>
                        </button>
                        <br/>
                        <button  onClick={() => handleOnAdd(counter)} disabled={addedCart >= stock}> 
                        Add to Cart
                        </button>
                    </div>
                ) : (
                    <button onClick={() => handleOnAdd(counter)} disabled={addedCart >= stock}>
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