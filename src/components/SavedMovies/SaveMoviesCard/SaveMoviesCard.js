import React, {useState} from 'react';
import './SaveMoviesCard.css';
import heartRed from "../../../images/heart-red.svg";
import heartTransparent from "../../../images/heart-transparent.svg";
import closeButton from "../../../images/close-button.svg";
import {BEAT_FILMS_IMAGE_URL} from "../../../utils/constants"
import MoviesApi from "../../../utils/MoviesApi"

function SaveMoviesCard({card, onDelete}) {

  // function onClickDeleteFilm() {
  //   MoviesApi.deleteSaveFilm(card._id)
  //     .then(response => {
  //       console.log("Успешно")
  //     })
  //     .catch((error) => console.log("Ошибка загрузки данных с сервера", error));
  // }

  const lengthHour = (card.duration - card.duration % 60) / 60
  const lengthMinute = card.duration % 60

  return (
    <li className="element">
      <img src={card.image}
           alt={card.nameRU}
           className="image"/>
      <div className="description">
        <div className="content">
          <p className="content__text">{card.nameRU}</p>
          <p className="content__duration">{`${lengthHour}ч `}{lengthMinute !== 0 ? `${lengthMinute}м` : ""}</p>
        </div>
        <img src={closeButton}
             className="content__close"
             // onClick={onClickDeleteFilm}
             alt="Кнопка удаления фильма из сохраненных"/>
      </div>
    </li>
  );

}
export default SaveMoviesCard;
