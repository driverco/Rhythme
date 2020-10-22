import React from "react";
import Home from "../home/Home";
import About from "../about/About";
import Definitions from "../definitions/Definitions";
import Player from "../player/Player";
import Multipad from "../multipad/Multipad";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Team from "../about/Team";
import Project from "../about/Project";
import PlayerSelect from "../player/PlayerSelect"
import UserManual from "../player/UserManual"


function MainPage() {

  return (
    <Router>
      <Header />
      <div className="contentBody">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/practice" component={Player} />
          <Route path="/practiceSelect" component={PlayerSelect} />
          <Route path="/multipad" component={Multipad} />
          <Route path="/definitions" component={Definitions} />
          <Route path="/team" component={Team} />
          <Route path="/project" component={Project} />
          <Route path="/userManual" component={UserManual} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default MainPage;
