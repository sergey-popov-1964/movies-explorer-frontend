import React from "react";
import logoDiploma from "../../images/diplom_logo.svg";
import "../App/App.css"
import './Header.css'
import {Link} from "react-router-dom";

function Header(props) {
  return (
    <header className="header block">
      <div className="header__head">
        <img src={logoDiploma} alt="Логотип" className="header__logo header__img"/>
        <ul className="header__list">
          <li className="header__item">
            <Link className='header__link header__link_register' to="/signup">Регистрация</Link>
          </li>
          <li className="header__item">
            <Link className='header__link header__link_login' to="/signin">Войти</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;
