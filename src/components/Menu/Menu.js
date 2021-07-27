import React, {useState} from "react";
import "./Menu.css"
import {NavLink} from "react-router-dom";

function Menu(props) {

  return (
    <div className={props.IsOpen ? "menu__overlay menu__overlay_active" : "menu__overlay"}>
      <form action="#"
            className={props.IsOpen ? "menu menu_active" : "menu"}>
        <div className="menu__close">
          <button onClick={props.closeMenu}
                  className="menu__button">
          </button>
        </div>
        <ul className="menu__list">
          <li className="menu__item">
            <NavLink to="/" className="menu__link">Главная</NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/movies"
                     className={props.currentSection === "movies" ? "menu__link menu__link_active" : "menu__link"}>Фильмы</NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/saved-movies"
                     className={props.currentSection === "saved-movies" ? "menu__link menu__link_active" : "menu__link"}>Сохранённые
              фильмы</NavLink>
          </li>
        </ul>
        <NavLink to="/profile"
                 className='menu__link_account'>Аккаунт</NavLink>
      </form>
    </div>
  )
}

export default Menu;
