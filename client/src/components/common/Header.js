import React from "react";
import i18n from "../../i18n";
import ReactFlagsSelect from "react-flags-select";
import "react-flags-select/css/react-flags-select.css";
import { Navbar, Nav } from "react-bootstrap";
import "./header.css";
import { useTranslation } from "react-i18next";
import { NavLink, Link } from "react-router-dom";



function Header() {
  const { t } = useTranslation("menu");
  return (
    <Navbar  expand="lg" className="navbar-custom fixed-top ">
      <Navbar.Brand ><Link to="/" className="navBrand">RHYTHME!</Link></Navbar.Brand>


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
          <NavLink to="player" id="player" className="buttonMenu" >{t("player")}</NavLink>
          <NavLink to="definitions" id="definitions" className="buttonMenu">{t("definitions")}</NavLink>
          <NavLink to="multipad" id="multipad" className="buttonMenu">{t("multipad")}</NavLink>
          <NavLink to="about" id="about" className="buttonMenu">{t("about")}</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

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