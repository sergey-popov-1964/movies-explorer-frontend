import React from "react";
import './Login.css';
import '../App/App.css';
import logoDiploma from "../../images/diplom_logo.svg";
import {Link} from "react-router-dom";

function Login() {
  return (
    <div className="page">
      <div className="block">
        <form action="#"
              className="login__form"
              name='register' noValidate>
          <Link to="/" className="login__logo">
            <img src={logoDiploma} alt="Логотип"/>
          </Link>
          <h2 className='login__title'>Рады видеть!</h2>
          <p className="login__name">E-mail</p>
          <input type="text"
                 className="login__input"
                 name="email"
                 placeholder="введите е-mail"
                 minLength="2"
                 maxLength="40" required/>
          <p className="login__name">Пароль</p>
          <input type="password"
                 className="login__input"
                 name="password"
                 placeholder="введите пароль"
                 minLength="2"
                 maxLength="200" required/>
          <button type="submit"
                  aria-label="submit"
                  className='login__submit'
                  name="form_submit">
            Войти
          </button>
          <p className='login__text'>Ещё не зарегистрированы?&nbsp;
            <Link className='login__link' to='/signup'>Регистрация</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login;
