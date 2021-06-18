import "./components/NavBar/NavBar.css";
import Navigation from "./components/NavBar/NavBar";
import RouteComponent from "./components/RouteComponent/RouteComponent";

function App() {

  return (
    <div>
      <Navigation />
      <RouteComponent/>
      {/* <ItemDetailContainer/> */}
    </div>
  );
}

export default App;
