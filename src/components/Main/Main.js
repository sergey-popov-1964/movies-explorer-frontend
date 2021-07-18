import React from 'react';
import './Main.css';
import '../App/App.css';
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "../Movies/Techs/Techs";
import AboutMe from "./Portfolio/AboutMe";
import Portfolio from "./AboutMe/Portfolio";
import Footer from "../Footer/Footer";

function Main() {

  return (
    <div className="main">
      <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
      <Footer/>
    </div>
  )
}

export default Main;
