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

  let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

  console.log(scrollHeight)

  let scrollWidth = document.documentElement.clientWidth;

  console.log(scrollWidth)

  return (
    <div className="main">
      <Header/>
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
