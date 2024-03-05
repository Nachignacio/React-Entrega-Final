import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import "../styles/components/ItemListContainer.css";



function ItemListContainer(url){

    const initial=1;
    
    const [products, setProducts] = useState([]);

    const {categoryId} = useParams();

    useEffect(()=>{
        fetch('/Item1.json')
        .then(res => res.json())
        .then(re => {
        let storedProducts = categoryId ? re.filter((product) => product.category === categoryId) : re;
            setProducts(storedProducts)
        })
        .catch(err => console.log(err))
    },[categoryId]);
    

    return(
        <div className="catalog">
            {
                products?.map(el => <Item item={el} key={el.id} initial={initial}/>)
            }
        </div>
    )
}

export default ItemListContainer;