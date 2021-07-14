import "./components/NavigationBar/NavBar/NavBar.css";
import Navigation from "./components/NavigationBar/NavBar/NavBar";
import RouteComponent from "./components/RouteComponent/RouteComponent";
import { BrowserRouter } from "react-router-dom";
import CartContext from "./context/CartContext/CartContext";


function App() {
  return (
      <CartContext>
        <BrowserRouter>
          <Navigation />
          <RouteComponent />
        </BrowserRouter>
      </CartContext>
  );
}

export default App;
