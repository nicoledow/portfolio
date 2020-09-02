import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import About from "./Containers/About";
import Portfolio from "./Containers/Portfolio";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Header />
          <Navbar />
          <About />
        </Route>

        <Route path="/portfolio">
          <Header />
          <Navbar />
          <Portfolio />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
