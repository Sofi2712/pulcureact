import React from "react"
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import NavBar from "./component/NavBar"
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./component/Cart/Cart"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContextProvider } from './context/CartContext';
import OrderProcessed from "./component/OrderProcessed/OrderProcessed";
import CheckOut from "./component/CheckOut/CheckOut";



const App = () =>{
  return (
    <div className="App">
          <CartContextProvider>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element= {<ItemListContainer greeting="Bienvenidos a Pulcuwines" />} />
        <Route exact path='/categoria' element={<ItemListContainer />} />
        <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />} />
        <Route exact path='/Item/:detalleId' element={<ItemDetailContainer />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/cart/checkOut' element={<CheckOut />} />
        <Route exact path='/cart/orderProcessed' element={<OrderProcessed />} />
      </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
