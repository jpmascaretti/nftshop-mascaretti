import "./components/NavigationBar/NavBar/NavBar.css";
import Navigation from "./components/NavigationBar/NavBar/NavBar";
import RouteComponent from "./components/RouteComponent/RouteComponent";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <RouteComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
