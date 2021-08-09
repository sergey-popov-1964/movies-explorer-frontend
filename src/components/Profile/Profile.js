import React, {useEffect, useState} from "react";
import {CurrentUserContext} from '../../context/CurrentUserContext';
import './Profile.css';
import '../App/App.css';
import Header from "../Header/Header";

function Profile({onSignOut, onProfile}) {

  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentError, setCurrentError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMessageEmail, setErrorMessageEmail] = useState("")
  const [errorMessageName, setErrorMessageName] = useState("")

  useEffect(() => {
    if (currentUser.name !== undefined) {
      setName(currentUser.name);
    }
    if (currentUser.email !== undefined) {
      setEmail(currentUser.email);
    }
  }, [currentUser]);

  useEffect(() => {
    const emailValidity = email.match(/^[\w-\.\d*]+@[\w\d]+(\.\w{2,4})$/);
    const nameValidity = name.match(/^[a-zA-ZА-Яа-я0-9- ]{3,16}$/);

    emailValidity ? setErrorMessageEmail("") : setErrorMessageEmail("Поле должно содержать e-mail")
    nameValidity ? setErrorMessageName("") : setErrorMessageName("Поле длиной от з до 16 символов может содержать цифру, латиницу, кириллицу, дефис и пробел")
    setIsValid(emailValidity && nameValidity && (name !== currentUser.name || email !== currentUser.email));
  }, [email, name])

  function typeError(data) {
    setCurrentError(data)
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onProfile({name, email}, typeError)
  }

  function handlerSignOut() {
    onSignOut()
  }

  return (
    <div className="page">
      <div className="block">
        <Header isFilms={true}
                isLogin={false}
                isAccount={true}
                currentSection={"account"}
        />
        <form action="#"
              className="profile__form"
              name='profile' noValidate
              onSubmit={handleSubmit}>
          <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
          <label className="profile__label">Имя
            <input type="text"
                   className="profile__input"
                   onChange={handleChangeName}
                   value={name}
                   name="name"
                   placeholder="введите имя"
                   minLength="2"
                   maxLength="40" required/>
          </label>
          <p className="input__error">{errorMessageName}</p>
          <label className="profile__label">E-mail
            <input type="text"
                   className="profile__input"
                   onChange={handleChangeEmail}
                   value={email}
                   name="email"
                   placeholder="введите e-mail"
                   minLength="2"
                   maxLength="200" required/>
          </label>
          <p className="input__error">{errorMessageEmail}</p>
          <p className="register__error">{currentError}</p>
          <button type="submit"
                  aria-label="submit"
                  className={isValid ? "profile__submit" : "profile__submit profile__submit_disabled"}
                  disabled={!isValid}
                  name="form_submit">
            Редактировать
          </button>
          <button type="button"
                  aria-label="exit"
                  className='profile__exit'
                  name="form_exit"
                  onClick={handlerSignOut}>
            Выйти из аккаунта
          </button>
        </form>
      </div>
    </div>
  )
}

export default Profile;
