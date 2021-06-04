import './components/NavBar/NavBar.css'
import Navigation from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

//Notes: ask how to return a number to log it in console - child to parent communication via callback

function App() {

  //onAdd is just a placeholder callback fx
  function onAdd() {
    console.log("Added to Cart")
}


  return (
    <div>
      <Navigation/>
      <ItemListContainer greet="Welcome to the NFT Shop"></ItemListContainer>
      <ItemCount onAdd={onAdd} stock={5} initial={1}/>
    </div>
  );
}

export default App;
