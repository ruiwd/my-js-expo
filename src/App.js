import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import DrumKit from "./components/DrumKit";
import Clock from "./components/Clock";
import Gallery from "./components/Gallery";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/my-js-expo" exact component={Home} />
          <Route path="/DrumKit" exact component={DrumKit} />
          <Route path="/Clock" exact component={Clock} />
          <Route path="/Gallery" exact component={Gallery} />
        </Switch>
      </Router>
    );
  }
}

export default App;
