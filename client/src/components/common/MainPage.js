import React from "react";
import Home from "../home/Home";
import About from "../about/About";
import Definitions from "../definitions/Definitions";
import Player from "../player/Player";
import Multipad from "../multipad/Multipad";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


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
        <Footer />
      </div>
    </Router>
  );
}
export default MainPage;
