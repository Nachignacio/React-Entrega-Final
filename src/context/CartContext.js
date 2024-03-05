import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}){

    const [cart, setCart] = useState([]);


    function isInCart(productId){
        let foundItem = cart.find((prod) => prod.id === productId);
        return !!foundItem;
    }

    function addProduct(item, cant, stock){
        if(isInCart(item.id)){
            let newCart = cart.map((element) => {
            if(element.id === item.id){
                if((element.cant + cant) < stock)
                    return {...element, cant: element.cant + cant};
                else
                    return {...element, cant: element.cant + (stock - element.cant)} //Hago esto para que la cantidad sumada no supere el stock
            }
            return element;
            });
            setCart(newCart);
        }
        else{
            setCart((prev) => [...prev, {...item, cant}]);
        }
    }

    function removeItem(itemId){
        let cartNuevo = cart.filter((prod) => prod.id !== itemId);
        setCart(cartNuevo);
    }

    function clearCart(){
        setCart([]);
    }   
    return(
        <CartContext.Provider value={{cart, addProduct, clearCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}