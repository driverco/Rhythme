import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

export const Navbar: React.FC = () => {
  const {t, i18n} = useTranslation();
  const countryLang =() => {
    switch(i18n.language){
     case "en": return "US";
     case "es": return "CO";
    }   
 };
 const changeLangCountry =(country: String) => {
  switch(country){
   case "US": i18n.changeLanguage('en');break;
   case "CO": i18n.changeLanguage('es');break;
  }   
};

  return (
  <nav>
    <div className="nav-wrapper orange darken-4 px1">
      <NavLink to="/" className="brand-logo ">
        <div className="row">
          <div className="col s3 ">
            <img  className="logoImg" src={process.env.PUBLIC_URL+"/img/Rhythme.svg"} alt="Logo" width="50px" /> 
          </div>
          <div className="col s4">
            Rhyhtme!
          </div>
        </div>
      </NavLink>


      <ul className="right hide-on-med-and-down ">

      <li cy-data="home-nav-link ">
        <div>
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
      </li>

        <li cy-data="home-nav-link ">

          <NavLink  to="/">{t('navbar.home')}</NavLink>
        </li>
        <li>
          <NavLink  to="/about"> {t('navbar.about')}</NavLink>
        </li>
      </ul>
    </div>
  </nav>
  
)
}
