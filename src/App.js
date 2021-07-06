import "./components/NavigationBar/NavBar/NavBar.css";
import Navigation from "./components/NavigationBar/NavBar/NavBar";
import RouteComponent from "./components/RouteComponent/RouteComponent";
import { BrowserRouter } from "react-router-dom";
import CartContext from "./components/Context/CartContext/CartContext";


//Notes: need to add not found page

function App() {
  return (
    <div>
      <CartContext>
        <BrowserRouter>
          <Navigation />
          <RouteComponent />
        </BrowserRouter>
      </CartContext>
    </div>
  );
}

export default App;
