import React from "react"
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import NavBar from "./component/NavBar"
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer"






const App = () =>{
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a Pulcuwines"/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
