import React from 'react';
import './NavTab.css';

function NavTab() {

  return (
    <ul className="nav">
      <li className="nav__item">
        <button type="button"
                className="nav__button">
          О проекте
        </button>
      </li>
      <li className="nav__item">
        <button type="button"
                className="nav__button">
          Технологии
        </button>
      </li>
      <li className="nav__item">
        <button type="button"
                className="nav__button">
          Студент
        </button>
      </li>
    </ul>
  )
}

export default NavTab;
