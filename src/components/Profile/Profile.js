import React, {useEffect, useState} from "react";
import {CurrentUserContext} from '../../context/CurrentUserContext';
import './Profile.css';
import '../App/App.css';
import Header from "../Header/Header";

function Profile({onSignOut}) {

  const currentUser = React.useContext(CurrentUserContext);

  const [profileName, setProfileName] = useState(
    {
      name: "",
      isValid: false,
    }
  );
  const [profileEmail, setProfileEmail] = useState(
    {
      email: "",
      isValid: false,
    }
  );

  useEffect(() => {
    setProfileName(
      {
       name: currentUser.data.name,
        isValid: false,
      }
    )

    setProfileEmail(
      {
        email: currentUser.data.email,
        isValid: false,
      }
    )

  }, []);

  const handleChangeName = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setProfileName({...profileName, [name]: value});
    console.log(profileName)
  };

  const handleChangeEmail = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setProfileEmail({...profileEmail, [name]: value});
    console.log(profileEmail)
  };

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
          <h2 className='profile__title'>Привет, Сергей!</h2>
          <label className="profile__label">Имя
            <input type="text"
                   className="profile__input"
                   onChange={handleChangeName}
                   value={profileName.name}
                   name="name"
                   placeholder="введите имя"
                   minLength="2"
                   maxLength="40" required/>
          </label>
          <label className="profile__label">E-mail
            <input type="text"
                   className="profile__input"
                   onChange={handleChangeEmail}
                   value={profileEmail.email}
                   name="email"
                   placeholder="введите e-mail"
                   minLength="2"
                   maxLength="200" required/>
          </label>
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
