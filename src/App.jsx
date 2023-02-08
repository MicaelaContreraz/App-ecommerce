import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import './App.css'

function App() {
  
  return (
    <div className="App"> 
   
      <NavBar/>
      <ItemListContainer greeting={"Products"}/>
    </div>
      
    
  );
};

export default App
