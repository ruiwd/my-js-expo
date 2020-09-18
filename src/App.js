import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import DrumKit from "./components/DrumKit.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/drumKit" exact component={DrumKit} />
        </Switch>
      </Router>
    );
  }
}

export default App;
