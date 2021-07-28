import React from "react";
import '../App/App.css';
import './Register.css';
import logoDiploma from "../../images/diplom_logo.svg";
import {Link} from "react-router-dom";

function Register() {
  return (
    <div className="page">
      <div className="block">
        <form action="#"
              className="register__form"
              name='register' noValidate>
          <Link to="/" className="register__logo">
            <img src={logoDiploma} alt="Логотип"/>
          </Link>
          <h2 className='register__title'>Добро пожаловать!</h2>
          <p className="register__name">Имя</p>
          <input type="text"
                 className="register__input"
                 name="name"
                 placeholder="введите имя"
                 minLength="2"
                 maxLength="40" required/>
          <p className="register__name">E-mail</p>
          <input type="text"
                 className="register__input"
                 name="email"
                 placeholder="введите e-mail"
                 minLength="2"
                 maxLength="200" required/>
          <p className="register__name">Пароль</p>
          <input type="password"
                 className="register__input"
                 name="password"
                 placeholder="введите пароль"
                 minLength="2"
                 maxLength="200" required/>
          <p className="register__error">Что-то пошло не так...</p>
          <button type="submit"
                  aria-label="submit"
                  className='register__submit'
                  name="form_submit">
            Зарегистрироваться
          </button>
          <p className='register__text'>Уже зарегистрированы?&nbsp;
            <Link className='register__link' to='/signin'>Войти</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register;
