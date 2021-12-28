import React from "react"
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import Navbar from "./component/Navbar"
import ItemCount from "./component/ItemCount";


const App = () =>{
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a Pulcuwines"/>
      <ItemCount min={1} max={20} />
    </div>
  );
}

export default App;
