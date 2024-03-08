import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import Layout from "./pages/Layout";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App(){
    return(
        <div>
            <BrowserRouter>
                <CartProvider>
                    <Routes>
                        <Route path="/" element={<Layout/>} children={<RouteHandler/>}>
                            <Route index element={<ItemListContainer/>}/>
                            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                            <Route path="/detail/:detailId" element={<ItemDetailContainer/>}/>
                            <Route path="/cart" element={<Cart/>}/>
                            <Route path="/:checkout" element={<Checkout/>}/>
                        </Route>
                        <Route path="*" element={<h1>404 no encontrado</h1>}/>
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}

function RouteHandler() {
    const params = useParams();
    return <Layout params={params} />;
  }

export default App;