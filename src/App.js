import React from "react"
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import NavBar from "./component/NavBar"
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./component/Cart/Cart"



const App = () =>{
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element= {<ItemListContainer greeting="Bienvenidos a Pulcuwines" />} />
        <Route exact path='/categoria' element={<ItemListContainer />} />
        <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />} />
        <Route exact path='/detalle/:detalleId' element={<ItemDetailContainer />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
