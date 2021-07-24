import React from "react";
import './Profile.css';
import '../App/App.css';
import Header from "../Header/Header";

function Profile() {
  return (
    <div className="page">
    <div className="block">
      <Header isFilms = {true}
              isLogin = {false}
              isAccount = {true}
      />
      <form action="#"
        // onSubmit={handleSubmit}
            className="profile__form"
            name='profile' noValidate>
        <h2 className='profile__title'>Привет, Сергей!</h2>
        <label className="profile__label">Имя
          <input type="text"
            // value={registerState.email}
            // onChange={handleChange}
                 className="profile__input"
                 name="name"
            // placeholder="E-mail"
                 minLength="2"
                 maxLength="40" required/>
        </label>
        <label className="profile__label">E-mail
          <input type="text"
            // value={loginState.password}
            // onChange={handleChange}
                 className="profile__input"
                 name="email"
            // placeholder="Пароль"
                 minLength="2"
                 maxLength="200" required/>
                </label>
        <button type="submit"
                aria-label="submit"
                className='profile__submit'
                name="form_submit">
          Редактировать
        </button>
        <button type="button"
                aria-label="exit"
                className='profile__exit'
                name="form_exit">
          Выйти из аккаунта
        </button>
      </form>
    </div>
    </div>
  )
}

export default Profile;
