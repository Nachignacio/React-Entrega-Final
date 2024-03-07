import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({children}){

    const [cart, setCart] = useState([]);

    const [quantity, setQuantity] = useState(0);


    function isInCart(productId){
        let foundItem = cart.find((prod) => prod.ID === productId);
        return !!foundItem; //Esto convierte al undefined en un booleano falso
    }

    function addProduct(item, cant){
        if(isInCart(item.ID)){
            let newCart = cart.map((element) => {
            if(element.ID === item.ID){
                if((element.cant + cant) < item.Stock)
                    return {...element, cant: element.cant + cant};
                else
                    return {...element, cant: element.cant + (item.Stock - element.cant)} //Hago esto para que la cantidad sumada no supere el stock
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
        let cartNuevo = cart.filter((prod) => prod.ID !== itemId);
        setCart(cartNuevo);
    }

    function clearCart(){
        setCart([]);
    }   
    
    
    
    useEffect(()=>{
    let totalQuantity = 0;
    cart.forEach((prod) => {
        totalQuantity += prod.cant;
    });
    setQuantity(totalQuantity);
},[cart])
    

    return(
        <CartContext.Provider value={{cart, addProduct, clearCart, removeItem, quantity}}>
            {children}
        </CartContext.Provider>
    )
}