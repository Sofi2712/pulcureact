import React from "react"
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import NavBar from "./component/NavBar"




const App = () =>{
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a Pulcuwines"/>
    </div>
  );
}

export default App;
