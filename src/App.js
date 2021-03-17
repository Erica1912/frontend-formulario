import useFetch from "./hooks/FetcHook";
import Formulario from "./components/Formulario";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeView from "./views/HomeView";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={HomeView} exact path="/" />
      </Switch>
    </Router>
  );
};
export default App;
