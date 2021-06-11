import "./components/NavBar/NavBar.css";
import Navigation from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



//Notes: Just need to add responsiveness to the product grid (nice to have)
//Missing product description

function App() {
  

  return (
    <div>
      <Navigation />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
