import React from 'react';
import './NavTab.css';
import {Link} from "react-router-dom";

function NavTab() {

  return (
    <ul className="nav">
      <li className="nav__item">
        <a href="#about">
          <button type="button"
                  className="nav__button">
            О проекте
          </button>
        </a>
      </li>
      <li className="nav__item">
        <a href="#techs">
          <button type="button"
                  className="nav__button">
            Технологии
          </button>
        </a>
      </li>
      <li className="nav__item">
        <a href="#student">
          <button type="button"
                  className="nav__button">
            Студент
          </button>
        </a>
      </li>
    </ul>
  )
}

export default NavTab;
