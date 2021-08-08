import React, {useEffect, useState} from "react";
import './Login.css';
import '../App/App.css';
import logoDiploma from "../../images/diplom_logo.svg";
import {Link} from "react-router-dom";

function Login({onLogin}) {

  const [loginState, setLoginState] = useState(
    {
      email: '',
      password: '',
    }
  )
  const [isValid, setIsValid] = useState(false);
  const [errorMessageEmail, setErrorMessageEmail] = useState("l")
  const [errorMessagePassword, setErrorMessagePassword] = useState("")

  useEffect(() => {
    const emailValidity = loginState.email.match(/^[\w-\.\d*]+@[\w\d]+(\.\w{2,4})$/);
    const passwordValidity = loginState.password.match(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g);

    emailValidity ? setErrorMessageEmail("") : setErrorMessageEmail("Поле должно содержать e-mail")
    passwordValidity ? setErrorMessagePassword("") : setErrorMessagePassword("Пароль должен содержать спецсимвол, цифру, латинскую букву в верхнем и нижнем регистре")
    setIsValid(emailValidity && passwordValidity);
  }, [loginState.email, loginState.password])

  function handleChange(e) {
    const {name, value} = e.target;
    setLoginState(prevState => ({...prevState, [name]: value}));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(loginState)
  }

  return (
    <div className="page">
      <div className="block">
        <form action="#"
              onSubmit={handleSubmit}
              className="login__form"
              name='register' noValidate>
          <Link to="/" className="login__logo">
            <img src={logoDiploma} alt="Логотип"/>
          </Link>
          <h2 className='login__title'>Рады видеть!</h2>
          <p className="login__name">E-mail</p>
          <input type="text"
                 value={loginState.email}
                 onChange={handleChange}
                 className="login__input"
                 name="email"
                 placeholder="введите е-mail"
                 minLength="2"
                 maxLength="40" required/>
          <p className="login__error">{errorMessageEmail}</p>
          <p className="login__name">Пароль</p>
          <input type="password"
                 value={loginState.password}
                 onChange={handleChange}
                 className="login__input"
                 name="password"
                 placeholder="введите пароль"
                 minLength="2"
                 maxLength="200" required/>
          <p className="login__error">{errorMessagePassword}</p>
          <button type="submit"
                  aria-label="submit"
                  className={isValid ? "login__submit" : "login__submit login__submit_disabled"}
                  disabled={!isValid}
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
