import React from "react"
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import Navbar from "./component/Navbar"


const App = () =>{
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a Pulcuwines"/>
    </div>
  );
}

export default App;
