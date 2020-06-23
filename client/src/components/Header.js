import React from "react";
import MenuItem from "./MenuItem";
import ReactFlagsSelect from "react-flags-select";
import "react-flags-select/css/react-flags-select.css";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Definitions from "./Definitions";
import Player from "./Player";
import Multipad from "./Multipad";

function Header() {
  const { t } = useTranslation();
  return (
    <div className="header">
      <div class="headerBackground">
        <div className="App-header">
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
          <div className="HeaderTitle">Rhythme</div>
          <Router>
            <div class="menuContainer">
              <MenuItem loc="/" text={t("menu.home")} id="home" />
              <MenuItem
                loc="definitions"
                text={t("menu.definitions")}
                id="definitions"
              />
              <MenuItem
                loc="multipad"
                text={t("menu.multipad")}
                id="multipad"
              />
              <MenuItem loc="player" text={t("menu.player")} id="player" />
              <MenuItem loc="about" text={t("menu.about")} id="aboutus" />
            </div>
            <div className="content">
              {" "}
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/player" component={Player} />
                <Route path="/multipad" component={Multipad} />
                <Route path="/definitions" component={Definitions} />
              </Switch>
            </div>
          </Router>
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
    default:
      return "US";
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
    default:
      i18n.changeLanguage("en");
      break;
  }
};

export default Header;
