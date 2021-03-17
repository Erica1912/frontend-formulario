import useFetch from "./hooks/FetcHook";
import Formulario from "./components/Formulario";
import User from "./components/User";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeView from "./views/HomeView";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={User} exact path="/components/:id">          
        </Route>
        <Route component={HomeView} exact path="/"></Route>
      </Switch>
    </Router>
  );
};
export default App;
