import { Link } from "react-router-dom";

function AddItemButton({item, counter, handleOnAdd, addedCart}){
    return(
        <div>
            {
                counter > 0 ? (
                    <div className="cartButtons">
                        <button id="cartButton">
                            <Link to="/cart" className="cartLink">
                                Go to Cart
                            </Link>
                        </button>
                        <br/>
                        <button  onClick={() => handleOnAdd(counter)} disabled={addedCart >= item.Stock}> 
                        Add to Cart
                        </button>
                    </div>
                ) : (
                    <Link to="/cart" className="cartLink">
                        <button id="cartButton">
                            Go to Cart
                        </button>
                    </Link>
                )
            }   
        </div>
    )
}

export default AddItemButton;