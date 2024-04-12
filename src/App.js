import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NewCharacter from "./components/NewCharacter";
import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/new" component={NewCharacter} />
  </Switch>
);
export default App;
