import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Brief({ordenCompra}){

    const {cart} = useContext(CartContext);

    return(
        <div>
            Su orden de compra es:

            {cart.map((el) => (
            <div>
                <p>Producto: {el.Nombre}</p>
                <p>Cantidad: {el.cant}</p>
            </div>))}
            <span>
                Orden de compra numero: {ordenCompra}
            </span>
        </div>
    )
}

export default Brief;