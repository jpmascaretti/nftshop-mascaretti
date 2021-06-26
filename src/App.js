import "./components/NavigationBar/NavBar/NavBar.css";
import Navigation from "./components/NavigationBar/NavBar/NavBar";
import RouteComponent from "./components/RouteComponent/RouteComponent";
import { BrowserRouter } from "react-router-dom";
import CartContext from "./components/CartContext/CartContext";

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
