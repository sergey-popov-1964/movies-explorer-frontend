import React from "react";
import logoDiploma from "../../images/diplom_logo.svg";
import {Link} from "react-router-dom";

function Header(props) {
  return (
    <header className="header page__header">
      <a href="#" target="_self" className="header__logo">
        <img src={logoDiploma} alt="Логотип" className="header__img"/>
      </a>
      {/*<ul className='header__reg'>*/}
      {/*  <li className='header__text'>{props.email}</li>*/}
      {/*  <li className='header__text'>*/}
      {/*    <Link onClick={props.exit} className='header__link' to={props.link}>{props.text}</Link>*/}
      {/*  </li>*/}
      {/*</ul>*/}
    </header>
  )
}

export default Header;
