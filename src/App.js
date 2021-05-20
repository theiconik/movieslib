import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Watchlist from "./components/Watchlist";
import Add from "./components/Add";
import Watched from "./components/Watched";
import "./lib/font-awesome/css/all.min.css";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Watchlist />
          </Route>

          <Route path="/add">
            <Add />
          </Route>

          <Route path="/watched">
            <Watched />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
