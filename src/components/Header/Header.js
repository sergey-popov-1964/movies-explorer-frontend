import React from "react";
import logoDiploma from "../../images/diplom_logo.svg";
import "../App/App.css"
import './Header.css'
import {Link, NavLink} from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <Link to="/">
        <img src={logoDiploma} alt="Логотип" className="header__logo header__img"/>
      </Link>
      <ul className={props.isFilms ? "header__film-list" : "header__film-list_nonactive"}>
        <li className="header__film-item">
          <NavLink to="/movies" className='header__link header__link_register' activeClassName="header__link_active">Фильмы</NavLink>
        </li>
        <li className="header__film-item">
          <NavLink to="/saved-movies" className='header__link header__link_register' activeClassName="header__link_active">Сохранённые фильмы</NavLink>
        </li>
      </ul>
      <ul className={props.isLogin ? "header__login-list" : "header__login-list_nonactive"}>
        <li className="header__login-item">
          <Link className='header__link header__link_register' to="/signup">Регистрация</Link>
        </li>
        <li className="header__login-item">
          <Link className='header__link header__link_login' to="/signin">Войти</Link>
        </li>
      </ul>
      <div className={props.isAccount ? "header__account " : "header__account_nonactive"}>
        <Link className='header__link header__link_account' to="/profile">Аккаунт</Link>
      </div>
      <button type="button" className= {props.isFilms || props.isAccount ? "burger__button" : "burger__button_nonactive header__film-list_nonactive"}></button>

    </header>
  )
}

export default Header;
