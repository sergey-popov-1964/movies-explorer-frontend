import React, {useEffect, useState} from 'react';
import './Main.css';
import '../App/App.css';
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import Portfolio from "./Portfolio/Portfolio";
import AboutMe from "./AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Main({isLoggedIn}) {

  const [isFilms, setIsFilms] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isAccount, setIsAccount] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      setIsFilms(true);
      setIsLogin(false);
      setIsAccount(true)
    } else {
      setIsFilms(false);
      setIsLogin(true);
      setIsAccount(false)
    }
  }, [])

  return (
    <div className="page">
      <div className="block">
        <Header isFilms={isFilms}
                isLogin={isLogin}
                isAccount={isAccount}
        />
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio/>
        {/*<Footer/>*/}
      </div>
    </div>
  )
}

export default Main;
