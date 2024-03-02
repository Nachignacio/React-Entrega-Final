import "../styles/components/ItemListContainer.css";

function Product({nombre, image, descripcion}){
    
    return(
        <section>
            <div className = "Product">
                <h2 className = "ItemTitle">
                    {nombre}
                </h2>
                <img src={image} alt="piano"/>
                <p>
                    {descripcion}
                </p>
            </div>
        </section>
    )
}

export default Product;