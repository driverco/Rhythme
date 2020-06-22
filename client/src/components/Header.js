import React, { Component } from "react";
import MenuItem from "./MenuItem";
import ReactFlagsSelect from "react-flags-select";
import "react-flags-select/css/react-flags-select.css";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../components/Home';
import About from '../components/About';
import Definitions from '../components/Definitions';
import Player from '../components/Player';

function Header() {
  const { t, i18n } = useTranslation();
  return (
    <div className="header">
      <div class="headerBackground">
        <div className="App-header">
          <div className="HeaderTitle">Rhythme</div>
          <div class="menuContainer">
            <Router>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/player">
                  <Player />
                </Route>
                <Route path="/definitions">
                  <Definitions />
                </Route>
              </Switch>
              <MenuItem loc="/" text={t("menu.home")} id="home" />
              <MenuItem loc="player" text={t("menu.player")} id="player" />
              <MenuItem
                loc="definitions"
                text={t("menu.definitions")}
                id="definitions"
              />
              <MenuItem loc="about" text={t("menu.about")} id="aboutus" />
            </Router>
          </div>
          <ReactFlagsSelect
            countries={["US", "CO"]}
            customLabels={{ US: "EN", CO: "ES" }}
            placeholder={countryLang()}
            defaultCountry={countryLang()}
            showSelectedLabel={false}
            showOptionLabel={true}
            onSelect={changeLangCountry}
            selectedSize={14}
            optionsSize={14}
            className="flagsList"
          />
        </div>
      </div>
    </div>
  );
}
const countryLang = () => {
  switch (i18n.language) {
    case "en":
      return "US";
    case "es":
      return "CO";
  }
};

const changeLangCountry = (country) => {
  switch (country) {
    case "US":
      i18n.changeLanguage("en");
      break;
    case "CO":
      i18n.changeLanguage("es");
      break;
  }
};

export default Header;
