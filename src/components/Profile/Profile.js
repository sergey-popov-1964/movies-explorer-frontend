import React, {useEffect, useState} from "react";
import {CurrentUserContext} from '../../context/CurrentUserContext';
import './Profile.css';
import '../App/App.css';
import Header from "../Header/Header";

function Profile({onSignOut}) {

  const currentUser = React.useContext(CurrentUserContext);

  const [currentError, setCurrentError] = useState("");
  const [profileState, setProfileState] = useState(
    {
      name: currentUser.data.name,
      email: currentUser.data.email,
    }
  )

  const [isValid, setIsValid] = useState(false);
  const [errorMessageEmail, setErrorMessageEmail] = useState("")
  const [errorMessageName, setErrorMessageName] = useState("")

  useEffect(() => {
    const emailValidity = profileState.email.match(/^[\w-\.\d*]+@[\w\d]+(\.\w{2,4})$/);
    const nameValidity = profileState.name.match(/^[a-zA-ZА-Яа-я0-9- ]{3,16}$/);

    emailValidity ? setErrorMessageEmail("") : setErrorMessageEmail("Поле должно содержать e-mail")
    nameValidity ? setErrorMessageName("") : setErrorMessageName("Поле длиной от з до 16 символов может содержать цифру, латиницу, кириллицу, дефис и пробел")
    setIsValid(emailValidity && nameValidity);
  }, [profileState.email, profileState.name])


  function typeError(data) {
    setCurrentError(data)
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setProfileState(prevState => ({...prevState, [name]: value}));
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   onProfile(registerState , typeError)
  // }

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
              name='profile' noValidate>
          <h2 className='profile__title'>{`Привет, ${currentUser.data.name}!`}</h2>
          <label className="profile__label">Имя
            <input type="text"
                   className="profile__input"
                   onChange={handleChange}
                   value={profileState.name}
                   name="name"
                   placeholder="введите имя"
                   minLength="2"
                   maxLength="40" required/>
          </label>
          <p className="input__error">{errorMessageName}</p>
          <label className="profile__label">E-mail
            <input type="text"
                   className="profile__input"
                   onChange={handleChange}
                   value={profileState.email}
                   name="email"
                   placeholder="введите e-mail"
                   minLength="2"
                   maxLength="200" required/>
          </label>
          <p className="input__error">{errorMessageEmail}</p>
          <button type="submit"
                  aria-label="submit"
                  disabled={true}
                  className='profile__submit'
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


// var expression = /^[\w-\.\d*]+@[\w\d]+(\.\w{2,4})$/;
