import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarMenu from "./component/NavBarMenu";
import Home from "./pages/Home";
import LoaderContainer from "./component/LoaderContrainer";
import Modals from "./component/Modals";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBarMenu userName="Tue Anh Truong" className="navbar" />
        <Route path="/" exact component={Home} />
        <LoaderContainer />
        <Modals />
      </div>
    </Router>
  );
}

export default App;
