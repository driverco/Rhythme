import React, { Component } from "react";
import MenuItem from "./MenuItem";
import ReactFlagsSelect from "react-flags-select";
import "react-flags-select/css/react-flags-select.css";
import { useTranslation } from 'react-i18next';
import i18n from "../i18n";

function Header () {
    const { t, i18n } = useTranslation();
    return (
        <div className="header">
        <div class="headerBackground">
          <div className="App-header">
            <div className="HeaderTitle">Rhythme</div>
            <div class="menuContainer">
              
            <MenuItem text={t("menu.home")} id="home" />
            <MenuItem text={t("menu.player")} id="player" />
            <MenuItem text={t("menu.definitions")} id="definitions" />
            <MenuItem text={t("menu.about")} id="aboutus" />
            </div>
            <ReactFlagsSelect
            countries={["US", "CO"]} 
            customLabels={{"US": "EN","CO": "ES"}} 
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