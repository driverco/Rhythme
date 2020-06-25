import React from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Definitions from "../Definitions/Definitions";
import Player from "../Player/Player";
import Multipad from "../Multipad/Multipad";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";


function MainPage() {

  return (

    <Router>
      <Header />
      <div className="contentBody">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/player" component={Player} />
          <Route path="/multipad" component={Multipad} />
          <Route path="/definitions" component={Definitions} />
        </Switch>
      </div>
    </Router>
  );
}
export default MainPage;
