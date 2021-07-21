import React from "react";
import logoDiploma from "../../images/diplom_logo.svg";
import "../App/App.css"
import './Header.css'
import {Link} from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      {/*<div className="header__head">*/}
      <Link to="/">
        <img src={logoDiploma} alt="Логотип" className="header__logo header__img"/>
      </Link>
        {/*<img src={logoDiploma} alt="Логотип" className="header__logo header__img"/>*/}
      <ul className={ props.isFilms ? "header__film-list" : "header__film-list_nonactive"}>
        <li className="header__film-item">
          <Link className='header__link header__link_register' to="/movies">Фильмы</Link>
        </li>
        <li className="header__film-item">
          <Link className='header__link header__link_register' to="/saved-movies">Сохранённые фильмы</Link>
        </li>
      </ul>
        <ul className= { props.isLogin ? "header__login-list" : "header__login-list_nonactive" } >
          <li className="header__login-item">
            <Link className='header__link header__link_register' to="/signup">Регистрация</Link>
          </li>
          <li className="header__login-item">
            <Link className='header__link header__link_login' to="/signin">Войти</Link>
          </li>
        </ul>
      <div className={ props.isAccount ? "header__account" : "header__account_nonactive" }>
        {/*<Link className='header__link header__link_login' to="/signin">Войти</Link>*/}
        <Link className='header__link header__link_account' to="/profile">Аккаунт</Link>
      </div>


      {/*</div>*/}
    </header>
  )
}

export default Header;
