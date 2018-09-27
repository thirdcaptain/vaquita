import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import NotFound from "./components/NotFound";
import Repos from "./components/Repos";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar branding="Github Goodies" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Repos} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
