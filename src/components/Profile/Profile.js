import React from "react";
import './Profile.css';
import '../App/App.css';
import Header from "../Header/Header";
import logoDiploma from "../../images/diplom_logo.svg";
import {Link} from "react-router-dom";

function Profile() {
  return (
    <div className="block profile">
      <Header/>
      <form action="#"
        // onSubmit={handleSubmit}
            className="profile__form"
            name='profile' noValidate>
        <h2 className='profile__title'>Привет, Сергей!</h2>
        <p className="profile__name">Имя</p>
        <input type="text"
          // value={registerState.email}
          // onChange={handleChange}
               className="profile__input"
               name="name"
          // placeholder="E-mail"
               minLength="2"
               maxLength="40" required/>
        <p className="profile__name">E-mail</p>
        <input type="text"
          // value={loginState.password}
          // onChange={handleChange}
               className="profile__input"
               name="email"
          // placeholder="Пароль"
               minLength="2"
               maxLength="200" required/>
        <p className="profile__name">Пароль</p>
        <button type="submit"
                aria-label="submit"
                className='profile__submit'
                name="form_submit">
          Редактировать
        </button>

      </form>
    </div>
  )
}

export default Profile;
