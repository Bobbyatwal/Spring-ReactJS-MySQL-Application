import "./App.css";
import ListBeerComponent from "./components/ListBeerComponent.jsx";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBeerComponent from "./components/CreateBeerComponent";
  /* React Router is amazing for client side routing */

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListBeerComponent}></Route>
            <Route path="/beers" component={ListBeerComponent}></Route>
            <Route path="/add-beer/:id" component={CreateBeerComponent}></Route>
            <ListBeerComponent />
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
