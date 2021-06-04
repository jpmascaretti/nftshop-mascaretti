import './components/NavBar/NavBar.css'
import Navigation from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div>
      <Navigation/>
      <ItemListContainer greet="Welcome to the NFT Shop"></ItemListContainer>
      <ItemCount stock={5} initial={1}/>
    </div>
  );
}

export default App;
