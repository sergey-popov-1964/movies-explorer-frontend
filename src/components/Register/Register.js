import React, {useEffect, useState} from "react";
import '../App/App.css';
import './Register.css';
import logoDiploma from "../../images/diplom_logo.svg";
import {Link} from "react-router-dom";

function Register({onRegister}) {

  const [currentError, setCurrentError] = useState("");
  const [registerState, setRegisterState] = useState(
    {
      name: '',
      email: '',
      password: '',
    }
  )

  const [isValid, setIsValid] = useState(false);
  const [errorMessageEmail, setErrorMessageEmail] = useState("l")
  const [errorMessagePassword, setErrorMessagePassword] = useState("")
  const [errorMessageName, setErrorMessageName] = useState("")

  useEffect(() => {
    const emailValidity = registerState.email.match(/^[\w-\.\d*]+@[\w\d]+(\.\w{2,4})$/);
    const passwordValidity = registerState.password.match(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g);
    const nameValidity = registerState.name.match(/^[a-zA-ZА-Яа-я0-9- ]{3,16}$/);

    emailValidity ? setErrorMessageEmail("") : setErrorMessageEmail("Поле должно содержать e-mail")
    passwordValidity ? setErrorMessagePassword("") : setErrorMessagePassword("Пароль должен быть длиной не менее 6 символов и содержать спецсимвол, цифру, латинскую букву в верхнем и нижнем регистре")
    nameValidity ? setErrorMessageName("") : setErrorMessageName("Поле длиной от з до 16 символов может содержать цифру, латиницу, кириллицу, дефис и пробел")
    setIsValid(emailValidity && passwordValidity && nameValidity);
  }, [registerState.email, registerState.password , registerState.name])


  function typeError(data) {
    setCurrentError(data)
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setRegisterState(prevState => ({...prevState, [name]: value}));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(registerState , typeError)
  }

  return (
    <div className="page">
      <div className="block">
        <form action="#"
              onSubmit={handleSubmit}
              className="register__form"
              name='register' noValidate>
          <Link to="/" className="register__logo">
            <img src={logoDiploma} alt="Логотип"/>
          </Link>
          <h2 className='register__title'>Добро пожаловать!</h2>
          <p className="register__name">Имя</p>
          <input type="text"
                 value={registerState.name}
                 onChange={handleChange}
                 className="register__input"
                 name="name"
                 placeholder="введите имя"
                 minLength="2"
                 maxLength="40" required/>
          <p className="input__error">{errorMessageName}</p>
          <p className="register__name">E-mail</p>
          <input type="text"
                 value={registerState.email}
                 onChange={handleChange}
                 className="register__input"
                 name="email"
                 placeholder="введите e-mail"
                 minLength="2"
                 maxLength="200" required/>
          <p className="input__error">{errorMessageEmail}</p>
          <p className="register__name">Пароль</p>
          <input type="password"
                 value={registerState.password}
                 onChange={handleChange}
                 className="register__input"
                 name="password"
                 placeholder="введите пароль"
                 minLength="2"
                 maxLength="200" required/>
          <p className="input__error">{errorMessagePassword}</p>
          <p className="register__error">{currentError}</p>
          <button type="submit"
                  aria-label="submit"
                  className={isValid ? "register__submit" : "register__submit register__submit_disabled"}
                  disabled={!isValid}
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
