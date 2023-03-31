import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogDetails from "./Components/BlogDetails";
import Create from "./Components/Create";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path={'/'}>
            <Home />
          </Route>
          <Route path={'/create'}>
            <Create />
          </Route>
          <Route path={'/blog/:id'}>
            <BlogDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
