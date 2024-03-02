import {BrowserRouter, Route, Routes} from "react-router-dom";

import Layout from "./pages/Layout";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App(){

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<ItemListContainer/>}/>
                        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                        <Route path="/detail/:detailId" element={<ItemDetailContainer/>}/>
                    </Route>
                    <Route path="*" element={<h1>404 no encontrado</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;