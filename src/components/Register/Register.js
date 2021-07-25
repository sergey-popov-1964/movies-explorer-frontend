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
        // onSubmit={handleSubmit}
            className="register__form"
            name='register' noValidate>
        <Link to="/" className="register__logo">
          <img src={logoDiploma}  alt=""/>
        </Link>
        {/*<img src={logoDiploma} className="register__logo" alt=""/>*/}
        <h2 className='register__title'>Добро пожаловать!</h2>
        <p className="register__name">Имя</p>
        <input type="text"
          // value={registerState.email}
          // onChange={handleChange}
               className="register__input"
               name="name"
          // placeholder="E-mail"
               minLength="2"
               maxLength="40" required/>
        <p className="register__name">E-mail</p>
        <input type="text"
          // value={loginState.password}
          // onChange={handleChange}
               className="register__input"
               name="email"
          // placeholder="Пароль"
               minLength="2"
               maxLength="200" required/>
        <p className="register__name">Пароль</p>
        <input type="password"
          // value={loginState.password}
          // onChange={handleChange}
               className="register__input"
               name="password"
          // placeholder="Пароль"
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
