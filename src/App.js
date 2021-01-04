import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarMenu from "./component/NavBarMenu";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { CartProvider } from "./contexts/Cart";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBarMenu userName="Tue Anh Truong" className="navbar" />
          <Route path="/" exact component={Home} />
          <Route path="/products/" component={Products} />
          <Route path="/carts/" component={Cart} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
