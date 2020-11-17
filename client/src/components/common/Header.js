import React from "react";
import i18n from "../../i18n";
import ReactFlagsSelect from "react-flags-select";
import "react-flags-select/css/react-flags-select.css";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";
import { useTranslation } from "react-i18next";
import { NavLink, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPlayerTranslations } from "../../redux/actions/ControllerActions";


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



function Header() {
  const { t } = useTranslation(["menu", "player"]);
  const dispatch = useDispatch();

  const setPlayTrans = () => {
    var transl = {
      "ready": t("player:ready"),
      "results": t("player:results"),
      "perfecthits": t("player:perfecthits"),
      "goodhits": t("player:goodhits"),
      "regularhits": t("player:regularhits"),
      "misses": t("player:misses"),
      "fails": t("player:fails")
    };
    dispatch(setPlayerTranslations(transl));
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
        i18n.changeLanguage("es");
        break;
    }
    setPlayTrans();

    console.log();
  };

  setPlayTrans();


  return (
    <Navbar expand="lg" className="navbar-custom fixed-top ">
      <Navbar.Brand ><Link to="/" className="navBrand"><img src="../images/Rhythme.svg" className="brandLogo" alt="Rhythme" /> RHYTHME!</Link></Navbar.Brand>


      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
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
          <NavLink to="/practiceSelect" id="practice" className="buttonMenu" >{t("practice")}</NavLink>
          <NavLink to="/definitions" id="definitions" className="buttonMenu">{t("definitions")}</NavLink>
          <NavLink to="/multipad" id="multipad" className="buttonMenu">{t("multipad")}</NavLink>
          <NavLink to="/about" id="about" className="buttonMenu">{t("about")}</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default Header;