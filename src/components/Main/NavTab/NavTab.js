import React from 'react';
import './NavTab.css';
import {Link} from "react-router-dom";

function NavTab() {

  return (
    <ul className="nav">
      <li className="nav__item">
        <a href="#about">О проекте</a>
        {/*<button type="button"*/}
        {/*        className="nav__button">*/}
        {/*  О проекте*/}
        {/*</button>*/}
      </li>
      <li className="nav__item">
        {/*<Link to="/#tc">111111</Link>*/}
        <a href="#techs">Технологии</a>
        {/*<Link to="/#section-1">Технологии</Link>*/}
        {/*<button type="button"*/}
        {/*        className="nav__button">*/}
        {/*  Технологии*/}
        {/*</button>*/}
      </li>
      <li className="nav__item">
        <a href="#student">Студент</a>
        {/*<button type="button"*/}
        {/*        className="nav__button">*/}
        {/*  Студент*/}
        {/*</button>*/}
      </li>
    </ul>
  )
}

export default NavTab;
