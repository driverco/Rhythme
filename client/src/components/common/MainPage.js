import React from "react";
import Home from "../home/Home";
import About from "../about/About";
import Definitions from "../definitions/Definitions";
import Player from "../player/Player";
import Multipad from "../multipad/Multipad";
import ArduinoMultipad from "../multipad/ArduinoMultipad";
import KeyboardMultipad from "../multipad/KeyboardMultipad";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Team from "../about/Team";
import Project from "../about/Project";
import PlayerSelect from "../player/PlayerSelect";
import UserManual from "../player/UserManual";
import Def from "../definitions/Def";


function MainPage() {

  return (
    <Router>
      <Header />
      <div className="contentBody">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/practice" component={Player} />
          <Route exact path="/practiceSelect" component={PlayerSelect} />
          <Route exact path="/multipad" component={Multipad} />
          <Route exact path="/keyboardMultipad" component={KeyboardMultipad} />
          <Route exact path="/arduinoMultipad" component={ArduinoMultipad} />
          <Route exact path="/definitions" component={Definitions} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/userManual" component={UserManual} />
          <Route exact path="/def/:id" component={Def} />
          <Route exact path="/arduino/multipad.ino" ><Redirect to="/arduino/multipad.ino" /></Route> 
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default MainPage;
