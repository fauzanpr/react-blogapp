import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path={'/'}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
