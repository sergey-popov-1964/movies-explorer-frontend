import React from 'react';
import './Main.css';
import '../App/App.css';
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import Portfolio from "./Portfolio/Portfolio";
import AboutMe from "./AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Main() {

  return (
    <div className="page">
      <div className="block">
        <Header isFilms={false}
                isLogin={true}
                isAccount={false}
        />
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio/>
        <Footer/>
      </div>
    </div>
  )
}

export default Main;
