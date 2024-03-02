const products=[];

export const getProducts =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) =>{
    return new Promise ((resolve) => {
        resolve(products.find( prod => prod.id === productId))
    }, 500)
}

export const getProductByCategory = categoryId) =>{
    return new Promise ((resolve) => {
        resolve(products.filter( prod => prod.category === caegoryId))
    }, 500)
}

//Esto lo vamos a incovar en ItemListContainer para que nos busque con el parametro
// que le llegue todos los productos filtrados