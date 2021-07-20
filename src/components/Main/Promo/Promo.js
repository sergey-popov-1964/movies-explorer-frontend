import React from 'react';
import './Promo.css';
import '../../App/App.css';
import logoDiploma from "../../../images/diplom_logo.svg";
import {Link} from "react-router-dom";
import NavTab from "../NavTab/NavTab";

function Promo() {

  return (
    <div className="block promo">
      {/*<div className="promo__head">*/}
      {/*  <img src={logoDiploma} alt="Логотип" className="promo__logo promo__img"/>*/}
      {/*  <ul className="promo__list">*/}
      {/*    <li className="promo__item">*/}
      {/*      <Link className='promo__link promo__link_register' to="/signup">Регистрация</Link>*/}
      {/*    </li>*/}
      {/*    <li className="promo__item">*/}
      {/*      <Link className='promo__link promo__link_login' to="/signin">Войти</Link>*/}
      {/*    </li>*/}
      {/*  </ul>*/}
      {/*</div>*/}
      <div className="promo__main">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <NavTab/>
      </div>
    </div>
  )
}

export default Promo;
