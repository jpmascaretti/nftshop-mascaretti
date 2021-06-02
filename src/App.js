import './components/NavBar/NavBar.css'
import Navigation from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div>
      <Navigation/>
      <ItemListContainer greet="Welcome to the NFT Shop"></ItemListContainer>
    </div>
  );
}

export default App;
