import React from 'react';
import './Promo.css';
import '../../App/App.css';
import logoDiploma from "../../../images/diplom_logo.svg";
import {Link} from "react-router-dom";

function Promo() {

  return (
    <div className="block promo">
      <div className="promo__head">
        {/*<a href="#" target="_self" className="promo__logo">*/}
          <img src={logoDiploma} alt="Логотип" className="promo__logo promo__img"/>
        {/*</a>*/}
        <ul className="promo__list">
          <li className="promo__item">
            <Link className='promo__link promo__link_register' to="/signup">Регистрация</Link>

            {/*<button type="button"*/}
            {/*        className="promo__button promo__button_register">*/}
            {/*  Регистрация*/}
            {/*</button>*/}
          </li>
          <li className="promo__item">
            <Link className='promo__link promo__link_login' to="/signin">Войти</Link>

            {/*<button type="button"*/}
            {/*        className="promo__button promo__button_login">*/}
            {/*  Войти*/}
            {/*</button>*/}
          </li>
        </ul>
      </div>

      <div className="promo__main">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <ul className="promo__nav">
          <li className="promo__nav-item">
                <button type="button"
                    className="promo__button">
                  О проекте
            </button>
          </li>
          <li className="promo__nav-item">
            <button type="button"
                    className="promo__button">
              Технологии
            </button>
          </li>
          <li className="promo__nav-item">
            <button type="button"
                    className="promo__button">
              Студент
            </button>
          </li>
        </ul>
      </div>

    </div>



  )
}

export default Promo;
