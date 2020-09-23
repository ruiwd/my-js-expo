import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home.js";
import DrumKit from "./components/DrumKit.js";
import Clock from "./components/Clock.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/my-js-expo" exact component={Home} />
          <Route path="/DrumKit" exact component={DrumKit} />
          <Route path="/Clock" exact component={Clock} />
        </Switch>
      </Router>
    );
  }
}

export default App;
